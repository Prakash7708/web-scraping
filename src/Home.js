import { useEffect, useState } from "react";
//import { Users } from "./users";
import "./App.css";
import Cart from "./Cart";
import axios from "axios";


function Home() {
    // const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    // const [gen,setGen]=useState([])
    useEffect(()=>{
      
        fetchData()
      },[])
  
      let fetchData= async()=>{
       try{ const res = await axios.get(`https://web-scrape1.herokuapp.com`);
       console.log(res.data)
         setData(res.data);}
         catch(error){
            console.log(error)
         }
      }
    //  useEffect(fetchData())
    //   async function fetchData(){
    //    //const res = await axios.get(`http://localhost:3000/?q${query}`);
    //     const res = await axios.get(`http://localhost:3001`);
    //     console.log(res.data)
    //      setData(res.data);
    //   }
    // }) ;
    //   fetchData()
    //   if (query.length === 0 || query.length > 2) fetchData();
    // }, [query]);
   async function fetchData2(query) {
      try{ if(query.length<4){
         const res = await axios.get(`https://web-scrape1.herokuapp.com/${query}`);
         console.log(res.data)
          setData(res.data);
        }else if(query.length<=6){
          const res = await axios.get(`https://web-scrape1.herokuapp.com/${query}`);
          console.log(res.data)
           setData(res.data);
        }
          else{
            // const res = await axios.get(`http://localhost:3001/${query}`);
            // console.log(res.data)
            //  setData(res.data);
        }}catch(error){
            console.log(error)
        }
       };

  
    return (
        <>
        <div className="navbar">
      <div className="Top">
        <img src="" />
          <input
            className="search"
            placeholder="Search..."
            // onChange={(e) => setQuery(e.target.value.toLowerCase())
            // onChange={(e) => setQuery(e.target.value)}
            onChange={(e)=>fetchData2(e.target.value)}/> 
            <button className="bttn">Logout</button>
            <span>Cart</span>
            {/* <span>Cart</span>
            <span>Cart</span> */}

        </div></div>
<div className="row">
        <div className="col-lg-2 left"><div className="left-content"><h3>Search mobiles</h3><p>redmi</p><p>realme</p><p>iphone</p></div></div>
        <div className="col-lg-10 right">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mt-4">
       
        {
      
      data.map((input)=>{
        // return <Cart cartitems={cartitems} data={input} handleAddtoCart={handleAddtoCart} />
        return <Cart  data={input} />

      })
     }
       
      </div></div> </div>

      </>
    );
  }
  
  export default Home;