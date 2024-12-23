
export abstract class Conta{

    //Modelo de dados
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;


    //Geramos os metodo construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //Gerar os Métodos Getters e Setter
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}
    
    //Sacar
    public sacar(valor: number):boolean{

        if(valor > this._saldo){
            console.log("Saldo Insulficiente!")
            return false
        }

        this._saldo -= valor
        return true;
    }

    public despositar(valor: number){
        this._saldo += valor;
    }

    public visualizar(){
        let tipo: string;
        switch(this._tipo){
            case 1: 
            tipo = "Contato Corrente"
            break;

            case 2:
                tipo = "Conta Poupança"
            break;
            default:
                tipo = "Tipo Inválido"
        }
        console.log("************************************")
        console.log("Dados da Conta")
        console.log("************************************")
        console.log(`Numero da conta: ${this._numero}`)
        console.log(`Número da Agência: ${this._agencia}`)
        console.log(`Tipo da conta: ${tipo}`)
        console.log(`Nome do Titular da conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo}`)
    }

}