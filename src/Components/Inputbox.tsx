import { ChangeEvent } from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputbox: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className="self-center w-[400px] h-[60px] placeholder:p-3"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Inputbox;
