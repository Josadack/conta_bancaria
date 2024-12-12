import readlinesync = require('readline-sync')
import { colors } from './src/util/Cores'
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';


export function main(){

    let opcao: number;

    //Cria instancia
    const c1 = new Conta(1, 123, 1, "Jonas", 10000);
    c1.visualizar();
    console.log(c1.sacar(20000.00));
    c1.visualizar();

    const c2 = new Conta(2, 123, 1, "Aline", 20000);
    c2.visualizar();
    c2.despositar(100.00);
    c2.visualizar();
    console.log("");
    
    //Contas Correntes
    const cc1 = new ContaCorrente(3, 789, 1, "Josadaque", 100000, 1000)
    cc1.visualizar();
    console.log("");
    //Sacar Conta corrente 
    cc1.sacar(100500);
    cc1.visualizar();
    //Depositar Conta corrente 
    cc1.despositar(2000);
    cc1.visualizar();

    console.log("");

    //Contas Poupança
    const cp1 = new ContaPoupanca(4, 879, 2, "Carlos", 50000, 9);
    //Despositar
    cp1.despositar(500);
    cp1.visualizar();
    //Sacar
    cp1.sacar(50501);
    cp1.visualizar();

    console.log("");

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
        console.log("         9 - Sair                               ")
        console.log("                                     ")
        
        
        console.log(colors.fg.yellowstrong,"Entre com a opção desejada: ", colors.reset)
        console.log(colors.fg.red), opcao = readlinesync.questionInt("") , console.log(colors.reset)

        if(opcao === 9){
            console.log(colors.fg.cyan,"       \nBanco JFS - Investindo no seu amanhã.")
            about();
            process.exit();
        }

        switch(opcao){
            case 1:
                console.log("\n\nCriar Conta\n\n")
            break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

            break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

            break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

            break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

            break;
            case 6:
                console.log("\n\nSaque\n\n");

            break;
            case 7:
                console.log("\n\nDepósito\n\n");

            break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

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
    console.log(colors.fg.red,"Josadaque Ferreira ")
    console.log(colors.fg.gray,"github.com/josadack ")
    console.log("************************************************",colors.reset)
}
 
main();