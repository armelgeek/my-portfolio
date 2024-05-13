import { useState } from 'react'
import 'react-slideshow-image/dist/styles.css';
import { FaArrowRight, FaChevronRight, FaCircleArrowRight, FaCircleMinus, FaCircleXmark, FaClosedCaptioning, FaEye, FaFacebook, FaFantasyFlightGames, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import './App.css'
import TiakaloMob from './components/projects/TiakaloMob';
import TiakaloWeb from './components/projects/TiakaloWeb';
import CmsChallenge from './components/projects/CmsChallenge';
import Cbva from './components/projects/Cbva';

function App() {
  return (
    <div className='h-screen w-full'>
      <div className="grid grid-cols-5 grid-rows-5 w-full h-full  bg-white">
        <div className="col-span-5 h-32  bg-white">
          <div className=" fixed top-0 left-0 right-0  bg-white">
            <nav className="flex flex-row gap-3 py-3  z-50 px-8 justify-between items-center h-full">
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
        <div className="row-span-4 row-start-2 w-12 h-full">
          <div className='flex flex-col fixed top-0 bottom-0 justify-end gap-5  md:w-32  h-full items-center'>
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
          <div className='flex flex-row items-end justify-center gap-3 h-full px-5'>
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
          <div className='flex flex-col fixed  top-20 bottom-0 justify-start gap-5  h-full items-center'>
            <div className='w-0.5 h-36 bg-black'></div>
            <a className='mt-12 cursor-pointer' href="#mes-experiences"><h3 style={{
              fontFamily: "Karla",
            }} className='text-2xl rotate-[-90deg] font-semibold'>Experiences</h3></a>

          </div>
        </div>
        <div className="col-span-3 row-span-3 col-start-2 row-start-2 w-full h-full max-h-full">
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-1/2'>
              <div className="flex flex-col mt-5 gap-3">
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
                }}> Développeur full-stack avec plus de 4  ans d'expérience. Depuis lors, j'ai acquis une expertise dans un large éventail de technologies, notamment HTML, CSS, JavaScript, React pour le front-end, ainsi que Symfony, Node.js et Express.js pour le back-end</h6>

                <div className="flex mt-5 flex-row gap-5">

                  <a style={{
                    fontFamily: "Karla",
                    fontWeight: "bold",
                  }} href="/my-portfolio/cv/Hajavololona-Armellin.docx" className='py-2 text-md px-5 rounded-full flex flex-row gap-2 items-center bg-white-500 border-2 border-purple-500'>Télécharger mon CV <FaCircleArrowRight className='text-purple-500' /></a>
                </div>
              </div>
              <div className='flex flex-row flex-wrap justify-center items-center mb-6 lg:mb-0 lg:justify-start mt-10 gap-5'>
                <img src="/my-portfolio/html.png" width={48} height={48} />
                <img src="/my-portfolio/css.png" width={48} height={48} />
                <img src="/my-portfolio/symfony.png" width={48} height={48} />
                <img src="/my-portfolio/react-native.png" width={48} height={48} />
                <img src="/my-portfolio/nodejs.png" width={48} height={48} />
                <img src="/my-portfolio/mongodb.png" width={48} height={48} />
              </div>
            </div>
            <div className='w-full lg:w-[350px] border-2 rounded-2xl border-gray-300 img-profil'>

            </div>
          </div>
          <h3 id="mes-projets" className="heading--underlined text-purple-500 text-3xl mt-20 font-semibold" style={{
            fontFamily: "Pacifico,sans-serif"
          }}>
            Mes projets
          </h3>
          <div className="flex flex-row  gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col gap-4 h-full justify-center items-start">
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
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> React Native</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Redux</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />React Native Reanimated 2</li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a
                    target='_blank'
                    href="https://youtu.be/xJJHr3PiEu0"
                     style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }} className='py-2 flex flex-row gap-2 items-center bg-purple-500  rounded-full text-white text-md px-5 bg-white-500 border-2 border-slate-300'><FaEye />Video démo </a>
                   

                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100">
                <TiakaloMob />
              </div>
            </div>
          </div>

          <div className="flex flex-row  gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col gap-4 h-full justify-center items-start">
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
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> React JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Express JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />MySQL</li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Redux</li>
                     <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Web Scrapping </li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> TailWind CSS</li>
                  </ul>
                  <div className="flex flex-row justify-center mb-5 lg:justify-start items-center gap-5 mt-2">
                    <a target='_blank' href="https://youtu.be/XR6NRYSs5sE" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }} className='py-2 bg-purple-500  rounded-full text-white text-md px-5 bg-white-500 border-2 border-slate-300'>Video démo </a>
                   
                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100" >
                <TiakaloWeb />
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col gap-4 h-full justify-center items-start">
                <small style={{
                    fontFamily: 'Karla,sans-serif'
                  }} className="text-xs bg-indigo-500 rounded-lg text-white px-3"> En cours de developpement</small>
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
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> React JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Express JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />MySQL</li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Redux</li>
                
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> TailWind CSS</li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    <a target='_blank' href="https://github.com/armelgeek/cms-challenge" style={{
                      fontFamily: "Karla",
                      fontWeight: "bold",
                    }} className='py-2 bg-white flex flex-row gap-2 rounded-full text-black text-md px-5 bg-white-500 border border-slate-300'> <FaGithub  size={22} /> Github </a>
                   
                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100" >
                <CmsChallenge />
              </div>
            </div>
          </div>
          <div className="flex flex-row  gap-3 mt-10 h-96">
            <div className="flex flex-row gap-3">
              <div className="w-full lg:w-[350px] p-3 shadow-sm border">
                <div className="flex flex-col gap-4 h-full justify-center items-start">
               
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
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> React JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif'
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Express JS</li>
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />MySQL</li>

                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight />Redux</li>
                
                    <li style={{
                      fontFamily: 'Karla,sans-serif',
                    }} className='flex flex-row gap-2 items-center'><FaChevronRight /> Bootstrap 4</li>
                  </ul>
                  <div className="flex flex-row items-center gap-5 mt-2">
                    
                  </div>
                </div>
              </div>
              <div className="hidden lg:block md:w-[650px] lg:[650px] bg-gray-100" >
                <Cbva />
              </div>
            </div>
          </div>
          <h3 id="mes-experiences" className="heading--underlined text-purple-500 text-center lg:text-left text-3xl mt-20 font-semibold" style={{
            fontFamily: "Pacifico,sans-serif"
          }}>
            Experiences profesionnelles
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>05 Fevrier 2024 -  Maintenant</time>
                </div>
                <div className="font-bold text-slate-900 text-lg  mb-3">Developpeur FullStack JS chez Relia Consulting (en tant que Consultant)</div>

                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col flex-wrap gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3">

                        </div>
                      </div>
                      <p>Mis en  place d’une application mobile nommé « PokerApply »</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>30 Octobre 2022 – 25 Janvier 2024 </time>
                </div>

                <div className="font-bold text-slate-900 text-lg mb-3" style={{
                  fontFamily: 'Karla'
                }}>Développeur PHP chez Open Atlas (Full Remote)</div>
                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col gap-2'>
                    <div className="flex flex-row"> <div><div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div></div> <p>Intégration de la fédération des événements et des projets sur le Fediverse avec ActivityPub dans Communecter.org</p></div>
                    <div className="flex flex-row"> <div><div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div></div> <p> Implémentation de Matomo pour l'analyse d'audience et la collecte de données.</p></div>
                    <div className="flex flex-row"> <div><div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div></div> <p> Contribution à Cocolight, une version légère de Communecter.org développée en Preact </p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>09 Mars 2022 -  10 Septembre 2022</time>
                </div>
                <div className="font-bold text-slate-900 text-lg  mb-3">Developpeur FullStack JS chez Blue Cactus Factory</div>

                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col flex-wrap gap-2'>
                    <div className="flex flex-row">
                      <div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3">

                        </div>
                      </div>
                      <p>Mis en  place d’une plateforme de cours en ligne nommé « Schoolathome »</p>
                    </div>
                    <div className="flex flex-row flex-wrap">
                      <div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3">

                        </div>
                      </div>
                      <p>Conception et réalisation d’un site de reservation d'hôtel  nommé « Loup blanc »</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">

                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>03 Septembre 2021 - Décembre 2022</time>
                </div>
                <div className="font-bold text-slate-900  text-lg">Concepteur et Développeur pour Officine Veterinaire Ambalavao</div>
                <div className="text-slate-500" style={{
                  fontFamily: 'Karla'
                }}>
                  <div className='flex flex-col gap-2'>
                    <div className="flex flex-row"> <div><div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div></div> <p>Concepteur et Réalisateur d’un projet « Gestion de vente de médicament (VETO, PHYTO,Vaccin)   et de stock du cabinet veterinaire Ambalavao »</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>18 Novembre 2020 – 20 Mars 2021</time>
                </div>
                <div className="font-bold text-slate-900 text-lg" style={{
                  fontFamily: 'Karla'
                }}>Chef de projet et développeur du projet « perle Rencontre »</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-500 group-[.is-active]:bg-purple-500 text-white group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>23 Avril – 26 Avril 2020</time>
                </div>
                <div className="font-bold text-slate-900 text-lg" style={{
                  fontFamily: 'Karla'
                }}>Participant au Startup weekend Covid-19 à Antananarivo avec le projet détection de cas contacts du Covid-19(9ème place parmi les 35 projets) </div>

              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-purple-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-end space-x-2 mb-1">
                  <time className="font-medium text-purple-500" style={{
                    fontFamily: 'Karla'
                  }}>30 Mars – 31 Mars 2019</time>
                </div>
                <div className="font-bold text-slate-900 text-lg" style={{
                  fontFamily: 'Karla'
                }}>Première Place au concours Inter Universitaire HUI 2019 avec le projet Hitady avec l’équipe de Miray Geek</div>

              </div>
            </div>
          </div>



          <footer className="bg-white m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

              <hr className="my-6 border-gray-200 sm:mx-autolg:my-8" />
              <span className="block text-md text-gray-900 sm:text-center" style={{
                fontFamily: 'Karla'
              }}>© 2023 <a href="https://www.linkedin.com/in/armelwanes/" className="hover:underline">Armel Wanes</a>. All Rights Reserved.</span>
            </div>
          </footer>


        </div>
      </div>

    </div >
  )
}

export default App
