# Next.js CRUD com Firebase e TypeScript

<div align='center'>

<img src="https://img.shields.io/badge/Next.js-15.0+-black?style=for-the-badge&logo=next.js"/>
  
<img src="https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript"/>
  
<img src="https://img.shields.io/badge/Firebase-10.0+-orange?style=for-the-badge&logo=firebase"/>
</div>



**Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) desenvolvida com ***Next.js***, ***Firebase*** (Firestore) e ***TypeScript***. Ele demonstra como integrar o Firebase ao Next.js para criar operações básicas de banco de dados em tempo real.**

## Funcionalidades

- **Create**: Adicionar novos registros ao Firestore.
- **Read**: Listar todos os registros do Firestore.
- **Update**: Editar registros existentes.
- **Delete**: Remover registros do Firestore.
- **Autenticação**: Integração com Firebase Authentication (opcional).
- **TypeScript**: Tipagem estática para maior segurança e produtividade.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- <a href="https://nodejs.org/">![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js&style=for-the-badge)</a>
- ![npm](https://img.shields.io/badge/npm-v9%2B-blue?logo=npm&style=for-the-badge) ou ![Yarn](https://img.shields.io/badge/Yarn-v1.22%2B-blue?logo=yarn&style=for-the-badge)


## Como configurar o projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/JulianoDias7/Next_Firebase_CRUD.git
   cd Next_Firebase_CRUD
2. **Instale as dependências:**
    ```bash
     npm install
3. **Configuração do Firebase:**
    [Console do Firebase](https://console.firebase.google.com/)\
       <sub>Crie um novo projeto ou use um existente.</sub>\
       <sub> Selecione WEB</sub>\
       <br>
       ![image](https://github.com/user-attachments/assets/47177df2-66c6-4e34-8d5a-65591e998d75)
       <br>
       <sub>Registre o APP com o nome que você preferir</sub>\
       <br>
       <sub>Copie as credenciais do Firebase (configuração do SDK).</sub>\
       <br>
       ![image](https://github.com/user-attachments/assets/30264a0e-85a4-4564-a79b-2afe494bd7ef)
       <br>
       <sub>Selecione Criação > FireStore Database > Criar banco de dados</sub>
       <br>
       ![image](https://github.com/user-attachments/assets/83158a43-1b4d-48df-bedd-aea8cc5b070a)
       <br>
       <sub>Proximo</sub>
       <br>
       <img src="https://github.com/user-attachments/assets/012f0a66-1dbf-427f-a617-72414dedc374" style="width: 700px; height: auto;" />
       <br>
       <sub>Selecione "Modo de Teste" > Criar</sub>



## Crie um arquivo .env.local:

4. **Na raiz do projeto, crie um arquivo .env.local e adicione as credenciais do Firebase:**

>env.local
```
NEXT_PUBLIC_FIREBASE_API_KEY = suaAPIkey
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = seuAuthDomain
NEXT_PUBLIC_FIREBASE_PROJECT_ID = seuProjectID

# Adicionar endereços sem aspas
# Nota: Nunca compartilhe ou faça commit do arquivo .env.local. Ele deve ser adicionado ao .gitignore.
```
5. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```


