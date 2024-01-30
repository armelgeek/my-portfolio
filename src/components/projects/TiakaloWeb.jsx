import React,{memo} from 'react'
import { Slide } from 'react-slideshow-image';
import tk1 from '../../assets/img/tiakalo-web/1.png'
import tk2 from '../../assets/img/tiakalo-web/2.png'
import tk3 from '../../assets/img/tiakalo-web/3.png'
import tk4 from '../../assets/img/tiakalo-web/4.png'
import tk5 from '../../assets/img/tiakalo-web/5.png'
import tk6 from '../../assets/img/tiakalo-web/6.png'
const TiakaloWeb = memo(() => {
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
           
           
        </Slide>
    )
})
export default TiakaloWeb;