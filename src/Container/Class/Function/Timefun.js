import React, { useEffect, useState } from 'react'

export default function Timefun() {
    // 1.  Mounting
    const [time,settime] = useState(new Date());
         

      // 4. did update
   const tick = () => {
       settime(new Date());
    } 
    useEffect(() => {
      // 3. did Mounting
      const timeRef = setInterval(tick(),1000)
        // const curranttime = setInterval(()=>{
        //     settime(new Date());
        // },1000);


        // 5. will unmount
        return() =>{
          clearInterval(timeRef)
        }
    },[])
  return (
    <div>
      {/* 2. randering */}
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}
