import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
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
        <div className={`chevron ${isOpen ? "up" : "down"}`}>
          <BsChevronUp />
        </div>
      </div>
      <div className={`dropdown-content ${isOpen ? "show" : "hide"}`}>
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
