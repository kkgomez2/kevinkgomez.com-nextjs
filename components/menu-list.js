import MenuItem from "./menu-item";

export default function MenuList({ dropdown = false }) {
  return (
    <div
      className={`${
        dropdown ? "" : "menu"
      } flex-row items-center whitespace-nowrap lg:pt-4 lg:items-start lg:flex-col`}
    >
      <MenuItem menuId="demos">Demos</MenuItem>
      <MenuItem menuId="about">About</MenuItem>
      <MenuItem menuId="homespec">Home Spec</MenuItem>
      <MenuItem menuId="resume">Resume</MenuItem>
      <MenuItem menuId="contact">Contact</MenuItem>
      
    </div>
  );
}
