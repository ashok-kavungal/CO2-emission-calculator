# CO2 emission calculator (Development Challenge)


Description
=======

A command line tool build using [node.js](https://nodejs.org/en/) that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation method.The project uses [yargs](http://yargs.js.org/) for parsing the CLI commands and [jest](https://jestjs.io/en/) for writing unit tests. 


## Usage


Init project:
```
$ cd AssignmentTask
$ npm install
```
## Launch

```
$ cd AssignmentTask/app
$ node co2-calculator.js --exampleflag1 flag1 --exampleflag2 arg2 --exampleflag3 sample3
```

## Allowed flags and argument types


**-- transportation-method**  - The flag accepts a string representing the transportation method.<br>

**-- distance**  - The flag accepts a number indicating the distance. <br>

**-- unit-of-distance**  - By default the app uses the unit of distance is Km (kilometers) if not set externaly. This falg allows user to sets the unit of distance.The accepted arguments are 'Km'-(kilometers) and 'm'-(meters).<br>

**-- output**  - The flag tells the app in which unit should the output be printed. By default the unit of output is 'Kg'. The accepted arguments are 'Kg'-(kilogram) and 'g'-(gram)<br>


## Examples of using command and expected results


```bash

$ ./co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
Your trip caused 2.6kg of CO2-equivalent.

$ ./co2-calculator --distance 1800.5 --transportation-method large-petrol-car
Your trip caused 507.7kg of CO2-equivalent.

$ ./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m
Your trip caused 87g of CO2-equivalent.

$ ./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg
Your trip caused 0.1kg of CO2-equivalent.

$ ./co2-calculator --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car
Your trip caused 2.6kg of CO2-equivalent.

```
