import React from "react"

export default function Titulo(props){

    return(
        <div className="flex flex-col justify-center text-center">
            <h1 className="text-4xl px-5 py-2">{props.children}</h1>
            <hr className="border-2 border-purple-500"/>
        </div>
        
        
    )
}