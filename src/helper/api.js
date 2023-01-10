

const BASE_URL = `https://restcountries.com/v3.1/all`
export const getDataContries = async (url = BASE_URL)=>{
    const response = await fetch(url);
    const data = await response.json();
    try {
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

