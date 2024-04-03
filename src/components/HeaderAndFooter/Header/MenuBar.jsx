import React from "react";
import { useDispatch } from "react-redux";
import bg from "../../../assets/hamburger_bg.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { uiActions } from "../../../store/uiSlice";
import { menuBarData } from "../data/headerData";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  const dispatch = useDispatch();
  return (
    <menu
      className="fixed z-50 bg-black/10 w-full h-full overflow-y-hidden flex"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="w-[54%]"
        onClick={() => dispatch(uiActions.menuBarHanlder())}
      />
      <div className="w-[46%] bg-black text-white ml-auto h-full px-28 py-16 space-y-16 overflow-y-scroll scrollbar-hide">
        {/* Close Button */}
        <button
          className="flex justify-end w-full"
          onClick={() => dispatch(uiActions.menuBarHanlder())}
        >
          <IoCloseCircleOutline className="scale-[3]" />
        </button>

        {/* Menu Items */}
        <ul className="text-[28px] font-medium space-y-8">
          {menuBarData.map(({ id, URL, text, subMenu }) => (
            <MenuItem key={id} subMenu={subMenu} text={text} URL={URL} />
          ))}
        </ul>
      </div>
    </menu>
  );
};

export default MenuBar;

{
  /* <menu */
}
