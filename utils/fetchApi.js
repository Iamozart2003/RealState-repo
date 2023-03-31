import axios from "axios";

// headers: {
//     'X-RapidAPI-Key': '9dadab035fmsh1964dd8e2c8d4ebp194989jsn6a9daa017fb8',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '9dadab035fmsh1964dd8e2c8d4ebp194989jsn6a9daa017fb8',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}