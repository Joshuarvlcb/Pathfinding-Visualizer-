import React, { useState } from "react";
/**
 *
 * @param {Object} props
 * options - Options to render in Dropdown, each option is an object with label, value fields.
 * defaultOption - if you want a default option set on dropdown
 * onChange - callback function to handle click on options
 * className - custom styles to override default styles of Dropdown, might have to use !important keyword to overwrite styles present in base component
 */
function Dropdown(props) {
  const { options, className } = props;
  const dropdownClass = className ? `dropdown ${className}` : "dropdown";
  const [selectedValue, setSelectedValue] = useState(
    props.defaultOption ? props.defaultOption : options[0].value
  );

  function handleChange(event) {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    if (props.onChange) {
      props.onChange(selectedValue);
    }
  }

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className={dropdownClass}
    >
      {options?.map((option, key) => (
        <option key={key} value={option.value} className="option">
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
