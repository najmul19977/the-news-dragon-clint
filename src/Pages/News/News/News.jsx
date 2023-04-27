
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsigths from '../EditorsInsigths/EditorsInsigths';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, name, thumbnail_url, rating, total_view, _id, category_id, author } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft /> All News In This Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsigths></EditorsInsigths>
        </div>
    );
};

export default News;