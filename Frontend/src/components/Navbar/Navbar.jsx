import { FaUserCircle } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import DropdownMenu from "../../utils/DropdownMenu";
import { Link } from "react-router";

const Navbar = () => {
  const menuItems = [
    { label: "Logout", onClick: () => alert("Logged out!") },
  ];

  return (
    <div className="w-full h-[80px] border-b-[1px] border-[#313131]">
      <div className="container mx-auto flex items-center h-full">
        <div className="flex item-center justify-between w-full ">
          <div className="logo">
            <Link
              to={"/"}
              className="flex items-center gap-3 text-4xl text-[#313131]"
            >
              <FaUserCircle color="#515def" size="2rem" />
              AUTH SYSTEM
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link
              to={"/login"}
              className="text-xl text-[#313131] font-medium items-center flex gap-3 border-b-[2px] border-[#515def]"
            >
              <RiLoginCircleFill color="#515def" size="2rem" />
              Login
            </Link>
            <Link
              to={"/register"}
              className="text-xl text-[#313131] font-medium items-center flex gap-3 border-b-[2px] border-[#515def]"
            >
              <RiLoginCircleFill color="#515def" size="2rem" />
              Register
            </Link>
             <DropdownMenu title="Account" items={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
