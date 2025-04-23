import MenuList from "./menu-list";
import { useState, useEffect } from "react";

export default function Menu({}) {
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(900);
  useEffect(() => {
    const resizeW = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  }, []);

  useEffect(() => {
    if (screenSize > 670) {
      setShowMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="flex flex-row items-center">
      <div className="p-4 lg:p-0" onClick={() => setShowMenu(!showMenu)}>
        <img
          className="menu-button fill-white cursor-pointer"
          src="images/icons/iconfinder_burger-menu-1_6351905.svg"
        />
      </div>
      <MenuList dropdown={showMenu}/>
    </div>
  );
}
