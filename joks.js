


//// fetch APi with help of Promises 

const jokes = document.querySelector("#joks");
const jokesbtn= document.querySelector("#joks-btn")


// const genrateJokes = () =>{
//     const setHeader ={
//         headers:{
//             Accept:'application/json'
//         }
//     }
// fetch("https://icanhazdadjoke.com/", setHeader)
// .then((res)=>res.json())
// .then((data)=>{
//     jokes.innerHTML = data.joke;
// })

// .catch((error)=>{
// console.log(error)
// })
// }
// jokesbtn.addEventListener('click', genrateJokes)
// genrateJokes()


//// when we use async for normal function then we use async sb  sy first pa 

// async function genrateJokes (){

// }


// fat arrow function use  async

const genrateJokes = async () =>{
    try{
        const setHeader ={
            headers:{
                Accept:'application/json'
            }
        }
    const res = await fetch("https://icanhazdadjoke.com/", setHeader)
    const data = await res.json();
    jokes.innerHTML= data.joke
    }catch(err){
        console.log(`this is error: ${err}`)
    }
}
jokesbtn.addEventListener('click', genrateJokes)
genrateJokes()
