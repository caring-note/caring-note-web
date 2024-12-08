import check from "@icon/16/check.outline.blue.svg";
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
        className={`border rounded-[0.25rem] px-2 py-[0.375rem] flex justify-between items-center cursor-pointer ${
          disabled
            ? "border-grayscale-20 bg-grayscale-5"
            : isFocused
            ? "border-primary-50 ring-1 ring-primary-50 border-2 bg-white"
            : "border-grayscale-30 hover:border-grayscale-50"
        }`}
        onClick={handleToggle}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onFocus={handleFocus}
        onBlur={handleBlur}>
        <span
          className={`text-body1 font-medium ${
            disabled
              ? "text-grayscale-30"
              : selectedValue
              ? "text-grayscale-90"
              : "text-grayscale-40"
          } leading-6`}>
          {selectedValue || placeholder}
        </span>
        <img
          src={isOpen ? arrowDropUp : arrowDropDown}
          alt={isOpen ? "Collapse" : "Expand"}
          className="w-[1.25rem] h-[1.25rem]"
        />
      </div>

      {/* 드롭다운 리스트 */}
      {isOpen && (
        <ul
          className="absolute mt-1 p-2 bg-white border border-gray-300 rounded-[0.25rem] shadow-lg z-10 w-full max-h-60 overflow-auto"
          role="listbox"
          tabIndex={-1}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`py-1 px-2 flex justify-between items-center hover:bg-grayscale-3 cursor-pointer text-body1 font-medium text-grayscale-90 leading-6 rounded-[0.25rem] ${
                selectedValue === option ? "text-primary-50" : ""
              }`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selectedValue === option}>
              <span>{option}</span>
              {selectedValue === option && (
                <img src={check} alt="Selected" className="w-4 h-4" />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* 도움말 텍스트 */}
      {helpText && (
        <p
          className={`pt-[1px] pb-[2px] text-caption1 font-regular ${
            disabled ? "text-grayscale-40" : "text-grayscale-70"
          }`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
