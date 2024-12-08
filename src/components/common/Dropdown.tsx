import arrowDropDown from "@icon/arrowdropdown.svg";
import arrowDropUp from "@icon/arrowdropup.svg";
import React, { useState } from "react";
interface DropdownProps {
  options: string[]; // 드롭다운 항목 배열
  placeholder?: string; // 선택 전 기본 텍스트
  onSelect?: (value: string) => void; // 선택 이벤트 핸들러
  disabled?: boolean; // 드롭다운 비활성화 여부
  helpText?: string; // 드롭다운 아래 표시할 도움말 텍스트
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select",
  onSelect,
  disabled = false,
  helpText = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // 드롭다운 열림 상태
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // 선택된 값
  const [isFocused, setIsFocused] = useState<boolean>(false); // 포커스 상태

  const handleToggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    if (!disabled) {
      setSelectedValue(value);
      setIsOpen(false);
      if (onSelect) onSelect(value);
    }
  };

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`relative w-52 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      {/* 드롭다운 헤더 */}
      <div
        className={`border rounded-md p-2 flex justify-between items-center cursor-pointer ${
          disabled
            ? "bg-gray-100 text-gray-400"
            : isFocused
            ? "border-blue-500 ring-1 ring-blue-500 border-2"
            : "border-gray-300 hover:border-gray-500"
        }`}
        onClick={handleToggle}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onFocus={handleFocus}
        onBlur={handleBlur}>
        <span
          className={`${
            selectedValue ? "text-black" : "text-gray-500"
          } font-medium text-base leading-6`}>
          {selectedValue || placeholder}
        </span>
        <img
          src={isOpen ? arrowDropDown : arrowDropUp}
          alt={isOpen ? "Collapse" : "Expand"}
          className="w-4 h-4"
        />
      </div>

      {/* 드롭다운 리스트 */}
      {isOpen && (
        <ul
          className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full max-h-60 overflow-auto"
          role="listbox"
          tabIndex={-1}>
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-base leading-6"
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selectedValue === option}>
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* 도움말 텍스트 */}
      {helpText && (
        <p
          className={`mt-2 text-sm leading-5 ${
            disabled ? "text-gray-400" : "text-gray-700"
          }`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
