import axios from 'axios';

const KEY = "AIzaSyBOB0vtIdFP2SxZtmqyiA5mj130RjM5Utw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})
