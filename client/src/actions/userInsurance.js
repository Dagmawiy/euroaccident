import axios from 'axios';

const UserInsurance = async () => {
    const token = localStorage.token;
    try {
        return await axios.get('/api/user/insurances', {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        }).then(res => {
            return res.data
        });
    } catch (err) {
        // Handle Error Here
        return err.response.data; // you can get the response like this
       
    }
};

export default UserInsurance;