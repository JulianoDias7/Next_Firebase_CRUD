import Cliente from "../core/Cliente";
import React from "react";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {

    clientes: Cliente[]
    ClienteSelecionado?: (clientes: Cliente) => void
    ClienteExcluido?: (clientes: Cliente) => void


}

export default function Tabela(props: TabelaProps) {
    const ExibirAcoes = props.ClienteSelecionado && props.ClienteExcluido 

    


    function renderizarCliente() {
        return props.clientes.map((Cliente, i) => {
            return (
                <tr key={Cliente.getId}
                    className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-blue-100'}`}>
                    <td className="text-left p-4">{Cliente.getNome}</td>
                    <td className="text-left p-4">{Cliente.getIdade}</td>
                    <td className="text-left p-4">{Cliente.getId}</td>
                    {ExibirAcoes ? renderizarFucoes(Cliente) : false}

                </tr>
            )
        })
    }



    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">Id</th>
                {ExibirAcoes ? (<th className="text-center p-4">Ações</th>) : false}

            </tr>

        )
    }
    function renderizarFucoes(clientes: Cliente) {
        return (
            
            <td className="text-center p-4 m-1">
                {props.ClienteSelecionado ? (<button onClick={() => props.ClienteSelecionado?.(clientes)} className="m-2 p-2 rounded-4xl hover:bg-cyan-100 text-green-600">
                    {IconeEdicao()}
                </button>) : false}
                {props.ClienteExcluido ? (<button onClick={() => props.ClienteExcluido?.(clientes)} className="m-2 p-2 rounded-4xl hover:bg-cyan-100 text-red-600">
                    {IconeLixo()}
                </button>) : false}

            </td>

        )

    }
        
    return (
        

        <table className="w-full rounded-2xl overflow-hidden ">
            <thead className="bg-gradient-to-r from-purple-500 to-blue-300 text-gray-100 ">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarCliente()}
            </tbody>
        </table>
    )
}