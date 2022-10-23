import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from 'react-icons/fa';

const NewsDetails = ({ news }) => {
    const { title, details, image_url, _id, author, rating, total_view } = news;

    return (
        <div>
            <Card className=" my-3">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <Image src={author?.img} roundedCircle style={{ "height": "60px" }}></Image>
                            <div className='ms-2'>
                                <p className='m-0'>{author?.name}</p>
                                <p>{author?.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark className='me-2'></FaRegBookmark>
                            <FaShareAlt></FaShareAlt>
                        </div>

                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Image src={image_url} fluid ></Image>
                    <Card.Text>
                        {
                            details.length > 200 ?
                                <>
                                    {details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link>
                                </>
                                :
                                <>
                                    {details}
                                </>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-2'></FaStar>
                            <p className='m-0'> {rating.number}  </p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaRegEye className='me-2'></FaRegEye>
                            <p className='m-0'>{total_view}</p>

                        </div>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsDetails;