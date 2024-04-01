import './collections.css';
import collectionData from './collectionData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { userContext } from '../Contextapi';


const Collections = () => {

    const userData = useContext(userContext);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    };


    return (
        <div className='collection'  style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
            <div className='collection-main'  style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                <h1>Collection Spotlight</h1>
                <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

                <div className='cards'>
                    <Slider {...settings}>

                        {
                            collectionData.map((item) => {
                                return (
                                    <div className='card' key={item.id}  style={{ width: '246px'}} >
                                        <div className='card-s1' style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                                            <img src={item.img}></img>
                                        </div>
                                        <hr></hr>
                                        <div className='card-s2'  style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                                            <strong>{item.name}</strong>
                                            <span>{item.date}</span>
                                            <p style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   color: userData.toggle ? '#FFFFFF' : '#3B3E47'}}>{item.address}</p>
                                            <button>{item.btn}</button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Slider>

                </div>
            </div>
        </div>
    )
}


export default Collections;