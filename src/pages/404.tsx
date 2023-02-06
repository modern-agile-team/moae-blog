import Image from "next/image";

import image404 from "@assets/images/404Image.png";

const Custom404 = () => {
  return (
    <div>
      <Image src={image404} />
    </div>
  );
};

export default Custom404;
