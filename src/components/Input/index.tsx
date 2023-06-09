import { FormInput } from './styles';

type InputProps = {
  type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | undefined;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({type, placeholder, onChange}: InputProps) {
  return (
    <FormInput 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;