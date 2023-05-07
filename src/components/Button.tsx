import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`bg-my-red text-my-white px-6 py-2 rounded-sm cursor-pointer ${
        props.fullWidth && 'w-full mt-2'
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
