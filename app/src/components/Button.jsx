import React from "react";

/**
 * 
 * @param {*} props 
 * button - object with id and label fields for button component
 * className - custom styles 
 * 
 */
function Button(props) {
  const { button, className } = props;
  const handleClick = (e) => {
    if (props.handleClick) {
      props.handleClick(e.target.id);
    } else {
      console.log("Button does not have a handler");
    }
  };

  const buttonClass = className ? `button ${className}` : "button";

  return (
    <button id={button.id} onClick={handleClick} className={buttonClass}>
      {button.label}
    </button>
  );
}

export default Button;
