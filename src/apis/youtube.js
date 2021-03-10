import axios from 'axios';

const KEY = 'AIzaSyBMKuQQ3p2OWOWuvR_swTVSV_7By_GCijU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});