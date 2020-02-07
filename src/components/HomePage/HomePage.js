import React from 'react';
// import './HomePage.css';
import { useState, useEffect } from 'react';
import {getPhotos} from '../getPhotos'
import Figure from 'react-bootstrap/Figure';


function HomePage() {
    const [images, setImages] = useState([]);
    const [initialized, setInitialized] = useState(false);



const getNewPhotos = async () =>{
    const response = await getPhotos();
    setImages(images.concat(response.data.items));
    console.log(response.data.items)
    console.log(images)
    setInitialized(true);
};

useEffect(()=>{
    if (!initialized){
        getNewPhotos();
    }
});

return (
    
        <div className="HomePage">
        {images.map((i, index) =>
                    <Figure key={index}>
                        <Figure.Image
                            width={window.innerWidth / 3.5}
                            src={i.media.m}
                        />
                    </Figure>
        )}
        
        </div>
    );
}
export default HomePage; 