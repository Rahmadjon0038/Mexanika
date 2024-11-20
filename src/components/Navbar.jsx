import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { bolimlar } from '../utils/sidebarData';
function Navbar() {
    const [open, setOpen] = useState(false)
    const [lesonOpen, setLessonOpen] = useState(true)
    const [selected, setSelected] = useState(1)
    console.log(selected)
    const children = bolimlar
    console.log(children)

    return (
        <div class=" fixed border-b w-full top-0 h-20 bg-white px-4  z-50 flex items-center">
            <h1 className='text-xl text-slate-700'>Amaliy mexanika</h1>
            <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-auto">
                <span class="text-gray-500 mr-2">🔍</span>
                <input type="text" placeholder="Search your content and Canva’s" class="bg-transparent focus:outline-none w-full text-gray-700" />
            </div>
            <div class="flex gap-4 ml-4 text-gray-500 text-xl items-center">
                <p onClick={() => setOpen(!open)} className='flex items-center gap-3 cursor-pointer'>Bo'limlar <span className='text-slate-700'><FaAngleDown /></span></p>
                <span>🔔</span>
            </div>
            {open && <div className='w-[85%] h-[80vh] p-4 bg-white shadow-[0px_0px_10px_silver] backdrop-blur-sm text-white absolute top-24 translate-x-[-50%] left-[50%] rounded-lg grid grid-cols-2 gap-3'>
                <div>
                    {bolimlar?.map((item) => (
                        <div key={item.id} onClick={() => setSelected(item.id)} className='text-slate-900'>
                            <h1 onClick={() => setLessonOpen(!lesonOpen)} className=' flex items-center cursor-pointer gap-3 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-sm'>{item.name} {item.bobname} <FaAngleDown /></h1>
                        </div>
                    ))}
                </div>
                <div className='bg-slate-200 p-3 rounded-lg'>
                   
                </div>
            </div>}
        </div>
    )
}

export default Navbar
