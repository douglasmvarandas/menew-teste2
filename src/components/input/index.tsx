import { Container, InputContainer } from "./style";
import { InputProps } from "./types";

export const Input = ({
  register,
  type,
  name,
  error = "",
  colorSchema = false,
  borderSchema = false,
  value,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <InputContainer borderSchema={borderSchema} colorSchema={colorSchema}>
        <input {...register(name)} type={type} value={value} {...rest} />
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

