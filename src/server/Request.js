import axios from 'axios';
class Request{
    constructor(method, url, data, collback){
        this.collback = collback;
        this.params = {
            method: method,
            url: url,
            data: data,
        
        };
    }
    start(){
        axios(this.params).then((responce) =>{
            this.collback(responce);
        })
        .catch((error) =>{
            this.collback(error);
        })

    }
}
export default Request;