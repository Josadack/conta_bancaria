import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    

    //coleção Array que avai armazenar os objetos
    private listacontas = new Array<Conta>();

    //Para controlar os nuemros das contas
    public numero: number = 0;
    
    procurarPorNumero(numero: number): void {
       const buscaConta = this.buscaNoArray(numero);

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
        const buscaConta = this.buscaNoArray(conta.numero);

       if(buscaConta !== null){
            this.listacontas[this.listacontas.indexOf(buscaConta)] = conta;
            console.log("A Conta foi atualizada com sucesso!");
        
       }else{
        console.log("\nConta não encontrada")
       }
        
    }

    deletar(numero: number): void {
        const buscaConta = this.buscaNoArray(numero);

        if(buscaConta !== null){
             this.listacontas.splice(this.listacontas.indexOf(buscaConta), 1)
             console.log("A Conta foi Deletada com sucesso!");
           
         
        }else{
         console.log("\nConta não encontrada")
        }
    }
    procuraPorTitular(titular: string): void {
        //filtragem de dados
       let buscaPorTitular =this.listacontas.filter(conta => 
          conta.titular.toUpperCase().includes(titular.toUpperCase())
       )

       //Listagem  dos dados
       buscaPorTitular.forEach(conta => conta.visualizar() );
    }

    //Métodos Bancários
    sacar(numero: number, valor: number): void {
       
        const buscaConta = this.buscaNoArray(numero);

        if(buscaConta !== null){
             if(buscaConta.sacar(valor) === true)
                console.log("O saque foi efuato com sucesso!")
         
        }else{
         console.log("\nConta não encontrada")
        }
    }

    depositar(numero: number, valor: number): void {

        const buscaConta = this.buscaNoArray(numero);

        if(buscaConta !== null){
             buscaConta.despositar(valor)
                console.log("O Deposito foi efutuado com sucesso!")
         
        }else{
         console.log("\nConta não encontrada")
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor:number): void {

        const contaOrigem = this.buscaNoArray(numeroOrigem);
        const contaDestino = this.buscaNoArray(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null){
             if(contaOrigem.sacar(valor) === true){
                contaDestino.despositar(valor)
                console.log("Conta Transferencia foi efutada")
             }
         
        }else{
         console.log("\nConta não encontrada")
        }

    }

    //Método auxiliares
    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscaNoArray(numero: number): Conta | null{
        for(let conta of this.listacontas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
}
