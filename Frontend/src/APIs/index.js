
export async function fetchDataPost(API_URL,newData){

    try{
        const response=await fetch(API_URL,
            {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(newData)   
            }
        );
        if(!response.ok){
            throw new Error(`API Error:${response.status}`);

        }
        const result=await response.json();
        return {
            success:true,
            data:result
        }

    }catch(err){
        console.log(err);
        return{
            success:false,
            data:null
        }
    }
}


