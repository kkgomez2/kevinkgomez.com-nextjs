import MenuItem from "./menu-item";
import { useState, useEffect } from "react";

export default function MenuList({ dropdown = false }) {
  const [height, setHeight] = useState(400);

  useEffect(() => {
    if (dropdown) {
      setHeight(130);
    } else {
      setHeight(400);
    }
  });

  return (
    <nav
      style={dropdown ? { height: height } : {}}
      className={`menu-list ${
        dropdown ? "" : "menu"
      } flex-row items-center whitespace-nowrap lg:pt-4 lg:items-start lg:flex-col`}
    >
      <MenuItem menuId="demos">Demos</MenuItem>
      <MenuItem menuId="about">About</MenuItem>
      <MenuItem menuId="homespec">Home Studio Spec</MenuItem>
      <MenuItem menuId="resume">Resume</MenuItem>
      <MenuItem menuId="contact">Contact</MenuItem>
    </nav>
  );
}
