const input = require('../validate');
const emissonCalculator = require('../calculator');
const emissionList = require('../data');


test('Functional requirement 1', () => {
  const case1 = ['--transportation-method',
    'medium-diesel-car',
    '--distance',
    '15',
    '--unit-of-distance',
    'Km'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then(result => {
    expect(result).toBe('Your trip caused 2.6Kg of CO2-equivalent.');
  });
});


test('Functional requirement 2', () => {
  const case1 = ['--transportation-method',
    'large-petrol-car',
    '--distance',
    '1800.5'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then(result => {
    expect(result).toBe('Your trip caused 507.7Kg of CO2-equivalent.');
  });
});

test('Functional requirement 3', () => {
  const case1 = ['--transportation-method',
    'train',
    '--distance',
    '14500',
    '--unit-of-distance',
    'm',
    '--output',
    'g'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then(result => {
    expect(result).toBe('Your trip caused 87g of CO2-equivalent.');
  });
});

test('Functional requirement 4', () => {
  const case1 = ['--transportation-method',
    'train',
    '--distance',
    '14500',
    '--unit-of-distance',
    'm',
    '--output',
    'Kg'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then(result => {
    expect(result).toBe('Your trip caused 0.1Kg of CO2-equivalent.');
  });
});

test('Functional requirement 5', () => {
  const case1 = ['--transportation-method',
    'medium-diesel-car',
    '--distance',
    '15',
    '--unit-of-distance',
    'Km'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  emisson.calculate().then(result => {
    expect(result).toBe('Your trip caused 2.6Kg of CO2-equivalent.');
  });
});


it('Transportation method not found', async () => {
  const case1 = ['--transportation-method',
    'somemethod',
    '--distance',
    '15',
    '--unit-of-distance',
    'Km'
  ];
  const validInput = input.commands.parse(case1);
  const emisson = new emissonCalculator(validInput);
  const data = emissionList.data;
  await expect(emisson.fetchRate(data,emisson.vehicle))
        .rejects.toEqual('The vehicle not found in data list.');
});

