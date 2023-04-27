import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark,FaShareAlt,FaEye,FaRegStar,FaStar} from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const { title, details,image_url,name,thumbnail_url,rating,total_view,_id,category_id,author } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                {<Image style={{height:'40px'}} src={author?.img} roundedCircle />}
                <div className='ps-3 flex-grow-1 '>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small className='mt-0'> {moment(author?.published_date).format("MMM Do YY")} </small></p>
                </div>
                <div>
                    <FaBookmark/>
                    <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                   {details.length < 250 ? <>{details}</>:
                   <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                   }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex aline-items-center">
                <div className='flex-grow-1 '>
                    <Rating
                     placeholderRating={rating?.number}
                     readonly
                     emptySymbol={<FaRegStar />}
                     placeholderSymbol={<FaStar />}
                     fullSymbol={<FaStar />}
                    ></Rating>
                    {rating?.number}
                </div>
                <div>
                    <FaEye></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;