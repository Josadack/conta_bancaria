import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    
    private _limite: number;

    constructor(
        numero: number,
        agencia: number,
        tipo: number,
        titular: string, 
        saldo: number, 
        limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }
    
    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

//Particularidade de Conta Corrente
  public sacar(valor: number):boolean{

        if(valor > this.saldo + this._limite){
            console.log("Saldo Insulficiente!")
            return false
        }

        this.saldo -= valor
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: ${this._limite}`)
}
}