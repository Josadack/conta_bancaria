import readlinesync = require('readline-sync')
import { colors } from './util/Cores'


export function main(){

    let opcao: number;
    
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