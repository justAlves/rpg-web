import { FormInput } from './styles';

type InputProps = {
  type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | undefined;
  placeholder: string;
}

function Input({type, placeholder}: InputProps) {
  return (
    <FormInput type={type} placeholder={placeholder}/>
  );
}

export default Input;