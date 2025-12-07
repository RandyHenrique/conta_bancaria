import readlineSync from "readline-sync";
import { Colors } from "./util/Colors";

export class Menu {
  iniciar(): void {
    let opcao: string = "";

    do {
      console.clear();
      console.log(Colors.FgYellow + "*************************************************************" + Colors.Reset);
      console.log(Colors.FgYellow + "                    BANCO DO BRAZIL COM Z                   " + Colors.Reset);
      console.log(Colors.FgYellow + "*************************************************************" + Colors.Reset);

      console.log("\n");
      console.log("  1 - Criar Conta");
      console.log("  2 - Listar todas as Contas");
      console.log("  3 - Buscar Conta por Numero");
      console.log("  4 - Atualizar Dados da Conta");
      console.log("  5 - Apagar Conta");
      console.log("  6 - Sacar");
      console.log("  7 - Depositar");
      console.log("  8 - Transferir valores entre Contas");
      console.log("  9 - Sair");
      console.log("\n");

      console.log(Colors.FgYellow + "*************************************************************" + Colors.Reset);
      opcao = readlineSync.question("\nEntre com a opção desejada: ").trim();

      switch (opcao) {
        case "1":
          console.log("\n==> Criar Conta");
          break;
        case "2":
          console.log("\n==> Listar Contas");
          break;
        case "3":
          console.log("\n==> Buscar Conta por Número");
          break;
        case "4":
          console.log("\n==> Atualizar Conta");
          break;
        case "5":
          console.log("\n==> Apagar Conta");
          break;
        case "6":
          console.log("\n==> Sacar");
          break;
        case "7":
          console.log("\n==> Depositar");
          break;
        case "8":
          console.log("\n==> Transferir Valores");
          break;
        case "9":
          console.log("\nSaindo... Até logo!");
          break;
        default:
          console.log("\nOpção inválida. Tente novamente.");
      }

      if (opcao !== "9") readlineSync.question("\nPressione ENTER para continuar...");

    } while (opcao !== "9");
  }
}

new Menu().iniciar();
