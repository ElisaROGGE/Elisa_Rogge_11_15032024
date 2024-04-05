import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./Dropdown.scss";

interface DropdownProps {
  title: string;
  children: any;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div className="title" onClick={toggleOpen}>
        <div>{title}</div>
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
