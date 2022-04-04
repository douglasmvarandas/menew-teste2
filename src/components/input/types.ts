export interface InputProps {
  register?: (name: string) => void;
  name?: string;
  error?: string;
  colorSchema?: boolean;
  type?: string;
  placeholder?: string;
  value?: string | number;
  className?: string;
  borderSchema?: boolean;
}