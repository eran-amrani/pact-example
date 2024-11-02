const axios = require('axios');

(async function getUserData() {
  try {
    const response = await axios.get('http://localhost:5000/user');
    console.info(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
})();
