import axios from "axios";


// api docs
// https://rawg.io/apidocs

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '761e256ac0df45379f5923fe943e8701'
    }
})