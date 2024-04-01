import Collections from './Collections/Collections';
import Players from './Players/Players';
import './mainpage.css';

const MainPage = () => {
    return(
        <div className='mainpage'>
            <Players />
            <Collections />
        </div>
    )
}

export default MainPage;