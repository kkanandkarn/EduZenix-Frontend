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
  const COMPONENT_MAP = {
    text: TextInput,
    number: NumberInput,
    password: PasswordInput,
    otp: OTPInput,
    search: SearchInput,
    SingleSelect,
    MultiSelect,
    outline: OutlineInput,
  } as unknown as Record<InputType, React.ComponentType<InputProps>>;
  const Component = COMPONENT_MAP[props.type];

  return Component ? <Component {...props} /> : null;
};

export default Input;
