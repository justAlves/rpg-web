import { FormButton } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

function Button({children, type, onClick}: ButtonProps) {
  return (
    <FormButton type={type} onClick={onClick}>{children}</FormButton>
  );
}

export default Button;