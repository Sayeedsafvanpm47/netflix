import './styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Banner from './Banner';

const Navbar = () => {
  return (

<>
 <div className="d-flex mainContainer" style={{backgroundColor:'#111'}}>
       <div className="d-flex leftSection"></div>
    <div className="mx-3 logo ">
          <img className='logoImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="not available" />
          </div>
          <div className="d-flex space-between navigation">
            <p className="mx-3 paraHover">Home</p>
            <p className="mx-3 paraHover">TvShows</p>
            <p className="mx-3 paraHover">Movies</p>
            <p className="mx-3 paraHover">New & Popular</p>
            <p className="mx-3 paraHover">MyList</p>
          </div>
    <div className="rightSection d-flex">
         <span> <button className='btn paraHover'><FaSearch /></button></span>
      
          <p className='paraText'>KIDS</p>
          <p className='paraText'>DVD</p>
         
        
         <span className='paraText'><CiBellOn/></span>
        <span className='paraText'><img className='avatar' src="https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg" alt="" />
</span>
<span className="paraText"><IoMdArrowDropdown/></span>
         
    </div>


          </div>
          <Banner/>
          
  </>
  )
}

export default Navbar