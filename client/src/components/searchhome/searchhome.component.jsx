import './searchhome.styles.css'
import { Link } from 'react-router-dom'
const SearchHome=()=>{
    return(
      <div className='homesearch'>
        <Link  to="/searchPage"> <button>search receipes</button></Link>
      </div>
    )
}

export default SearchHome