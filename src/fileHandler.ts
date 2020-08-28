import { Console } from "./console";
import { ActionList } from "./actionsList"
import { runInThisContext } from "vm";

let fileHandlerActions = [
    "-----------------------",
    "1. List JSON keys",
    "2. Show JSON key value",
    "3. Show all JSON file",
    "4. Return to Main Menu",
    "-----------------------"
]

export class FileHandler {
    file;
    action;
    constructor(file) {
        this.file = file;
    }
    FileHandlerListActions() {
        for (var i = 0; i < fileHandlerActions.length; i++) {
            console.log('\x1b[36m%s\x1b[0m', fileHandlerActions[i]);
        }
        this.action = new Console().ReadInput("Choose the FileHandler option and type the number of your choice: ");

        switch (this.action) {
            case "1":
                this.ListJSONKeys();
                this.FileHandlerListActions();
                break;
            case "2":
                let value = new Console().ReadInput("Enter value: ")
                this.ShowJSONValue(value);
                this.FileHandlerListActions();
                break;
            case "3":
                this.ShowAllFile();
                this.FileHandlerListActions();
                break;
            case "4":
                this.Return();
                break;
            default:
                console.log('\x1b[31m%s\x1b[0m', "\nUnknown command!\n");
                this.FileHandlerListActions();
        }
    };
    async ListJSONKeys() {
        let parsed = JSON.parse(this.file);
        await console.log('\x1b[32m%s\x1b[0m', "\nJson has the following keys:\n", Object.keys(parsed));
    };
    async ShowJSONValue(value: string) {
        await console.log('\x1b[32m%s\x1b[0m', `\nThe "${value}" key has "${JSON.parse(this.file)[value]}" value\n`);
    };
    async ShowAllFile() {
        await console.log('\x1b[32m%s\x1b[0m', "\nThe whole Json is:\n", this.file);
    }
    async Return() {
        ActionList();
    }
}