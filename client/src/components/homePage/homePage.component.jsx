import './homePage.styles.css'
import SearchHome from '../searchhome/searchhome.component'
const HomePage=()=>{
    return(
    <div className='home'>
        <div className="background-image"></div>
        <div className="homecard">
            <div className="title"><h3>Not Sure What's For Dinner? <span>Fridge Friend Has You Covered</span></h3></div>
            <p className='content'>Recipes Are Only A Click Away!</p>
        </div>
        <SearchHome />
    </div>
    )
}

export default HomePage