import { useEffect, useState } from 'react';
import './styles/Posts.css';
import axios from '../axios';
import { API_KEY, imageUrl } from '../../constants/Constants';
import YouTube from 'react-youtube';

interface Props {
  title: string;
  url: string;
  isSmall: boolean;
}

interface Movie {
  backdrop_path: string;
  id: number;
  title : string;
  release_date:string;
  popularity:string;
  vote_count : number;
  vote_average:number
}

interface Movies {
  movies: Movie[];
}

const Posts = ({ title, url, isSmall }: Props) => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const [movies, setMovies] = useState<Movies>({ movies: [] });
  const [movieUrl, setMovieUrl] = useState<string | null>(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      const results = res.data.results;
      setMovies({ movies: results });
    });
  }, []);

  const handleMovie = (id: number) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      const videoResults = res.data.results;

      if (videoResults.length !== 0) {
        setMovieUrl(videoResults[0].key);
      } else {
        setMovieUrl(null);
        console.log('trailer not found')
      }
    });
  };

  return (
    <>
      <div className="row ">
        <h2 className="title">{title}</h2>
        <div className="posters">
          {movies.movies.map((item) => {
            console.log(item);
            const imageUrlWithBackdropPath = imageUrl + item.backdrop_path;

            return (
              <>
              <div className="block">
              <img
                key={item.id}
                onClick={() => handleMovie(item.id)}
                className={isSmall ? 'smallPoster' : 'poster'}
                src={imageUrlWithBackdropPath}
                alt=""
              />
           {isSmall?<div><span className='movieTitle'>{item.title}</span> <br />
              <span className='movieDetails' style={{fontSize:'10px', lineHeight:'-20px'}}>Released on : {item.release_date}<br />
           Popularity : {item.popularity}
           <br />
           Vote-Count : {item.vote_count}
           <br />
           Vote-Average : {item.vote_average}
           </span> 
              </div>:''}   
              </div>
               
              </>
             
            );
          })}
        </div>
        {movieUrl && <YouTube opts={opts} videoId={movieUrl} />}
      </div>
    </>
  );
};

export default Posts;
