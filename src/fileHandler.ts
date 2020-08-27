import { Console } from "./console";
import { ActionList } from "./actionsList"

let fileHandlerActions = [
    "1. List JSON keys",
    "2. Show JSON key value",
    "3. Show all JSON file",
    "4. Return to Main Menu"
]

export class FileHandler {
    file;
    action;
    constructor(file) {
        this.file = file;
    }
    FileHandlerListActions() {
        for (var i = 0; i < fileHandlerActions.length; i++) {
            console.log(fileHandlerActions[i]);
        }
        this.action = new Console().ReadInput("Choose the Main option and type the number of your choice ");

        switch (this.action) {
            case "1":
                this.ListJSONKeys();
                this.FileHandlerListActions();
                break;
            case "2":
                let value = new Console().ReadInput("Enter value ")
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
        }
    };
    async ListJSONKeys() {
        let parsed = JSON.parse(this.file);
        await console.log(Object.keys(parsed));
    };
    async ShowJSONValue(value: string) {
        await console.log(`The ${value} key has ${JSON.parse(this.file)[value]} value`);
    };
    async ShowAllFile() {
        await console.log(this.file);
    }
    async Return() {
        ActionList();
    }
}