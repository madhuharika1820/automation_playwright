function getData(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("data received");
        },2000);
    });
}

async function showData()
{
    console.log("fetching data");
    const result= await getData();
    console.log(result);
}
showData();

//exmple-2
async function sayHi()
{
    return "r u ok babyy";
}
async function showmsg()
{
    const message= await sayHi();
    console.log(message);
}
showmsg();



//async _await for reject using if and else statement
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating a failure scenario
            const success = false; // Set this to false to trigger rejection
            if (success) {
                resolve("data received");
            } else {
                reject("error occurred while fetching data");
            }
        }, 2000);
    });
}

async function showData() {
    console.log("fetching data");
    try {
        const result = await getData();  // Awaiting the promise
        console.log(result);
    } catch (error) {
        console.log("Error:", error);  // Handling the rejection
    }
}

showData();
