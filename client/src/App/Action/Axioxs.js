/** @format */

import axios from "axios";

const BASE_URL = process.env.REACT_APP_NODE_ENV;

const post=(url,body,config)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
}

const get = (url,data,headers)=>{

    
    try {
        const res = await axions.get(`${BASE_URL}${url}`, data)
        return res.data
    } catch (error) {
        console
    }
}

