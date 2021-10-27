import axios from 'axios';
import AuthToken from '../utils/setauthToken';
const SigenIn = async (account) => {
    try {
        const json = { user : account.username}
      
        return await axios.post('/api/login', json).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('auth', true);
            localStorage.setItem('user',  JSON.stringify(res.data.user[0]));
            AuthToken(localStorage.setItem('token', res.data.token));
            return res.data
        });
    } catch (err) {
        // Handle Error Here
        return err.response.data; // you can get the response like this
       
    }
};

export default SigenIn;