// const APIURL = 'https://www.flickr.com/services/feeds/photos_public.gne';
const APIKEY = '503a20a49d9e4fb9991c70e39c6d7979';
const axios = require('axios');

//https://www.flickr.com/services/feeds/photos_public.gne?key=value&key=value



// export const getPhotos = () =>{
//     return axios.get(`${APIURL}?key=${APIKEY}&format=json&nojsoncallback=true`)
// };

// export const searchPhotos = (keyword) => {
//     return axios.get(`${APIURL}?key=${APIKEY}&format=json&nojsoncallback=true&tags=${keyword}&lan=en`);
// };

export const searchPhotos = (keyword) => {
    return axios.get(`/api?key=${APIKEY}&format=json&nojsoncallback=true&tags=${keyword}&lan=en`);
};





