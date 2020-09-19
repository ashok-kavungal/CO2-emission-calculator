const emissonCalculator = require('./calculator');
const input = require('./validate');

if(input.commands){
    (async () => {
        const validInput = input.commands.argv;
        const emisson = new emissonCalculator(validInput);
        const finalresult = await emisson.calculate();
        console.log(finalresult)
    })().catch(err => {
        console.error(err);
    });   
}
