import { Console } from "./console"
import { FileReader } from "./fileReader"
import { FileHandler } from "./fileHandler";

let actions = [
    "1. List files in working directory",
    "2. Open file by name",
    "3. Quit app"
]
export function ActionList() {
    let action;
    let file;

    ListActions();

    function ListActions() {
        for (var i = 0; i < actions.length; i++) {
            console.log(actions[i])
        }
        action = new Console().ReadInput("Choose the Main option and type the number of your choice ");

        switch (Number(action)) {
            case 1:
                let x = new FileReader().ListFiles();
                x.then(function () {
                    ListActions()
                });
                break;
            case 2:
                let fileName = new Console().ReadInput("Enter filename ");
                console.log("check 1");
                let fileReader = new FileReader().OpenFile(fileName);                
                console.log("check2")
                fileReader.then(function (data) {
                    console.log("File is opened");
                    file = data;
                })
                    .then(() => {
                        let fileHanlder = new FileHandler(file)
                        fileHanlder.FileHandlerListActions();
                    });
                break;
            case 3:
                process.exit();
            default:
                ListActions();
        }
    }
}