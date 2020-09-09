import React, { useState, FunctionComponent } from "react";

const Square: FunctionComponent<TypeSquereProps> = ({
  value = "",
  onClick,
}) => {
  const [stateValue, setValue] = useState(value);

  const clickSquare = (stateValue: String | null) => {
    setValue("X");
  };

  return (
    <button className="square" onClick={() => clickSquare(stateValue)}>
      {stateValue}
    </button>
  );
};

type TypeSquereProps = {
  onClick?: () => void;
  value: String | null;
};

export default Square;
