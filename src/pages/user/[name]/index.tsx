import { Card, CardSection } from "@component/Common";
import { cardProps } from "src/constant/test";

const User = () => {
  return (
    <div>
      <CardSection>
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
      </CardSection>
    </div>
  );
};

export default User;
