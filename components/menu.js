import MenuList from "./menu-list";
import { useState } from "react";

export default function Menu({}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-row items-center">
      <div className="p-4 lg:p-0" onClick={() => setShowMenu(!showMenu)}>
        <img
          className="menu-button fill-white"
          src="images/icons/iconfinder_burger-menu-1_6351905.svg"
        />
      </div>
      <MenuList dropdown={showMenu}/>
    </div>
  );
}
