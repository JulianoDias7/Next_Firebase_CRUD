import Tabela from "../components/Tabela";
import Layout from "../components/Layout";
import React from "react";
import useCliente from "../hooks/useClientes";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";


export default function Home() {

const {NovoCliente, SalvarCliente, SelecionarCliente, ExcluirCliente, cliente, clientes, tabelaVisivel, exibeTabela} = useCliente()


  return (
    <div className={` flex justify-center items-center 
        bg-gradient-to-r 
      from-blue-300 to-purple-500 
      text-amber-50 h-screen`}>

      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="red" onClick={NovoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} ClienteSelecionado={SelecionarCliente} ClienteExcluido={ExcluirCliente} />
          </>) :
          <Formulario
            cliente={cliente}
            clienteMudou={SalvarCliente}
            cancelado={exibeTabela} />}
            


      </Layout>
    </div>
  );
}
