import React from "react";

type TextBoxType = {
  value?: string;
  enterPress?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const TextBox = React.forwardRef<HTMLInputElement, TextBoxType>(
  ({ value, onChange, enterPress }: TextBoxType, ref) => {
    return (
      <input
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            enterPress!();
          }
        }}
        ref={ref}
      ></input>
    );
  }
);

export default TextBox;
