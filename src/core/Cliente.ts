export default class Cliente {
    [x: string]: any;
    
    
    id: string;
    nome: string;
    idade: number;

    constructor(nome: string = '', idade: number = 0, id: string = null) {
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }
    static vazio(): Cliente {
        return new Cliente()
    }
    get getId() {

        return this.id;
    }

    get getNome() {

        return this.nome;
    }

    get getIdade() {

        return this.idade;
    }


    
}
