
import axios from "axios";

export async function fetchDataPost(API_URL,newData){

    try {
    const response = await axios.post(API_URL, newData,
            {
        withCredentials: true
    }

    );

    console.log("response in axios part:", response);

    const result = response.data;

    if (response.status !== 200) {
        throw new Error(`API Error: ${response.status}`);
    }

    return {
        success:true,
        data:result
    }
   

} catch (error) {
    console.log(error);
      return{
            success:false,
            data:null
        }

}
}


export async function fetchDataGet(API_URL){
    try{
          const response = await axios.get(API_URL, {
        withCredentials: true
    });
        console.log("axios get:",response);
        const result = response.data;
        if(response.status!==200)
        {
            throw new Error(`API Error: ${response.status}`);
        }

            return {
        success:true,
        data:result
    }
    }catch(err){
        return{
            success:false,
            data:null
        }
    }
}
