function calculateYearDifference() {
  const currentYear = new Date().getFullYear();
  const baseYear = 2020;
  return currentYear - baseYear;
}

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-1/2'>
        <div className="flex flex-col mt-5 gap-3">
          <h1 className="text-4xl" style={{
            fontFamily: "Karla",
            fontWeight: "bold",
          }}>Bonjour,</h1>
          <h3 style={{fontFamily: "Karla"}}>
            Je suis <span className="text-4xl text-purple-500" style={{
              fontFamily: "Pacifico",
              fontWeight: "bold",
            }}> Armel Wanes .</span>
          </h3>
          <h6 style={{fontFamily: "Karla"}}>
            Développeur full-stack avec plus de {calculateYearDifference()} ans d'expérience...
          </h6>
          {/* Rest of the hero content */}
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center mb-6 lg:mb-0 lg:justify-start mt-10 gap-5'>
          {/* Tech stack images */}
        </div>
      </div>
      <div className='w-full lg:w-[350px] border-2 rounded-2xl border-gray-300 img-profil'></div>
    </div>
  );
}
