export interface ButtonProps {
  children?: any
  callback?: () => void
  type?: "submit" | "button" | "reset"
  name?: string
}