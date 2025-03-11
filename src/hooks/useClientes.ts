import Cliente from "../core/Cliente"
import ClienteRepo from "../core/ClienteRepo"
import ColecaoCliente from "../Firebase/db/ColecaoCliente"
import { useState, useEffect } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useCliente(){

    const repo: ClienteRepo = new ColecaoCliente()
    const {exibeForm,exibeTabela, tabelaVisivel} = useTabelaOuForm()


    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
   useEffect(()=> { ObterTodos}, [])
    
    
    
    
     async function ObterTodos(){
     await repo.obterTodos().then((clientes) => {
        setClientes(clientes)
        exibeTabela()
      })
     }
   
    
      function SelecionarCliente(cliente: Cliente) {
        exibeForm()
        setCliente(cliente)
        
    
      }
    
      async function ExcluirCliente(cliente: Cliente) {
       await repo.excluir(cliente)
        ObterTodos()
    
      }
    
      async function SalvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        ObterTodos()
      }
    
      function NovoCliente(){
        exibeForm()
        setCliente(Cliente.vazio())
      } 

      return{
        cliente,
        clientes,
        tabelaVisivel,
        exibeTabela,
        NovoCliente,
        SalvarCliente,
        ExcluirCliente,
        SelecionarCliente,
        ObterTodos,
        
        
      }
}