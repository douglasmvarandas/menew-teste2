import React from "react";

//styles
import { Container, Content, Fields, Input, Button, SpanError } from "./styles";

type Props = {
  value: string;
  changeValue: (value: string) => void;
  title: string;
  type: string;
  placeholder?: string;
  titleButton?: string;
  typeButton?: "button" | "submit" | "reset";
  onClickButton?: () => void;
  errorMessage?: string;
};

const TitledInput = (props: Props) => {
  const {
    title,
    placeholder,
    type,
    onClickButton,
    titleButton,
    typeButton,
    errorMessage,
    value,
    changeValue,
  } = props;

  const setChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue && changeValue(e.target.value);
  };

  return (
    <Container>
      <Content>
        <Fields>
          <label>{title}</label>
          <Input
            value={value}
            onChange={setChangeValue}
            placeholder={placeholder}
            type={type || "text"}
            minLength={3}
            maxLength={40}
            required
          />
        </Fields>
        {titleButton && (
          <Button type={typeButton || "button"} onClick={onClickButton}>
            {titleButton}
          </Button>
        )}
      </Content>
      <SpanError isVisible={!!errorMessage}>{errorMessage}</SpanError>
    </Container>
  );
};

export default TitledInput;
