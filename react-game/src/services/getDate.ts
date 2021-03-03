// Get name
const getName=()=> {
  let name:string='';
  if (localStorage.getItem("name") === null) {
   return name
  } else {
    return localStorage.getItem("name");
  }
}

//get data
const getData=()=> {
  let data:any=[];
  if (localStorage.getItem("data") === null) {
   return data
  } else {
    data=localStorage.getItem("data")
    return JSON.parse(data);
  }
}

export {getName, getData}