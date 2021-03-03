import {getData}from './getDate'
// set name
const setName=(name:string)=> {
  localStorage.setItem("name", JSON.stringify(name));
}

//set data
const setData=(time:number,counter:number)=> {
  let newData=[]
  const arr:any=getData()
  const year=new Date().getFullYear()
  const month=new Date().getMonth()
  const day=new Date().getDay()
  const hour=new Date().getHours()
  const min=new Date().getMinutes()
  const sec=new Date().getSeconds()

  const date=`${day}/${month}/${year} ${hour}:${min}:${sec}`
  const data=[date,time,counter]
  if(arr.length===0){
    newData=[data]
  }else{
    newData=[...arr,data]
  }

  localStorage.setItem("data", JSON.stringify(newData));
}

export {setName, setData}