import DispalyProduct from "../prasentation/DispalyProduct"


const ProductData = () => {

const title = "React Project"

let count = 10

const isActive = true

const values = null

const arr = [1,2,3,4,5,6,7,8,9]

const obj = {name:"React",age:29,subject:"Node"}


const arrobj = [
    {name:"React",age:29,subject:"Node"},
    {name:"JS",age:20,subject:"JS"},
    {name:"HTML",age:12,subject:"Frontend"},
    {name:"CSS",age:15,subject:"Design"}
]

// let count = 0
const changeColor = ()=>{
  
   
   alert(count++)

    
}


  return (
    <>
    <DispalyProduct  titledata={{title,count,isActive,values}} datas = {{arr,obj,arrobj,changeColor}}  />
    </>
  )
}

export default ProductData
