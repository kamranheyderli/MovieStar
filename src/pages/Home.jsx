import React from 'react';
// components
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Days from '../components/Days';
import DetailsCard from '../components/DetailsCard';
import Footer from '../components/Footer';
import MovieCard from "../components/MovieCard"
// icons
import { FaPlay } from 'react-icons/fa';
// mockdata
import { cardData } from '../mockdata/cardData';
// services
import { fetchData,searchMovies } from '../services/service';
// hooks
import { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';


const Home = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [data, setData] = useState([]);
    const [querry, setQuerry] = useState("");

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;


    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData(baseUrl, apiKey);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromApi();
    }, [baseUrl, apiKey]);
   
  useEffect(() => {
        const search = async () => {
            try {
                const result = await searchMovies(baseUrl, apiKey, querry);
                setData(result);
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        };

        if (querry) {
            search();
        }
    }, [baseUrl, apiKey, querry]);


    let daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const filteredCardData = selectedDay
        ? cardData.filter((data) => data.day.toUpperCase() === selectedDay)
        : cardData;

    return (
        <div className="home_wrapper">
            {/* head section */}
            <section className="head_section">
                <Navbar />
                <div className="container">
                    <div className="content">
                        <span className="text">ACTION, ADVENTURE, FANTASY</span>
                        <h3>Up in smoke: The remake</h3>
                        <p>
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                            littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta
                            decima et quinta decima.
                        </p>

                        <div className="button_group">
                            <span className="banner">PG</span>
                            <button>
                                <FaPlay className="icon" />
                                <span>Play Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* all_films */}
            <section className='all_films_section'>
                <div className="container">
                    <div className="section_head">
                        <h3>ALL FILMS</h3>
                    </div>
                    <SearchInput setQuerry={setQuerry} />
                    
                    <div className="card_container ">
                        {
                            data.map((data) => (
                                <MovieCard key={data.id} data={data} />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* new films section */}
            <section className="new_films_section">
                <div className="container">
                    <div className="section_head">
                        <h3>NEW IN</h3>
                    </div>
                    <div className="film_container">
                        {cardData.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>


            {/* dayselect films section */}
            <section className="daySelect_section">
                <div className="container">
                    <Days days={daysOfWeek} setSelectedDay={setSelectedDay} />
                    {filteredCardData.map((data) => (
                        <DetailsCard key={data.id} data={data} />
                    ))}
                </div>
            </section>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;
