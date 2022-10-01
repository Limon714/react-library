import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Axios = () => {
  const [mydata, setmydata] = useState([])
  const [err, setError] =useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setmydata(res.data))
      .catch((error) => setError(error.message) )
      
  },[])
  return (
    <>
      <h1>Hello Axios</h1>
      {err !== "" && <h1>{err}</h1>}
      <div className='grid'>
        {mydata.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 10).toUpperCase()}</h2>
              <h4>{body.slice(0, 100)}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Axios