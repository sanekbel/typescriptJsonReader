const fs = require('fs')

export class FileReader {
    async ListFiles() {
        console.log("List of files:");
        fs.readdirSync("./src/files/").forEach(file => {
            console.log(file);
        });
    };
    async OpenFile(fileName: string):Promise<string> {
        return fs.readFileSync(`./src/files/${fileName}`, 'utf8');
    };
}