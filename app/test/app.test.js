const input = require('../cli');
const emissonCalculator = require('../calculator');
const emissionList = require('../data');

test('Calculated the emmision for input command', () => {
  //functional requirement 1
  const args = [
    '--transportation-method',
    'medium-diesel-car',
    '--distance',
    '15',
    '--unit-of-distance',
    'km',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then((result) => {
    expect(result).toBe('Your trip caused 2.6kg of CO2-equivalent.');
  });
});

test('Unit of Distance is Km and output is Kg by Default', () => {
  //Functional requirement 2
  const args = [
    '--transportation-method',
    'large-petrol-car',
    '--distance',
    '1800.5',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then((result) => {
    expect(result).toBe('Your trip caused 507.7kg of CO2-equivalent.');
  });
});

test('Unit of Distance and output can be changed by using flags', () => {
  //Functional requirement 3
  const args = [
    '--transportation-method',
    'train',
    '--distance',
    '14500',
    '--unit-of-distance',
    'm',
    '--output',
    'g',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then((result) => {
    expect(result).toBe('Your trip caused 87g of CO2-equivalent.');
  });
});

test('calculation logic works for unit of distance in meters and output unit in Kg', () => {
  //functional requirement 4
  const args = [
    '--transportation-method',
    'train',
    '--distance',
    '14500',
    '--unit-of-distance',
    'm',
    '--output',
    'kg',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then((result) => {
    expect(result).toBe('Your trip caused 0.1kg of CO2-equivalent.');
  });
});

test('calculation logic works for unit of distance in Km and output unit in grams', () => {
  const args = [
    '--transportation-method',
    'medium-diesel-car',
    '--distance',
    '15',
    '--unit-of-distance',
    'km',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then((result) => {
    expect(result).toBe('Your trip caused 2.6kg of CO2-equivalent.');
  });
});

it('ouputs vehicle not found, if didnt found in data.json file', async () => {
  const args = [
    '--transportation-method',
    'somemethod',
    '--distance',
    '15',
    '--unit-of-distance',
    'km',
  ];
  const validInput = input.commands.parse(args);
  const emisson = new emissonCalculator(validInput);
  const data = emissionList.data;
  await expect(emisson.fetchRate(data, emisson.vehicle)).rejects.toEqual(
    'The vehicle not found in data list.'
  );
});
