


let ul1 = document.getElementById("unordered1");
let ul2 = document.getElementById("unordered2");
let ul3 = document.getElementById("unordered3");
let promise1 = new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
     //    console.log(res.json())
        return res.json()
    })
    .then((data)=>{
      console.log(data)
      resolve(data)
    })
})

let promise2 = new Promise((resolve,reject)=>{
    let body = {
            name: "xxx",
               username: "yyy"
        }
     let requestDetail ={
        method : "POST",
        headers : {'Content-type':'application/json'},
        body : JSON.stringify(body)
     }
     fetch("https://jsonplaceholder.typicode.com/users",requestDetail)
     .then((res)=>{
        //   console.log(res.json())
           return res.json()
     })
     .then((data)=>{
         console.log(data)
        resolve(data)
      return data
  })
})

Promise.all([promise1,promise2])
.then((res)=>{
  console.log(res)
})

