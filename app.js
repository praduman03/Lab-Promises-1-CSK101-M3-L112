// create a function and following the progressions inside the function.
function Contacts(){
// Progression 1: Create a promise call which fetches data
axios.get("https://jsonplaceholder.typicode.com/users")
// Progression 2: Display the fetched data in the form of list
.then((data)=>{

console.log(data.data)
const completedata=data.data;
let data1='';
for(i=0;i<10;i++){
  data1+=` <div class="player">
  <div class="strength">Name : ${completedata[i].name}</div>
  <div>Email   : ${completedata[i].email}</div>
  <div>Phone   : ${completedata[i].phone}</div>
  <div>Website : ${completedata[i].website}</div>
  <div>Company : ${completedata[i].company.name}</div>
  <div>City    : ${completedata[i].address.city}</div>
  <div>Zipcode : ${completedata[i].address.zipcode}</div>
  </div>`
  }
  document.getElementById("message").innerHTML=data1;
})
// Progression 3: When the promise call is rejected then throw an error
.catch((error)=>{
  console.log('Promise rejected.');
    console.log(error.message);
})
}



// const button=document.getElementById("getBtn");
// const player=document.querySelector(".player")
// addEventListener('click',()=>{
//   player.classList.remove("hide")

// })
