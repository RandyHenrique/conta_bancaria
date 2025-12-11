import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaController } from "./src/controlador/ContaController";
import { ContaCorrente } from "./src/modelo/ContaCorrente";
import { ContaPoupanca } from "./src/modelo/ContaPoupanca";

export function main() {
    let contas: ContaController = new ContaController();
    let opcao, numero, agencia, saldo, limite, titular, tipo, aniversario: number;
    const tiposContas = ["Conta Corrente", "Conta Poupança"];

    

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o número da Agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false});

                console.log("\nDigite o saldo da conta(R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta(R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar( new ContaCorrente(
                            contas.gerarNumeroConta(),
                            agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da conta poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar( new ContaPoupanca(
                            contas.gerarNumeroConta(),
                            agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Randerson Henrique - randerson.henrique4@gmail.com");
    console.log("github.com/RandyHenrique");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();