import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Catagory = () => {
    const allNews = useLoaderData();
    // console.log(allNews);
    return (
        <div>
            <h3>This is Catagory</h3>
            {
                allNews.map(news => <NewsDetails key={news._id} news={news}></NewsDetails>)
            }
        </div>
    );
};

export default Catagory;