import './homePage.styles.css'
import SearchHome from '../searchhome/searchhome.component'
const HomePage=()=>{
    return(
    <div className='home'>
        <div className="background-image"></div>
        <div className="homecard">
            <div className="title"><h3>Not sure What's For Dinner? <span>Fridge Friends are there for you</span></h3></div>
            <p className='content'>Recipe's just a click away</p>
        </div>
        <SearchHome />
    </div>
    )
}

export default HomePage