const axios=require('axios')

async function getUser(username){
    try {
        const response=await axios.get(`http://api.github.com/users/${username}`);
        console.log(response.data['following']);
    } catch (error) {
        console.error(error);
    }
}

//whether and forecast api
//api_key: 19043c99a93215d99870aa62ecc42df4

async function getWhetherData(city){
    const API_key='Your_API_Key';
    try {
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

//getUser('Nikunj-Java');
getWhetherData('China');