import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";


const DetailsCard = ({ data }) => {
    const { image, title, description } = data
    return (
        <div className='details_card'>
            <div className="image">
                <img src={image} alt="" />            </div>
            <div className="details">
                <span>THRILLER, HORROR</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="time_details">
                    <span>FULL SYNOPSISn <FaChevronRight /></span>
                    <span className='time'><CiTimer /> WIEING TIMES</span>
                    <div className="button_group">
                        <span className='time_btn'>04:00</span>
                        <span className='time_btn'>06:00</span>
                        <span className='time_btn'>10:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard