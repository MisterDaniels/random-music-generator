import 'dotenv';
import axios from 'axios';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const apiClient = axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
    header: {
        'Authorization': `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString('base64')}`
    }
});

export default {

    requestClientAuthorization() {
        
    }

}