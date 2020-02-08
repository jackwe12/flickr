import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ImageSearch.css';
import { useState} from 'react';
import * as yup from 'yup';
import { searchPhotos } from '../getPhotos';
import InfiniteScroll from 'react-infinite-scroller';
import {CardColumns, Spinner} from 'react-bootstrap';
import ImageCard from '../Card/Card'
//revise
const schema = yup.object({
    query: yup.string().required('Keyword is required'),
  });



function ImageSearch(){
    let page =1;
    const [images, setImages] = useState([]);
    const [keyword, setKeyword] = useState('');

    const handleSubmit = async (evt) =>{
        const isValid = await schema.validate(evt);
        if (!isValid) {return}
        // const data ={
        //     q:encodeURIComponent(evt.query),
        // }
        setKeyword(evt.query);
        const response = await searchPhotos(keyword);
        setImages([]);
        setImages(images.concat(response.data.items));
    }
    const getMorePhotos = async () => {
        page = page + 1 ; 
        const response = await searchPhotos(keyword);
        setImages(images.concat(response.data.items));
        getLoader();
        console.log()

      }
    const getLoader = () => {
        console.log('getLoader')
        return(
            <React.Fragment>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>          
            </React.Fragment>
        )
    }  

    return (
        <div className="ImageSearch">
      <Formik
        initialValues={{
            query:''
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
                  <Form.Label style={{textAlign:"center"}}>
                    <h4>Image Search</h4>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="query"
                    placeholder="Keyword"
                    value={values.query || ''}
                    onChange={handleChange}
                    isInvalid={ errors.query}
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
        hasMore={true}
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




        </div>
    );
}



export default ImageSearch;
