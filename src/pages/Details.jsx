import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/service';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Details = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const { original_title, overview, vote_average, release_date, poster_path, backdrop_path, production_countries } = movieDetails;

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    console.log(movieDetails)

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await fetchMovieDetails(baseUrl, apiKey, id);
                setMovieDetails(details);
                window.scrollTo(0, 0);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
        };
    }, [baseUrl, apiKey, id]);



    return (
        <div className='details' >
            {/* Navbar */}
            <section className='head_section'>
                <Navbar />
            </section>

            {/* details_section */}
            <section className='details_section' style={{
                backgroundImage: `url(${imgUrl}${backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
            }}>
                <div className="container">
                    <div className="movie_details">
                        <div className="image">
                            <img src={`${imgUrl}${poster_path}`} alt="" />
                        </div>
                        <div className="info">
                            <div className="tittle">
                                <h2>{original_title}</h2>
                                <div className="imdb">
                                    <span>{typeof vote_average === 'number' ? Math.floor(vote_average) : 'N/A'}</span>
                                </div>
                            </div>
                            <div className="years">
                                <span>{release_date}</span>
                            </div>
                            <div className="description">
                                <p>{overview}</p>
                            </div>
                            <div className="country">
                                <h5>Films Country</h5>
                                {
                                    production_countries && production_countries.map((item, i) => (
                                        <span key={i}>{item.name}</span>
                                    ))
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Footer />


        </div>
    );
};

export default Details;
