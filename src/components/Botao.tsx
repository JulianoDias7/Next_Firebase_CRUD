import React from "react";

interface BotaoProps{
    cor?: 'green' | 'blue' | 'red'
    children?: any
    onClick?: () => void
}

export default function Botao(props:BotaoProps) {
    const cor = props.cor ?? 'green'
    return(

        <button className={`bg-gradient-to-r from-blue-400 to-purple-600
         text-gray-50 p-4 m-2 rounded-2xl`} onClick={props.onClick}>
            {props.children}
        </button>
    )

}