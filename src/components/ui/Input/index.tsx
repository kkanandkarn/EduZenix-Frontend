import TextInput from "./TextInput";
import type { InputProps, InputType } from "../type";
import PasswordInput from "./PasswordInput";
import OTPInput from "./OTPInput";
import SearchInput from "./SearchInput";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import NumberInput from "./NumberInput";
import OutlineInput from "./OutlineInput";

const Input = (props: InputProps) => {
  const COMPONENT_MAP: Record<InputType, React.FC<any>> = {
    text: TextInput,
    number: NumberInput,
    password: PasswordInput,
    otp: OTPInput,
    search: SearchInput,
    SingleSelect: SingleSelect,
    MultiSelect: MultiSelect,
    outline: OutlineInput,
  };
  const Component = COMPONENT_MAP[props.type];

  return Component ? <Component {...props} /> : null;
};

export default Input;
