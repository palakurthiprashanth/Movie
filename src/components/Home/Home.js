import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../common/apis/MovieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../../features/movies/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  debugger;
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKEY}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log(err);
      });
      // console.log('Response :::' + response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
