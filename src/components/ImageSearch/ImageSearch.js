import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ImageSearch.css';
import { useState } from 'react';
import * as yup from 'yup';
import { searchPhotos } from '../getPhotos';
import InfiniteScroll from 'react-infinite-scroller';
import { CardColumns, Spinner } from 'react-bootstrap';
import ImageCard from '../Card/Card'

const schema = yup.object({
    query: yup.string().required('Keyword is required'),
});


function ImageSearch() {
    let page = 1;
    const [images, setImages] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [emptyTimes, setEmptyTimes] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (evt) => {
        setImages([]);
        setEmptyTimes(0);
        const isValid = await schema.validate(evt);
        if (!isValid) { return }
        setKeyword(evt.query);
        const response = await searchPhotos(keyword);
        setImages(images.concat(response.data.items));
    }
    const getMorePhotos = async () => {
        setLoading(true)
        page = page + 1;
        const response = await searchPhotos(keyword)
        setLoading(false)

        const filteredData = response.data.items.filter(i => {
            if (images.filter(j => j.link === i.link).length === 0) {
                return true
            } else { return false }

        });
        if (filteredData.length === 0) {
            setEmptyTimes(emptyTimes + 1)
        }
        // console.log(filteredData);
        // setImages(images.concat(response.data.items));
        setImages(images.concat(filteredData));
    }


    return (
        <div className="ImageSearch">
            <Formik
                initialValues={{
                    query: ''
                }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isInvalid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit} className="search-bar">
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="firstName">
                                    <Form.Label style={{ textAlign: "center" }}>
                                        <h4>Image Search</h4>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="query"
                                        placeholder="Keyword"
                                        value={values.query || ''}
                                        onChange={handleChange}
                                        isInvalid={errors.query}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.query}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Search</Button>
                        </Form>
                    )}
            </Formik>
            <InfiniteScroll
                pageStart={page}
                loadMore={getMorePhotos}
                hasMore={emptyTimes < 1}
                threshold={100}
            >

                <CardColumns>
                    {images.map((i, index) =>
                        <ImageCard
                            key={index}
                            item={i}
                        />
                    )}
                </CardColumns>



            </InfiniteScroll>
            {loading === true ?
                <Spinner animation="border" role="status" className="loader">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                : ""}
            <div className="error-message">
                {(emptyTimes === 1) && (loading === false) ? "No more images" : ""}
            </div>

        </div>
    );
}



export default ImageSearch;
