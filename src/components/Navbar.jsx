import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { bolimlar } from "../utils/sidebarData";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false); 
  const [selected, setSelected] = useState(1); 
  const [lessonOpen, setLessonOpen] = useState(true); 

  return (
    <div className="fixed border-b w-full top-0 h-20 bg-white px-4 z-50 flex items-center">
      <h1 className="text-xl text-slate-700">Amaliy mexanika</h1>
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-auto">
        <span className="text-gray-500 mr-2">🔍</span>
        <input
          type="text"
          placeholder="Search your content and Canva’s"
          className="bg-transparent focus:outline-none w-full text-gray-700"
        />
      </div>
      <div className="flex gap-4 ml-4 text-gray-500 text-xl items-center">
        <p
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 cursor-pointer">
          Bo'limlar <span className="text-slate-700"><FaAngleDown /></span>
        </p>
        <span>🔔</span>
      </div>

      {open && (
        <div className="w-[85%] overflow-auto  h-[80vh] p-4 bg-white shadow-[0px_0px_10px_silver] backdrop-blur-sm text-black absolute top-24 translate-x-[-50%] left-[50%] rounded-lg grid grid-cols-2 gap-3">
          <div>
            {bolimlar.map((item) => (
              <div key={item.id} className="mb-4">
                <h1
                  onClick={() => setSelected(item.id)}
                  className={`flex items-center cursor-pointer gap-3 px-3 py-2 rounded-sm ${selected === item.id ? "bg-blue-500 text-white": "hover:bg-blue-500 hover:text-white text-slate-900"}`}>
                  {item.name} {item.bobname}
                  <FaAngleDown />
                </h1>
              </div>
            ))}
          </div>

          <div className="overflow-auto">
            {selected ? (
              <div>
                {bolimlar
                  .find((bob) => bob.id === selected)
                  ?.children?.map((lesson) => (
                    <NavLink to={lesson.path} key={lesson.id} className="bg-slate-100 p-3 rounded-lg mb-2 shadow block">
                      <h1 className="text-slate-900">{lesson.name}</h1>
                      <p className="text-sm text-gray-700">{lesson.mavzu}</p>
                    </NavLink>
                  ))}
              </div>
            ) : (
              <p className="text-gray-600">Chapdan biror bob tanlang.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
