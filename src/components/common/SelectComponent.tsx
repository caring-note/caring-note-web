type option = {
  val: string;
  name: string;
};

type SelectComponentProps = {
  option: {
    type: string;
    name: string;
    label: string;
    options?: option[];
    value: string;
    placeholder?: string;
  };
  onSelect: React.ChangeEventHandler<HTMLSelectElement>;
};
const SelectComponent = ({ option, onSelect }: SelectComponentProps) => {
  return (
    <div className="flex justify-between w-full">
      <label className="flex pt-5 col-12 columns-sm text-lg-right">
        {option.label}
      </label>
      <div className="flex pt-5 pr-10 col-12 columns-sm text-lg-right w-60">
        <select
          name={option.name}
          className="flex flex-grow w-40 gap-2 pr-2 px-2 py-1.5 text-base font-medium text-left text-[#1b1b1c]"
          value={option.value}
          onChange={onSelect}>
          {option.options?.map((element) => {
            return (
              <option key={`${element.val}`} value={element.val}>
                {element.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default SelectComponent;
