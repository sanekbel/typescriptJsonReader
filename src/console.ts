const prompt = require('prompt-sync')();

export class Console {
    public ReadInput(question: string):string {
        return prompt(question);
    }
}
