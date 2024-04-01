import './players.css';
import data from './data';
import adimg from '../../assets/ads.jpeg';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../Contextapi';


const Players = () => {

    const userData = useContext(userContext);
    console.log(userData.bg);


    const [seeMore, setSeeMore] = useState(false);
    const ref = useRef();
    const refbtn = useRef();
    const refcircle = useRef();
    const btnref = useRef();

    const expandCards = () => {
        if (!seeMore) {
            ref.current.style.height = 'auto';
            btnref.current.innerHTML = 'See Less';
            setSeeMore(true);
        }
        else {
            ref.current.style.height = '500px';
            btnref.current.innerHTML = 'See More';
            setSeeMore(false);
        }
    }


    // *********************************************************************






    const changeTheme = () => {
        if (!userData.toggle) {
            userData.setBg('#292B32'); // black
            refcircle.current.style.color = 'red';
            userData.setToggle(true);
        }
        else {
            userData.setBg('#F7F7F8'); //white
            userData.setToggle(false);
        }

    }



    // *********************************************************************



    return (
        <div className='players' style={{ backgroundColor: userData.bg }}>
            <div className='players-container'>
                <div className='nav' style={{ position: 'relative'}}>
                    <h2 style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>Sports</h2>
                        <h1 style={{position:'relative', right : '-410px'}}>Change Theme</h1>
                    <div class="btn" ref={refbtn} onClick={changeTheme}  style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF',   backgroundColor: userData.toggle ? '#FFFFFF' : '#3B3E47'}} >
                        <div class="circle" ref={refcircle} style={{ backgroundColor: userData.toggle ? '#000000' : '#F7F7F8' }}></div>
                    </div>
                </div>
                <div className='players-main'>
                    <div className='cards' ref={ref}>
                        {
                            data.map((item) => {
                                return (
                                    <div className='card' style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                                        <div className='img'>
                                            <img src={item.img}></img>
                                        </div>
                                        <strong>{item.name}</strong>
                                        <div className='card-content' style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                                            <div className='card-content-item'>
                                                <span style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }} >{item.event}</span>
                                                <h3>{item.eventNum}</h3>
                                            </div>
                                            <div className='card-content-item'>
                                                <span style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>{item.sport}</span>
                                                <h3>{item.game}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='adcard' style={{ backgroundColor: userData.toggle ? '#3B3E47' : '#FFFFFF', color: userData.toggle ? '#FFFFFF' : '#3B3E47' }}>
                        <div className='adcard-content' >
                            <div className='ad'>Ad</div>
                            <img src={adimg}></img>
                            <h3>Advertisement title</h3>
                            <p>Lorem ipsum dolor sit art amet cons adipisicing elit. Quisqu eveniet accus esse min aliquam beatae? Consequ eve culpa. Quasi nam ipsum parifs cum! molestias quos. Error asdf voluptate culpa </p>
                        </div>

                    </div>
                </div>

                <div className='morebtn'>
                    <button ref={btnref} onClick={expandCards}>See More</button>
                </div>
            </div>
        </div>
    )
}


export default Players;