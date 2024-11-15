import React from 'react'
import Modal from './Modal'

const Skills = () => {
    return (
        <Modal title="Competences." className={"rotate-[-90deg]"}>
            <h3 className="heading--underlined text-purple-500 text-3xl font-semibold" style={{
                fontFamily: "Pacifico,sans-serif"
            }}>
                Competences
            </h3>
            <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>

            <div className="mb-7">
                <div className="flex justify-between py-1">
                    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Web Design</span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                </div>
                <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path className="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                    <path className="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#FF6464" stroke-width="1" fill-opacity="0"
                        style="stroke-dasharray: 79.2px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                    </path>
                </svg>
            </div>


            <div className="mb-7">
                <div className="flex justify-between py-1">
                    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Mobile App </span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
                </div>
                <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path className="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                    <path className="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#9272D4" stroke-width="1" fill-opacity="0"
                        style="stroke-dasharray: 94.05px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                    </path>
                </svg>
            </div>


            <div className="mb-7">
                <div className="flex justify-between py-1">
                    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Illustrator</span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
                </div>
                <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path className="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                    <path className="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#5185D4" stroke-width="1" fill-opacity="0"
                        style="stroke-dasharray: 64.35px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                    </path>
                </svg>
            </div>


            <div className="mb-7">
                <div className="flex justify-between py-1">
                    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Photoshope</span>
                    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
                </div>
                <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path className="rc-progress-line-trail" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                    <path className="rc-progress-line-path" d="M 0.5,0.5
         L 99.5,0.5" stroke-linecap="round" stroke="#CA56F2" stroke-width="1" fill-opacity="0"
                        style="stroke-dasharray: 74.25px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;">
                    </path>
                </svg>
            </div>
        </Modal>
    )
}
export default Skills;