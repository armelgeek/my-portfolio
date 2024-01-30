import React,{memo} from 'react'
import { Slide } from 'react-slideshow-image';
import tk1 from '../../assets/img/tiakalo-mob/1.jpg'
import tk2 from '../../assets/img/tiakalo-mob/2.jpg'
import tk2bis from '../../assets/img/tiakalo-mob/2.1.jpg'
import tk3 from '../../assets/img/tiakalo-mob/3.jpg'
import tk4 from '../../assets/img/tiakalo-mob/4.jpg'
import tk5 from '../../assets/img/tiakalo-mob/5.jpg'
import tk6 from '../../assets/img/tiakalo-mob/6.jpg'
import tk7 from '../../assets/img/tiakalo-mob/7.jpg'
import tk8 from '../../assets/img/tiakalo-mob/8.jpg'
import tk9 from '../../assets/img/tiakalo-mob/9.jpg'
import tk10 from '../../assets/img/tiakalo-mob/10.jpg'
const TiakaloMob = memo(() => {
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
                    backgroundImage: `url(${tk2bis})`,
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
export default TiakaloMob;