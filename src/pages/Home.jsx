import React from 'react'
// components
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Days from '../components/Days';
// react_icons
import { FaPlay } from "react-icons/fa";
// mockdata
import { cardData } from "../mockdata/cardData"
import DetailsCard from '../components/DetailsCard';

import { useState } from 'react';
import Footer from '../components/Footer';





const Home = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    var daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const filteredCardData = selectedDay
        ? cardData.filter((data) => data.day.toUpperCase() === selectedDay)
        : cardData;


    return (
        <div className='home_wrapper'>
            {/* head section */}
            <section className="head_section">
                <Navbar />
                <div className="container">
                    <div className="content">
                        <span className='text'>ACTION, ADVENTURE, FANTASY</span>
                        <h3>Up in smoke: The remake</h3>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                        <div className="button_group">
                            <span className='banner'>PG</span>
                            <button><FaPlay className='icon' /><span>Play Trailer</span></button>
                        </div>
                    </div>
                </div>

            </section>


            {/* new films section */}
            <section className='new_films_section'>
                <div className="container">
                    <div className="section_head">
                        <h3>NEW IN</h3>
                    </div>
                    <div className="film_container">
                        {
                            cardData.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        }

                    </div>
                </div>

            </section>

            {/* dayselect films section */}
            <section className='daySelect_section'>
                <div className="container">
                    <Days days={daysOfWeek} setSelectedDay={setSelectedDay} />
                    {
                        filteredCardData.map((data) => (
                            <DetailsCard key={data.id} data={data} />
                        ))
                    }

                </div>
            </section>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home