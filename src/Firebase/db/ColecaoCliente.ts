import Cliente from "../../core/Cliente";
import db from "../config";
import ClienteRepo from "../../core/ClienteRepo";
import { getFirestore, collection, doc, setDoc, deleteDoc, getDocs, query, DocumentData, DocumentSnapshot, SnapshotOptions, CollectionReference, updateDoc } from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepo {

    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: DocumentSnapshot<DocumentData>, options: SnapshotOptions): Cliente {
            const data = snapshot.data(options);
            return new Cliente(data?.nome || '', data?.idade || 0, snapshot.id);
        }
    }
    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            const docRef = doc(db, 'Clientes', cliente.id)
            await updateDoc(docRef, {
                nome: cliente.nome,
                idade: cliente.idade
            })

        } else {
            const novoDocRef = doc(collection(db, "Clientes"))
            await setDoc(novoDocRef, {
                nome: cliente.nome,
                idade: cliente.idade
            })
            cliente.id = novoDocRef.id
        }
        return cliente

    }
    async excluir(cliente: Cliente): Promise<void> {
        const docRef = doc(db, "Clientes", cliente.id)
        await deleteDoc(docRef)
    }
    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.colecao())
        return querySnapshot.docs.map((doc) => doc.data())
    }

    private colecao(): CollectionReference<Cliente> {
        return collection(db, 'Clientes').withConverter(this.conversor)
    }


}