const fs = require('fs')

export class FileReader {
    async ListFiles() {
        console.log('\x1b[32m%s\x1b[0m', "List of files:\n");
        fs.readdirSync("./files/").forEach(file => {
            console.log('\x1b[36m%s\x1b[0m', file);
        });
        console.log('\x1b[32m%s\x1b[0m', "\nThe end of files list")
    };
    async OpenFile(fileName: string):Promise<string> {
        return fs.readFileSync(`./files/${fileName}`, 'utf8');
    };
}