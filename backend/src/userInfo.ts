import axios from 'axios';
async function getUserInfo(accessToken) {
  console.log("ACCESS TOKEN ", accessToken);
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    if (response.status === 200) {
      const userData = response.data;
      return userData;
    } else {
      console.error(`Failed to fetch GitHub profile data. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export default getUserInfo;
