import { ButtonStyle } from "./style";
import { ButtonProps } from "./types";

export const Button = ({children, callback, name }: ButtonProps) => {
  return (
    <>
      <ButtonStyle onClick={callback}>{name}</ButtonStyle>
    </>
  );
};
