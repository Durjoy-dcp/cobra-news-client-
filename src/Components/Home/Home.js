import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>This is Home</h3>
            {
                allNews.map(news => <NewsDetails key={news._id} news={news}></NewsDetails>)
            }
        </div>
    );
};

export default Home;