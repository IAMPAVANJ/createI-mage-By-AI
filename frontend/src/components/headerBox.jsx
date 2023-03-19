import React from "react";
import { useState } from "react";
import "./header.css";
const Header = ({setListImages,setIsLoading})=>{
    const [inputValue,setInputValue] = useState("");
    const handleChange=(e)=>setInputValue(e.target.value);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            setIsLoading(true)
            await fetch("http://localhost:8080/search/images",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    prompt:inputValue
                })
            })
            .then(res=>res.json())
            .then(data=>setListImages(data))
            .catch(err=>console.log(err))
            .finally(()=>setIsLoading(false))

           
            
            // let jsonData = data.json()
            // console.log(jsonData)
            
            // setListImages(jsonData)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }
    return(
        <div className="container shadow-lg p-3 mb-5 mt-3 rounded" id="headerBox">
            <div className="container">
                <h4 className="primary">Search Your Imagination</h4>
                <h4 className="text-end" id="logo">PAVAN.Ai</h4>
                <div>
                    <h6>AI Powered</h6>
                    <p className="text-primary">AI Image search By Pavan</p>
                    
                </div>
                
            </div>
            <div className="container" id="searchBar">
         
                    <input onChange={handleChange} type="text" value={inputValue} className="form-control" placeholder="search image...."/>
                    <button onClick={handleSubmit} className="btn btn-primary d-inline">search</button>
            </div>
        </div>
    )
}
export default Header;