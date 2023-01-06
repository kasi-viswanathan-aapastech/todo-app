import React from "react";

type IconButtonType = {
  src?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  size?: number;
};

const IconButton = ({ src, onClick, size }: IconButtonType) => {
  return (
    <img
      src={src}
      alt={src}
      onClick={onClick}
      height={`${size}px`}
      width={`${size}px`}
    ></img>
  );
};

export default IconButton;
