import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 0d359913c47f4c1d72ad43bba7814c02607a202d5f84c4e456597aec077ef7ca'
  }
});
