import React from 'react'

const DispalyProduct = (props) => {

    console.log(props);

    const {datas,titledata} = props

    console.log('datas',datas);
    console.log('titledata',titledata);
    
    
  return (
   <>
   <div className='bg-white w-50 h-50 p-2 text-black mb-5'>
    <h1>{titledata.title}</h1>
   <p>Count: {titledata.count}</p>
   {titledata.isActive===true?<p>This is True</p>:<p>This is False</p>}
   {titledata.values??<h2>This is Main Datas</h2>}
   </div>

   <div className='bg-white p-2 text-black'>
    {datas.arr.map((e,i)=>(
        <p key={i}>{e}</p>
    ))}
   </div>


   <div className='bg-black text-white'>

    <p>{datas.obj.name}</p>
    <p>{datas.obj.age}</p>
    <p>{datas.obj.subject}</p>

   </div>


  <div className='bg-black text-white flex justify-center gap-5 mb-5'>

     {datas.arrobj.map((e,i)=>(

          <div className='bg-white text-black p-2 w-30 h-35' key={i+1}>

        <h1>Name:{e.name}</h1>
        <p>age:{e.age}</p>
        <p>subject:{e.subject}</p>
    
    </div>
        
    ))}

  
     
   </div>
  
  <div>
    <button className='bg-white w-25 rounded text-black p-1' onClick={datas.changeColor}>click Count</button>
  </div>


   </>
  )
}

export default DispalyProduct
