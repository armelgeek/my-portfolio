import React from 'react'
import Modal from './Modal';

const About = () => {
    return (
        <Modal title="A propos.">
            <h3 className="heading--underlined text-purple-500 text-3xl font-semibold" style={{
                fontFamily: "Pacifico,sans-serif"
            }}>
                A Propos de moi
            </h3>

            <div className="flex flex-row gap-3 mt-3 h-96">
                <div className="w-[600px]">
                    <p className='descr py-5'>
                        Passionné(e) par le développement web depuis mes débuts, je m'investis corps et âme dans chaque ligne de code, chaque design et chaque fonctionnalité pour créer des expériences en ligne aussi belles que fonctionnelles.<br /><br/> 
                        Pour moi, le développement web est bien plus qu'un simple métier : c'est une forme d'art, une manière d'exprimer ma vision à travers le langage universel du digital.
                        <br/><br/>
                      </p>
                </div>
                <div className='w-[300px] border-2 rounded-2xl border-gray-300 img-profil'>
                </div>
            </div>
        </Modal>
    )
}

export default About;