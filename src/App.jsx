import { useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full'>
      <div className="grid grid-cols-5 grid-rows-5 h-full">
        <div className="col-span-5 h-24 ">
          <nav className="flex flex-row gap-3 px-8 justify-between items-center h-full">
            <h3 className="logo text-3xl font-semibold" style={{
              fontFamily: "Pacifico,sans-serif"
            }}>
              AW
            </h3>
            <h3 className="text-2xl font-semibold" style={{
              fontFamily: "Karla",
            }}>
              Me contactez ...
            </h3>
          </nav>
        </div>
        <div className="row-span-4 row-start-2 w-12 h-full">
          <div className='flex flex-col justify-end gap-5  w-32  h-full items-center'>
            <div className='mb-3 cursor-pointer'><h3 style={{
              fontFamily: "Karla",
            }} className='text-2xl rotate-[-90deg] font-semibold'>Work</h3></div>
            <FaGithub size={28} />
            <FaFacebook size={28} />
            <FaTwitter size={28} />
            <FaLinkedin size={28} />
            <div className='w-0.5 h-36 bg-black'></div>
          </div>
        </div>
        <div className="col-span-4 col-start-2 row-start-5">
          <div className='flex flex-row items-end justify-center gap-3 h-full px-5'>
            <div className='w-[450px] mr-8'>
              <div className='mb-3 cursor-pointer'><h3 style={{
                fontFamily: "Karla",
              }} className='text-2xl font-semibold'>A propos.</h3></div>
            </div>
            <div className='w-[450px]'>
              <div className='mb-3 cursor-pointer'><h3 style={{
                fontFamily: "Karla",
              }} className='text-2xl font-semibold'>My Skills.</h3></div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-start-5 row-start-2">
          <div className='flex flex-col items-end justify-center h-full'>

            <div className='mb-3 cursor-pointer'><h3 style={{
              fontFamily: "Karla",
            }} className='text-2xl rotate-[90deg] font-semibold'>Experiences</h3></div>
          </div>
        </div>
        <div className="col-span-3 row-span-3 col-start-2 row-start-2 w-full bg-gray-600">5</div>
      </div>
    </div>
  )
}

export default App
