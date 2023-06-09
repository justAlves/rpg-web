import { FormButton } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

function Button({children, type}: ButtonProps) {
  return (
    <FormButton type={type}>{children}</FormButton>
  );
}

export default Button;