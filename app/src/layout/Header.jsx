import React, { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { algorithms, search, title } from "../data/renderableData";

const Header = () => {
  const defaultOption = algorithms[0].value;
  const [option, selectOption] = useState(defaultOption);
  const handleSearch = (id) => {
    if (id === search.id) {
      console.log("clicked on search", option);
    }
  };
  const handleOptions = (option) => {
    console.log(option);
    selectOption(option);
  };
  
  return (
    <div className="header">
      <p className="title">{title}</p>
      <div className="container">
        <Dropdown
          options={algorithms}
          onChange={handleOptions}
          className="algos"
        />
        <Button button={search} handleClick={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
