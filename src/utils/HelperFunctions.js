import axios from 'axios';


export const getCityList =(setCityNameArr)=>{
    axios.get('israel_city_list.json').then(response=>{
        setCityNameArr(response.data.map((item)=>{
            return item.hebrew_name;
        }));
    })
}