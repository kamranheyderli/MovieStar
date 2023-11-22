

const Days = ({ days, setSelectedDay }) => {

    const updatedDays = [...days];
    updatedDays.splice(2, 0, "TODAY");

    const handleDayClick = (day) => {
        setSelectedDay(day);

    };

    return (
        <div className='days_container'>
            <ul>
                {updatedDays.map((day, index) => (
                    <li key={index}>
                        <span onClick={() => handleDayClick(day)}>
                            {index === 2 ? day : day.slice(0, 3)}
                        </span>
                    </li>
                ))}
            </ul>

            <span className="days">Wed, 22 November</span>
        </div>
    );
};

export default Days;
