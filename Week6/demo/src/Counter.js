import React, { useState, useEffect } from "react";






export default function Counter() {
    const [count, setCount] = useState[0];
    useEffect(() => {
        setCount(count + 1)
    }, [count]);
    return (
        <>
            <p>{count}</p>
            {/* <button onclick = ()=>{} */}
        </>
    )
}


