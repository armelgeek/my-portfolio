import { useState } from 'react'
import 'react-slideshow-image/dist/styles.css';
import { FaArrowRight, FaChevronRight, FaCircleArrowRight, FaCircleMinus, FaCircleXmark, FaClosedCaptioning, FaEye, FaFacebook, FaFantasyFlightGames, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import './App.css'
import TiakaloMob from './components/projects/TiakaloMob';
import TiakaloWeb from './components/projects/TiakaloWeb';
import CmsChallenge from './components/projects/CmsChallenge';
import Cbva from './components/projects/Cbva';
import { CgSearch, CgSearchFound } from 'react-icons/cg';
import Pk from "./components/projects/Pk.jsx";
import PkBackend from './components/projects/PkBackend.jsx';
import PerfectCV from './components/projects/PerfectCV.jsx';
function calculateYearDifference() {
  const currentYear = new Date().getFullYear();
  const baseYear = 2020;
  const difference = currentYear - baseYear;
  return difference;
}
function App() {
  return (
    <div className='w-full h-screen'>
      <div className="grid w-full h-full grid-cols-5 grid-rows-5 bg-white">
        <div className="h-32 col-span-5 bg-white">
          <div className="fixed top-0 left-0 right-0 bg-white ">
            <nav className="z-50 flex flex-row items-center justify-between h-full gap-3 px-8 py-3">
              <h3 className="text-3xl font-semibold logo" style={{
                fontFamily: "Pacifico,sans-serif"
              }}>
                AW
              </h3>
              <a href="mailto:armelgeek5@gmail.com">
                <div className="flex flex-row items-center gap-2">
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
        <div className="w-12 h-full row-span-4 row-start-2">
          <div className='fixed top-0 bottom-0 flex flex-col items-center justify-end h-full gap-5 md:w-32'>
            <div className='mb-7 cursor-pointer rotate-[-90deg]'>
              <a style={{
                fontFamily: "Karla",
              }} className={`text-2xl  font-semibold`} href="#mes-projets">Projets
              </a>
            </div>
            <a target='_blank' href="https://github.com/armelgeek"><FaGithub size={28} /></a>
            <a target='_blank' href="https://www.facebook.com/armel.mouhid"><FaFacebook size={28} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/armelwanes/"><FaLinkedin size={28} /></a>
            <div className='w-0.5 h-36 bg-black'></div>
          </div>
        </div>
        {/** <div className="col-span-4 col-start-2 row-start-5">
          <div className='flex flex-row items-end justify-center h-full gap-3 px-5'>
            <div className='w-[650px] mr-8'>
              <About />
            </div>
            <div className='w-[650px]'>
              <div className='mb-3 cursor-pointer'>
                <Skills/>
              </div>
            </div>
          </div>
          </div>**/}
        <div className="row-span-3 col-start-5 ml-[-25px] lg:ml-36 row-start-2">
          <div className='fixed bottom-0 flex flex-col items-center justify-start h-full gap-5 top-20'>
            <div className='w-0.5 h-36 bg-black'></div>
            <a className='mt-12 cursor-pointer' href="#mes-experiences"><h3 style={{
              fontFamily: "Karla",
            }} className='text-2xl rotate-[-90deg] font-semibold'>Experiences</h3></a>

          </div>
        </div>
        <div className="w-full h-full max-h-full col-span-3 col-start-2 row-span-3 row-start-2">
          <div className='flex flex-col justify-between lg:flex-row'>
            <div className='w-full lg:w-1/2'>
              <div className="flex flex-col gap-3 mt-5">
                <h1 className="text-4xl" style={{
                  fontFamily: "Karla",
                  fontWeight: "bold",
                }}>Bonjour,</h1>
                <h3 style={{
                  fontFamily: "Karla",
                }}>Je suis <span className="text-4xl text-purple-500" style={{
                  fontFamily: "Pacifico",
                  fontWeight: "bold",
                }}> Armel Wanes .</span></h3>
                <h6 style={{
                  fontFamily: "Karla",
                }}> Développeur full-stack avec plus de {calculateYearDifference()} ans d'expérience. Depuis lors, j'ai
                  acquis une expertise dans un large éventail de technologies, notamment HTML, CSS, JavaScript, React,
                  Next pour le front-end, ainsi que Symfony, Node.js et Express.js pour le back-end</h6>

                <div className="flex flex-row gap-5 mt-5">

                  <a style={{
                    fontFamily: "Karla",
                    fontWeight: "bold",
                  }} href="/my-portfolio/cv/CV-Hajavololona-Armellin.pdf"
                     className='flex flex-row items-center gap-2 px-5 py-2 border-2 border-purple-500 rounded-full text-md bg-white-500'>Télécharger
                    mon CV <FaCircleArrowRight className='text-purple-500'/></a>
                </div>
              </div>
              <div
                  className='flex flex-row flex-wrap items-center justify-center gap-5 mt-10 mb-6 lg:mb-0 lg:justify-start'>
                <img src="/my-portfolio/html.png" width={48} height={48}/>
                <img src="/my-portfolio/css.png" width={48} height={48}/>
                <img src="/my-portfolio/symfony.png" width={48} height={48}/>
                <img src="/my-portfolio/next.png" width={48} height={48}/>
                <img src="/my-portfolio/react-native.png" width={48} height={48}/>
                <img src="/my-portfolio/nodejs.png" width={48} height={48}/>
                <img src="/my-portfolio/mongodb.png" width={48} height={48}/>
              </div>
            </div>
            <div className='w-full lg:w-[350px] border-2 rounded-2xl border-gray-300 img-profil'>

            </div>
          </div>
          <h3 id="mes-projets" className="mt-20 text-3xl font-semibold text-purple-500 heading--underlined" style={{
            fontFamily: "Pacifico,sans-serif"
          }}>
            Mes projets
          </h3>



          <div className="flex flex-row mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>Perfect CV - Web</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Un outil de création de CV en ligne.</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Next JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Daisy UI
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Tailwind CSS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Architecture basé sur l'Atomic Design & Function-First
                    </li>
                  </ul>
                  <div className="flex flex-row gap-5">
                  <div className="flex flex-row items-center justify-center gap-5 mt-2 lg:justify-start">
                    <a target='_blank' href="https://youtu.be/f8DypY1IOXM" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'>Video
                      démo </a>

                  </div>

                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a target='_blank' href="https://github.com/armelgeek/cv-maker" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md bg-white-500 border-slate-300'>
                      <FaGithub size={22}/> Github </a>

                  </div>
                  </div>
                </div>
              </div>
              <div className="hidden  lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <PerfectCV/>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>PokerApply - Backend</h3>
                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Le backend du réseau social dédié aux passionnés de poker.</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Express JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Node JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Neo4j
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Clean Architecture
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <PkBackend/>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>PokerApply - Mobile</h3>
                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Un réseau social dédié aux joueurs de poker.</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> React Native
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Zustand
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Architecture basé sur l'Atomic Design & Function-First
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <Pk/>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>Kursus - Web</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}> une plateforme en ligne dédiée à l'apprentissage et au développement des compétences.</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Next JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Shadcn UI
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Prisma ORM
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Stripe JS
                    </li>


                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Zustand
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> TailWind CSS
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a target='_blank' href="https://github.com/armelgeek/learning-academy" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md bg-white-500 border-slate-300'>
                      <FaGithub size={22}/> Github </a>

                  </div>
                </div>
              </div>
              <div className="hidden  lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <div className='flex items-center justify-center w-full h-full'>
                  <p className="text-2xl text-gray-400">Pas encore d'apercu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>Boutik - Web</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Une plateforme de vente en ligne </p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Next JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Shadcn UI
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Prisma ORM
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Stripe JS
                    </li>


                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Zustand
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> TailWind CSS
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a target='_blank' href="https://github.com/armelgeek/ecommerce-nextjs" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md bg-white-500 border-slate-300'>
                      <FaGithub size={22}/> Github </a>

                  </div>
                </div>
              </div>
              <div className="hidden  lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <div className='flex items-center justify-center w-full h-full'>
                  <p className="text-2xl text-gray-400">Pas encore d'apercu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>Tiakalo - Mobile</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Application de musique avec du Karaoke et Lyric, marche en offline .</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> React Native
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Redux
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>React Native Reanimated 2
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a
                        target='_blank'
                        href="https://youtu.be/xJJHr3PiEu0"
                        style={{
                          fontFamily: "Karla",
                          fontWeight: "bold",
                        }}
                        className='flex flex-row items-center gap-2 px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'><FaEye/>Video
                      démo </a>


                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <TiakaloMob/>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>Tiakalo - Web</h3>
                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Version web de l'application de musique avec du karaoke et lyric's.</p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> React JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Express JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>MySQL
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Redux
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Web Scrapping
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> TailWind CSS
                    </li>
                  </ul>
                  <div className="flex flex-row items-center justify-center gap-5 mt-2 mb-5 lg:justify-start">
                    <a target='_blank' href="https://youtu.be/ZcnEaSl3KFo" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'>Video
                      démo </a>
                      <a target='_blank' href="https://github.com/armelgeek/tiakalo-next" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md bg-white-500 border-slate-300'>
                      <FaGithub size={22}/> Github </a>

                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <TiakaloWeb/>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">
                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>CMS Challenge</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Un editeur Tailwind CSS, pour generer des pages facilement </p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> React JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Express JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>MySQL
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Redux
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> TailWind CSS
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a target='_blank' href="https://github.com/armelgeek/cms-challenge" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }}
                       className='flex flex-row gap-2 px-5 py-2 text-black bg-white border rounded-full text-md bg-white-500 border-slate-300'>
                      <FaGithub size={22}/> Github </a>

                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <CmsChallenge/>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col items-start justify-center h-full gap-4">

                  <h3 className='text-2xl font-bold' style={{
                    fontFamily: 'Pacifico,sans-serif'
                  }}>LCBV Ambalavao</h3>

                  <p className='text-lg' style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>Logiciel de gestion de vente et de stock medicament pour Officine Ambalavao </p>
                  <ul style={{
                    fontFamily: 'Karla,sans-serif'
                  }}>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> React JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Express JS
                    </li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>MySQL
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/>Redux
                    </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row items-center gap-2'><FaChevronRight/> Bootstrap 4
                    </li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">

                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <Cbva/>
              </div>
            </div>
          </div>
          <h3 id="mes-experiences"
              className="mt-20 text-3xl font-semibold text-center text-purple-500 heading--underlined lg:text-left"
              style={{
                fontFamily: "Pacifico,sans-serif"
              }}>
            Experiences profesionnelles
          </h3>
          <div
              className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

            <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>05 Fevrier 2024 - Maintenant
                  </time>
                </div>
                <div className="mb-3 text-lg font-bold text-slate-900">Developpeur FullStack JS chez Relia Consulting
                  (en tant que Consultant)
                </div>

                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col flex-wrap gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full">

                        </div>
                      </div>
                      <p>Mis en place d’une application mobile nommé « PokerApply »</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>30 Octobre 2022 – Avril 2024
                  </time>
                </div>

                <div className="mb-3 text-lg font-bold text-slate-900" style={{
                  fontFamily: 'Karla'
                }}>Développeur PHP chez Open Atlas (Full Remote)
                </div>
                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <p>Intégration de la fédération des événements et des projets sur le Fediverse avec ActivityPub
                        dans Communecter.org</p></div>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <p> Implémentation de Matomo pour l'analyse d'audience et la collecte de données.</p></div>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <p> Contribution à Cocolight, une version légère de Communecter.org développée en Preact </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>09 Mars 2022 - 10 Septembre 2022
                  </time>
                </div>
                <div className="mb-3 text-lg font-bold text-slate-900">Developpeur FullStack JS chez Blue Cactus
                  Factory
                </div>

                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col flex-wrap gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full">

                        </div>
                      </div>
                      <p>Mis en place d’une plateforme de cours en ligne nommé « Schoolathome »</p>
                    </div>
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full">

                        </div>
                      </div>
                      <p>Conception et réalisation d’un site de reservation d'hôtel nommé « Loup blanc »</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>03 Septembre 2021 - Décembre 2022
                  </time>
                </div>
                <div className="text-lg font-bold text-slate-900">Concepteur et Développeur pour Officine Veterinaire
                  Ambalavao
                </div>
                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 mt-2 mr-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <p>Concepteur et Réalisateur d’un projet « Gestion de vente de médicament (VETO, PHYTO,Vaccin) et
                        de stock du cabinet veterinaire Ambalavao »</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>18 Novembre 2020 – 20 Mars 2021
                  </time>
                </div>
                <div className="text-lg font-bold text-slate-900" style={{
                  fontFamily: 'Karla'
                }}>Chef de projet et développeur du projet « perle Rencontre »
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-500 group-[.is-active]:bg-purple-500 text-white group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>23 Avril – 26 Avril 2020
                  </time>
                </div>
                <div className="text-lg font-bold text-slate-900" style={{
                  fontFamily: 'Karla'
                }}>Participant au Startup weekend Covid-19 à Antananarivo avec le projet détection de cas contacts du
                  Covid-19(9ème place parmi les 35 projets)
                </div>

              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                      d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z"/>
                </svg>
              </div>
              <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end mb-1 space-x-2">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>30 Mars – 31 Mars 2019
                  </time>
                </div>
                <div className="text-lg font-bold text-slate-900" style={{
                  fontFamily: 'Karla'
                }}>Première Place au concours Inter Universitaire HUI 2019 avec le projet Hitady avec l’équipe de Miray
                  Geek
                </div>

              </div>
            </div>
          </div>


          <footer className="m-4 bg-white">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">

              <hr className="my-6 border-gray-200 sm:mx-autolg:my-8"/>
              <span className="block text-gray-900 text-md sm:text-center" style={{
                fontFamily: 'Karla'
              }}>© 2023 <a href="https://www.linkedin.com/in/armelwanes/" className="hover:underline">Armel Wanes</a>. All Rights Reserved.</span>
            </div>
          </footer>


        </div>
      </div>

    </div>
  )
}

export default App
