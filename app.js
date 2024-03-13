//! get request

// const request = () => {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response)=>response.json())
//    .then((result)=> console.log(result))
// };

// request()

//? async function

// const request1 = async () => {
//   const getRequest = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const response = await getRequest.json();
//   console.log(response);
// };
// request1();

//! Post request

// const postRequest = () =>{

//    fetch('https://jsonplaceholder.typicode.com/users', {
//   method :'Post',
//   headers:{
//     'Content-type':"application/json"
//   },

//   body:JSON.stringify({
//     fullName:"Nihad Aliyev",
//     email:"naliyev@gmail.com"
//   })
// }).then(response => response.json())
//   .then(data => console.log(data))
// }
// postRequest()

//? async function

// const userRequest2 = async()=>{
//   const postRequest = await fetch(`https://jsonplaceholder.typicode.com/users`,{
//     method:'Post',
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       fullName:"Nihad ALiyev",
//       email:"naliyev@gmail.com"
//     })
//   })
//   const response = await postRequest.json()
//   console.log(response);
// }
// userRequest2()


//! Put request

// const userRequest =()=>{
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
//   .then((response)=>response.json())
//   .then((result)=>console.log(result))


// }

// userRequest()

//? async function

// const userRequest2 = async() =>{
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
// }

// userRequest2()

//! Patch request

// const userRequest = () =>{
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
//   .then((response)=>response.json())
//   .then((result)=>console.log(result))
// }
// userRequest()

//? async function

// const userRequest2 = async() =>{

//   const patchRequest = await fetch(`https://jsonplaceholder.typicode.com/users/1`,{
//     method:"PATCH",
//     headers:{
//       'Content-type':"application/json"
//     },
//     body:JSON.stringify({
//       name:"Nihad",
//       username:"Niko"
//     })
//   })
//   const response = await patchRequest.json()
//   console.log(response);
// }