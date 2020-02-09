const axios = require('axios');




export const searchPhotos = (keyword) => {
    return axios.get(`/api?key=${process.env.REACT_APP_BACKEND_API}&format=json&nojsoncallback=true&tags=${keyword}&lan=en`);

};




