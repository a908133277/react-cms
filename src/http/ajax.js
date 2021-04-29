import Axios from 'axios'
export default function ajax(url,data={},type="GET"){
    switch(type){
        case "GET":
            return Axios.get(url,{params:data})
        case "POST":
            return Axios.post(url,data)
        default :
            return Axios.get(url,{params:data})
    }
}

