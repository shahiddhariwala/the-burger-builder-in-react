import axios from 'axios';

const instance = axios.create(
    {
        //Firebase Realtime DB API/URL
        baseURL:'https://react-my-burger-shahid313.firebaseio.com/'
    }
);

export default instance;