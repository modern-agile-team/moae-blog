import { NextApiRequest, NextApiResponse } from "next";
import users from "../../../users.json";

const userList = JSON.parse(JSON.stringify(users));

const loginAPI = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const jwt = require("jsonwebtoken");
    if (userList[email]) {
      if (userList[email].password !== password) {
        res.status(401).send({ success: false, message: "틀린 비밀번호" });
      } else {
        const token = jwt.sign(
          {
            email: email,
          },
          "7adc79e92acf66ec2999b9a64462a8f989ee6936bb9849b9cc8c20d5a074f3421559b895dd45abacc3f891dbc06f8cb1fa42afe82b1ec6e24e7b157572fcde23",
          "",
          { expiresIn: "365d" }
        );
        res.status(200).send({ success: true, message: "로그인 성공", token: token });
      }
    } else {
      res.status(401).send({ success: false, message: "존재하지 않는 유저" });
    }

    res.send("");
  } catch (err) {}
};

export default loginAPI;
