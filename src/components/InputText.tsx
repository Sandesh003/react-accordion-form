interface InputTextProps {
  handleOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeHolder?: string;
}

const InputText = (props: InputTextProps) => {
  const { handleOptionClick, value, name, placeHolder } = props;
  return (
    <div className="form-text">
      <input
        className="form-text-input"
        type="text"
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleOptionClick}
      />
    </div>
  )
}
export default InputText