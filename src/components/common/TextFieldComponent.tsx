type option = {
  val: string;
  name: string;
};

type TextFieldComponentProps = {
  option: {
    type: string;
    name: string;
    label: string;
    options?: option[];
    value: string;
    placeholder?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TextFieldComponent = ({ option, onChange }: TextFieldComponentProps) => {
  return (
    <div className="flex justify-between w-full">
      <label className="flex pt-5 col-12 columns-sm text-lg-right">
        {option.label}
      </label>
      <div className="flex pr-10 pt-5 col-12 columns-sm text-lg-right w-60 relative">
        <input
          type="text"
          name={option.name}
          className="flex-grow w-40 gap-2 px-2 py-1.5 text-base font-medium text-left text-[#1b1b1c]"
          placeholder={option.placeholder}
          value={option.value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default TextFieldComponent;
