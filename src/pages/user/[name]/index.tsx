import { Card } from "@component/Common";
import { cardProps } from "@constant/test";
import * as L from "@component/Layout";

const User = () => {
  return (
    <div>
      <L.Card>
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
      </L.Card>
    </div>
  );
};

export default User;
