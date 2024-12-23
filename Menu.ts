import readlinesync = require('readline-sync')
import { colors } from './src/util/Cores'
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';


export function main(){

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular:string;

    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Criando um objeto da classe contacontroller
    const contas = new ContaController();

   //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    while(true){

        console.log(colors.fg.red,
            "\n**************************************************")
        console.log("                                     ")                             
        console.log(colors.fg.cyanstrong,
                "               BANCO JFS                ")
        console.log(colors.fg.red,
                "                                    ")
        console.log("************************************************")
        console.log("                                     ")
        console.log("         1 - Criar Conta              ")
        console.log("         2 - Listar Todas as Contas             ")
        console.log("         3 - Buscar Conta por Numero            ")
        console.log("         4 - Atulizar Dados da Conta            ")
        console.log("         5 - Apagar Conta                       ")
        console.log("         6 - Sacar                              ")
        console.log("         7 - Depositar                          ")
        console.log("         8 - Transferir valores entre Contas   ")
        console.log("         9 - Buscar Conta por titular                              ")
        console.log("         0 - Sair                               ")
        console.log("                                     ")
        
        
        console.log(colors.fg.yellowstrong,"Entre com a opção desejada: ", colors.reset)
        console.log(colors.fg.red), opcao = readlinesync.questionInt("") , console.log(colors.reset)

        if(opcao === 0){
            console.log(colors.fg.cyan,"       \nBanco JFS - Investindo no seu amanhã.")
            about();
            process.exit();
        }

        switch(opcao){
            case 1:
                console.log("Digite o numero da agencia")
                agencia = readlinesync.questionInt('');

                console.log("Digite o nome do titular")
                titular = readlinesync.question('');

                console.log("Escolha o tipo da Conta")
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log("Digite o Saldo da Conta")
                saldo = readlinesync.questionFloat('');

                switch(tipo){
                    case 1:
                        console.log("Digite o limite da Conta")
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break;
                    case 2:
                        console.log("Digite o dia do aniversario da poupança")
                       aniversario = readlinesync.questionInt('');
                       contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break;
                }

            keyPress();
            break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();

            keyPress();
            break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero);

            keyPress();
            break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt('');

                let conta = contas.buscaNoArray(numero);

                if(conta !== null){

                    console.log("Digite o novo numero da agencia")
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o novo nome do titular")
                    titular = readlinesync.question('');

                    console.log("Digite o novo Saldo da Conta")
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;
                    switch(tipo){
                        case 1:
                            console.log("Digite o novo limite da Conta")
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break;
                        case 2:
                            console.log("Digite o novo dia do aniversario da poupança")
                            aniversario = readlinesync.questionInt('');
                           contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break;
                    }
            }else{
                console.log("conta não encontrada!")
            }

            keyPress();
            break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);


            keyPress();
            break;
            case 6:

               console.log("\n\nSaque\n\n");

               console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt('');


                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat('');

                contas.sacar(numero, valor);

                
            keyPress();
            break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt('');


                console.log("Digite o valor do deposito: ");
                valor = readlinesync.questionFloat('');

                contas.depositar(numero, valor);
            keyPress();
            break;

            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o numero da conta origem : ");
                numero = readlinesync.questionInt('');

                console.log("Digite o numero da conta destino: ");
                numeroDestino = readlinesync.questionInt('');


                console.log("Digite o valor do deposito: ");
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor);

            break;
            case 9:
                console.log("\n\nConsulta pelo titular da Contas\n\n");
                
                console.log("\n\nDigite o nome do titular\n\n");
                titular = readlinesync.question('')

                contas.procurarPorTitular(titular);

                keyPress();
                break;
                
            default:
                console.log(colors.bg.white,colors.fg.red,"\nOPÇÃO INVÁLIDA!",colors.reset)
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
export function about(): void{

    console.log(colors.fg.gray,"************************************************")
    console.log(" Desenvolvido por: ")
    console.log(colors.fg.redstrong,"Josadaque Ferreira ")
    console.log(colors.fg.gray,"github.com/josadack ")
    console.log("************************************************",colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
 
main();