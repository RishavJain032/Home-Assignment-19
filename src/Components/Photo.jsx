import React, { useEffect, useState } from 'react'

const Photo = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState("offce")
    const [list,setList]=useState([])

    useEffect(()=>{
     const Apidata = async()=>{
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=9YDLcI1r-ZAzxm9rJvT7R6V3raMPNygtyuBYJ99pxr4`)
        const result = await res.json()
        console.log(result.results)
        setList(result.results)
     }
     Apidata()
    },[data])
    
  return (
    <div className='Div'>
        <div className="Navbar">
            <h2>GeekGallery</h2>
            <div className="searchinputDiv">
                <input type="text"  placeholder='Search' onChange={(e)=>{setInput(e.target.value)}}/>
                <button onClick={()=>{setData(input)}}>Search</button>
            </div>
        </div>
        <div className="Sectionmain">
          {
            list.length > 0 ? 
            <div className='cardMainDiv'>
         {
            list.map((ele)=>{
            return <div className='cardDiv' style={{backgroundImage:`url(${ele.urls.full})`,backgroundSize:"100% 100%"}}>
              <p><b>{ele.alt_description}</b></p>
              <p>{ele.created_at}</p>

            </div>
          })
        }
          </div>
            : <div className='Error'>
              <div className='NotFound'>
              <h2 style={{color:"red",fontSize:"3rem",borderRadius : "10px"}}>Data Not Found..!</h2>
            </div>
            </div>
          }
          
        </div>
    </div>
  )
}

export default Photo;