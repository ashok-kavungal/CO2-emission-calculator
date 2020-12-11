const emissonCalculator = require('./calculator');
const input = require('./cli');

if (input.commands) {
  (async () => {
    const validInput = input.commands.argv;
    const emisson = new emissonCalculator(validInput);
    const finalResult = await emisson.calculate();
    console.log(finalResult);
  })().catch((err) => {
    console.error(err);
  });
}
