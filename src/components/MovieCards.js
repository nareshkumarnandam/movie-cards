import React from 'react';
import '../App.css';
import { BsFillShareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { BiSolidComment } from "react-icons/bi";

const MovieCards = ({data}) => {
    // console.log(data);
  return (
    data.map((movie, idx) => {
        // console.log(movie.moviename);
        return(
            <div className='movieCard' key={idx}>
                <div className='movieDetails'>
                    <div className='mainInfo'>
                        <div className='image'>
                            <img src={movie.imageCard} />
                        </div>
                        <div className='movieData'>
                            <p className='title'>{movie.moviename}</p>
                            <p className='movieYearAndDirector'>{movie.year}, {movie.director}</p>
                            <p className='durationAndgenres'><span className='duration'>{movie.duration}</span><span className='genres'>{movie.genres}</span></p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{movie.description}</p>
                        <br />
                        <div className='icons'>
                            <BsFillShareFill className='share' />
                            <MdFavorite className='like' />
                            <BiSolidComment className='comment' />
                        </div>
                    </div>
                </div>
                <div className='movieBackgroundImage'>
                    <div className='gradient'></div>
                    <img src={movie.backgroundImage} />
                </div>
            </div>
            
        )
    })
  )
}

export default MovieCards