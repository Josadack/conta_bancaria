import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    //coleção Array que avai armazenar os objetos
    private listacontas = new Array<Conta>();

    //Para controlar os nuemros das contas
    public numero: number = 0;
    
    procurarPorNumero(numero: number): void {
       const buscaConta = this.buscarNoArray(numero);

       if(buscaConta !== null){
          buscaConta?.visualizar();
        
       }else{
        console.log("\nConta não encontrada")
       }
       
    }
    listarTodas(): void {
        for(let conta of this.listacontas){
            conta.visualizar();
        }

    }

    cadastrar(conta: Conta): void {
        this.listacontas.push(conta)
        console.log("Conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

       if(buscaConta !== null){
            this.listacontas[this.listacontas.indexOf(buscaConta)] = conta;
            console.log("A Conta foi atualizada com sucesso!");
          //buscaConta?.visualizar();
        
       }else{
        console.log("\nConta não encontrada")
       }
        
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
             this.listacontas.splice(this.listacontas.indexOf(buscaConta), 1)
             console.log("A Conta foi Deletada com sucesso!");
           
         
        }else{
         console.log("\nConta não encontrada")
        }
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number): void {
        throw new Error("Method not implemented.");
    }

    //Método auxiliares
    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for(let conta of this.listacontas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
}