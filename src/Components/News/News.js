import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <Card >
            <Card.Img variant="top" src={news.image_url} />
            <Card.Body>
                <Card.Title>{news?.title}</Card.Title>
                <Card.Text>

                    {news?.details}
                </Card.Text>
                <Link to={`/catagory/${news.category_id}`}>  <Button variant="primary">Go to the Catagory</Button></Link>

            </Card.Body>
        </Card>
    );
};

export default News;