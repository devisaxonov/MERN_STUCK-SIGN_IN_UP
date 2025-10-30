import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ title = "Menu", items = [] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Tugma */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-primary"
      >
        {title}
      </button>

      {/* Menyu */}
      {open && (
        <ul className="absolute mt-2 w-52 bg-base-100 shadow-lg rounded-box p-2 z-50">
          {items.length > 0 ? (
            items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href || "#"}
                  onClick={() => {
                    item.onClick?.();
                    setOpen(false); // element bosilganda menyuni yopish
                  }}
                  className="block px-4 py-2 hover:bg-base-200 rounded-md"
                >
                  {item.label}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-400 px-4 py-2">No items</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
