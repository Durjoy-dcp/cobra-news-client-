import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-catagory')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h3>All catagories {catagories.length}</h3>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    <Link to={`catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div >
    );
};

export default LeftSide;