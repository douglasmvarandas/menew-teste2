import { ButtonStyle } from "./style";
import { ButtonProps } from "./types";

export const Button = ({children, callback, name, type }: ButtonProps) => {
  return (
    <>
      <ButtonStyle onClick={callback} type={type}>{name}</ButtonStyle>
    </>
  );
};
