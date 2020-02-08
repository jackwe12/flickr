import React from 'react';
import './HomePage.css';
import { useState, useEffect } from 'react';
import {getPhotos} from '../getPhotos'
import Figure from 'react-bootstrap/Figure';
import InfiniteScroll from 'react-infinite-scroller';

function HomePage() {
    const [images, setImages] = useState([]);
    const [initialized, setInitialized] = useState(false);
    // const [totalPages, setTotalPages] = useState(0);


    let page =0;
    const getNewPhotos = async () =>{
        page = page +1 ;
        const response = await getPhotos();
        setImages(images.concat(response.data.items));
        // setTotalPages(response.data.totalPages);
        console.log(response.data.items);
        console.log(images);
        setInitialized(true);
    };

    useEffect(()=>{
        if (!initialized){
            getNewPhotos();
        }
    });

return (
    
        <div className="HomePage">

                <InfiniteScroll
                    pageStart={page}
                    loadMore={getNewPhotos}
                    hasMore={true}
                    threshold={100}
                >
                {images.map((i, index) =>
                    <Figure key={index}>
                        <Figure.Image
                            width={window.innerWidth / 3.5}
                            src={i.media.m}
                        />
                    </Figure>


                    )}  
                </InfiniteScroll>


        
        </div>
    );
}
export default HomePage; 