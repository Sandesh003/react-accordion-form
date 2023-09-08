interface InputProps {
  isOptionSelected: (value: string) => boolean;
  handleOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

const InputRadio = (props: InputProps) => {
  const { isOptionSelected, handleOptionClick, value, name } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        value={value}
        checked={isOptionSelected!(value)}
        onChange={handleOptionClick}
      />
      <label className="form-check-label" htmlFor={value}>
        {value}
      </label>
    </div>
  )
}
export default InputRadio