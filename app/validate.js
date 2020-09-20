const allowed = [
  'transportation-method',
  'transportationMethod',
  'distance',
  'unit-of-distance',
  'unitOfDistance',
  'output'
];

exports.commands = require('yargs')
  .options({
    'transportation-method': {
      demandOption: true,
      describe: 'A String value indicating transportation method',
      type: 'string'
    }
  })
  .options({
    'distance': {
      demandOption: true,
      describe: 'A String value indicating transportation method',
      type: 'number'
    }
  })
  .options({
    'unit-of-distance': {
      default: 'km',
      choices: ['km', 'm'],
      describe: 'The Unit of input distance in either km or m',
      type: 'string'
    }
  })
  .options({
    'output': {
      default: 'kg',
      choices: ['kg', 'g'],
      describe: 'The Unit of CO2 in output kg or g',
      type: 'string'
    }
  })
  .check((argv) => {
    //checks only flags are passed, no commands are allowed as input.
    const additionalargs = argv._
    if (additionalargs.length > 0) {
      throw new Error("invalid command found.")
    };
    return true;
  })
  .check((argv) => {
    const transportationMethod = argv['transportation-method'];
    const distance = argv['distance'];

    if (transportationMethod === '') {
      throw new Error(" argument passed to --transportation-method flag is empty string");
    };
    if (!(typeof distance === 'number')) {
      throw new Error(" argument passed to --distance flag is not a number")
    };
    return true;
  })
  .check((argv) => {
    //checks the passed flags is a subset of previously set allowd flag.
    const passedArgs = Object.keys(argv).filter(el => (el !== '_' && el !== '$0'));
    const isAllowed = passedArgs.every(val => allowed.includes(val));
    if (!isAllowed) {
      throw new Error("unidentified arguments passed.")
    };
    return true;
  });