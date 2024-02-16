import './styles/Banner.css'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from 'react'

import axios from '../axios'
import { API_KEY ,imageUrl} from '../../constants/Constants'

interface Movie{
  title:string,
  release_date : string,
  overview : string,
  backdrop_path : string
}

const Banner = () => {
  const [movies,setMovies] = useState<Movie>()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(res => {console.log(res.data.results[0]); setMovies(res.data.results[0])} )
    .catch(err => console.log(err, 'error'));  },[])
  return (
    <>
    <div className="banner bg-light" style={{ backgroundColor: 'transparent',backgroundImage:`url(${imageUrl+(movies?movies.backdrop_path:null)})` }}>   
      <div className="content">
       <h1 className='title'>{movies?movies.title:null}</h1>
        <div className="subHeading">Released On : {movies?movies.release_date:null}</div>
       <h1 className="description">{movies?movies.overview:null}</h1>
        <div className=""><button className=" btn-light bannerButtons align-text-center"><span className='btnContainer'><FaPlay/> Play</span></button>
        <button className=" btn-light bannerButtons"><span className='btnContainer'><FaPlus/>  My List</span></button>
        </div>
        
        
        </div>
        <div className="fadeBottom"></div></div>
   
 
    </>
  )
}

export default Banner