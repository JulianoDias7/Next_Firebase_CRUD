import React from "react";

interface EntradaProps{
    tipo?: 'text' | 'number'
    texto : string
    valor : any
    somenteLeitura?: boolean
    valorMudou?: ( valor:any ) => void

}

export default function Entrada(props:EntradaProps ){

    return(
        <div className="flex flex-col">
            <label className="mb-1">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'} 
                    value={props.valor}  
                    readOnly={props.somenteLeitura}
                    onChange={(e) => {props.valorMudou?.(e.target.value)}}
                    className={`
                        border border-purple-500 rounded-lg 
                        focus:outline-none px-4 py-2 mb-3
                        ${props.somenteLeitura ? 'bg-gray-200' : 'focus:bg-white' }
                        
                    `}
                    />
        </div>
    )
}