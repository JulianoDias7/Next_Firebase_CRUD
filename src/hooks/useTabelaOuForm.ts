import { useState } from "react";

export default function useTabelaOuForm(){
const [visivel, setVisivel] = useState< 'tabela' | 'form' >('tabela')

const exibeTabela= () => setVisivel('tabela')
const exibeForm = () => setVisivel('form')

return{
    tabelaVisivel: visivel === 'tabela',
    formVisivel: visivel ==='form',
    exibeTabela,
    exibeForm,


}

}