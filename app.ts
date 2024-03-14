//! get request

// const request = ():void => {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response:Response)=>response.json())
//    .then((result:any)=> console.log(result))
//    .catch((err:any)=>console.log(err))
// };

// request()

//? async function

// const request1 = async ():Promise<void> => {
//     try{
//   const getRequest:Response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const response:any = await getRequest.json();
//   console.log(response);
//     }
//     catch{
//         console.log("error");
//     }
// };
// request1();

//! Post request

// const postRequest = ():void =>{

//    fetch('https://jsonplaceholder.typicode.com/users', {
//   method :'Post',
//   headers:{
//     'Content-type':"application/json"
//   },

//   body:JSON.stringify({
//     fullName:"Nihad Aliyev",
//     email:"naliyev@gmail.com"
//   })
// }).then((response:Response) => response.json())
//   .then((data:any)=> console.log(data))
//   .catch((err:any)=>console.log(err))
// }
// postRequest()

//? async function

// const userRequest2 = async():Promise<void>=>{
  
//     try{
//   const postRequest:Response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
//     method:'Post',
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       fullName:"Nihad ALiyev",
//       email:"naliyev@gmail.com"
//     })
//   })
//   const response:any = await postRequest.json()
//   console.log(response);
// }catch{
//     console.log("error");
// }
// }
// userRequest2()


//! Put request

// const userRequest =():void=>{
//  fetch(`https://jsonplaceholder.typicode.com/users/2`,{
//     method:'put',
//     headers:{
//       'content-type':"application/json"
//     },
//     body:JSON.stringify({
//       name:"Nihad",
//       email:"naliyev@gmail.com"
//     })
//   })
//   .then((response:any)=>response.json())
//   .then((result:any)=>console.log(result))
//   .catch((err:any)=>console.log(err))


// }

// userRequest()

//? async function

// const userRequest2 = async() =>{
//     try{
//   const putRequest = await fetch(`https://jsonplaceholder.typicode.com/users/1`,{
//     method:'Put',
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       name:"Nihad",
//       email:'naliyev@gmail.com'
//     })
//   })
//   const response = await putRequest.json()
//   console.log(response);
// }catch{
//     console.log("error");
// }
// }

// userRequest2()

//! Patch request

// const userRequest = ():void =>{
//   fetch(`https://jsonplaceholder.typicode.com/users/1`,{
//     method:'PATCH',
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       name:"Nihad",
//       username:"Niko"

//     })
//   })
//   .then((response:Response)=>response.json())
//   .then((result:any)=>console.log(result))
//   .catch((err:any)=>console.log(err))
// }
// userRequest()

//? async function

// const userRequest2 = async():Promise<void>=>{

//     try{
//   const patchRequest:Response = await fetch(`https://jsonplaceholder.typicode.com/users/1`,{
//     method:"PATCH",
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       name:"Nihad",
//       username:"Niko"
//     })
//   })
//   const response:any = await patchRequest.json()
//   console.log(response);
// }catch{
//     console.log("error");
// }
// }