import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="col-span-5 h-32 bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white">
        <nav className="flex flex-row gap-3 py-3 z-50 px-8 justify-between items-center h-full">
          <h3 className="logo text-3xl font-semibold" style={{
            fontFamily: "Pacifico,sans-serif"
          }}>
            AW
          </h3>
          <a href="mailto:armelgeek5@gmail.com">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-xl font-semibold" style={{
                fontFamily: "Karla",
              }}>
                Me dire bonjour
              </h3>
              <FaArrowRight />
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}
