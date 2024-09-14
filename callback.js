
    {/* function success() {
        console.log("Success")
    }
    function fail() {
        console.log("Fail")
    }
    function error() {
        console.log("Error")
    }
    function exec(data,callback){
       if(data){
        console.log(data)

       }
       setTimeout(callback,300)
    }
    

    function trigger(){
        if(data>0){
            console.log(data,success)
        }
        else if(data<=0){
            console.log(data,fail)
        }
        else{
            console.log(data,error)
        }
    }
    trigger(2) */}
async function API(){
    const response=fetch('https://66e526fa5cc7f9b6273c6cbf.mockapi.io/register')
    const data= await response.json()
    console.log(API)
    return data;
}
API()
