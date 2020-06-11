import axios from 'axios';

const instance = axios.create(
    {
        baseURL:'https://react-my-burger-shahid313.firebaseio.com/'
    }
);

export default instance;