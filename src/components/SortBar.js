import React from "react";

function SortBar({ onSort }) {
  return (
    <div className="ui menu">
      <div className="header item">Sort By:</div>
      <button className="item" onClick={() => onSort("health")}>Health</button>
      <button className="item" onClick={() => onSort("damage")}>Damage</button>
      <button className="item" onClick={() => onSort("armor")}>Armor</button>
    </div>
  );
}

export default SortBar;
