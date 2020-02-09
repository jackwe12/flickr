import React from 'react';
import './ImageSearch.css';
import { useState } from 'react';
import * as yup from 'yup';
import { searchPhotos } from '../getPhotos';
import InfiniteScroll from 'react-infinite-scroller';
import { CardColumns, Spinner } from 'react-bootstrap';
import ImageCard from '../Card/Card';
import InputForm from '../Form/Form';

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
        const isValid = await schema.validate(evt);
        if (!isValid) { return }
        setImages([]);
        setKeyword(evt.query);
        setEmptyTimes(0);
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

        setImages(images.concat(filteredData));
    }


    return (
        <div className="ImageSearch">
            <InputForm
                handleSubmit={handleSubmit}
                schema={schema}

            />
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
