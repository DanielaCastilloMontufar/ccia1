import React, { useEffect, useState } from "react";

const EdadCamara = () => {

    useEffect(() => {
        calculateEdad()
    }, [])
    
    const [year, setYear] = useState("")

    const calculateEdad = () => {
        const year = new Date().getFullYear()
        setYear(year - 1887)
    }

    return (
        <p class="years-home">
            <span class="year-num">{year}</span>
            <span class="year-str">años</span>
        </p>
    )
}

export default EdadCamara