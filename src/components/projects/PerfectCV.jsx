import React,{memo} from 'react'
import { Slide } from 'react-slideshow-image';
import tk1 from '../../assets/img/perfect-cv/1.png'
import tk2 from '../../assets/img/perfect-cv/2.png'
import tk3 from '../../assets/img/perfect-cv/3.png'
import tk4 from '../../assets/img/perfect-cv/4.png'
import tk5 from '../../assets/img/perfect-cv/5.png'
import tk6 from '../../assets/img/perfect-cv/6.png'
import tk7 from '../../assets/img/perfect-cv/7.png'
import tk8 from '../../assets/img/perfect-cv/8.png'
import tk9 from '../../assets/img/perfect-cv/9.png'
import tk10 from '../../assets/img/perfect-cv/10.png'
const PerfectCV = memo(() => {
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    return (
        <Slide slidesToScroll={2} slidesToShow={2} indicators={false} responsive={responsiveSettings}>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>

            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk4})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk5})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk6})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk7})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk8})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk9})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>

            </div>
            <div className="img">
                <div className="h-96" style={{
                    backgroundImage: `url(${tk10})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}></div>

            </div>
        </Slide>
    )
})
export default PerfectCV;
