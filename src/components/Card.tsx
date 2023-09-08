import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const Card = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className="card">{props.children}</div>
      </div>
    </>
  );
};

export default Card;
