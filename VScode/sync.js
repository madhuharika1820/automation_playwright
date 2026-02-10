//synchronize

 console.log("start")
 for(let i=0;i<10;i++)
     {
 console.log("madhuuu")
 }
console.log("end")




//synchronize using timeout that is in asynchronize
console.log("start");

async function run() {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                console.log("madhuuu");
                resolve(); // resolves the promise after the delay
            }, 10 * i); // Delay increases with each iteration
        });
    }
}

run();
