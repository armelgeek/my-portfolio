import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="row-span-4 row-start-2 w-12 h-full">
      <div className='flex flex-col fixed top-0 bottom-0 justify-end gap-5 md:w-32 h-full items-center'>
        <div className='mb-7 cursor-pointer rotate-[-90deg]'>
          <a style={{
            fontFamily: "Karla",
          }} className="text-2xl font-semibold" href="#mes-projets">Projets</a>
        </div>
        <a target='_blank' href="https://github.com/armelgeek"><FaGithub size={28} /></a>
        <a target='_blank' href="https://www.facebook.com/armel.mouhid"><FaFacebook size={28} /></a>
        <a target='_blank' href="https://www.linkedin.com/in/armelwanes/"><FaLinkedin size={28} /></a>
        <div className='w-0.5 h-36 bg-black'></div>
      </div>
    </div>
  );
}
