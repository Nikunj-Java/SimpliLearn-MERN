const axios=require('axios')

async function getUser(username){
    try {
        const response=await axios.get(`http://api.github.com/users/${username}`);
        console.log(response.data['following']);
    } catch (error) {
        console.error(error);
    }
}

getUser('Nikunj-Java');