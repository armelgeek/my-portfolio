import React, { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6';

const Modal = ({ title, children,className="" }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='mb-3 cursor-pointer' onClick={() => setVisible(true)}>
                <h3 style={{
                    fontFamily: "Karla",
                }} className={`text-2xl ${className} font-semibold`}>{title}
                </h3>
            </div>
            <div className={`modal modal-full ${visible ? 'show' : ''}`} style={{
                display: visible ? 'flex' : 'none'
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div
                            className="modal-header cursor-pointer flex flex-row justify-end mt-3 mr-3"
                            onClick={() => setVisible(false)}>
                            <FaCircleXmark
                                size={24}
                                color='white'
                            />
                        </div>
                        <div className="modal-body mx-72 mt-12 ">
                            {children}
                        </div>

                    </div>
                </div> 
            </div>

        </>
    )
}
export default Modal;
