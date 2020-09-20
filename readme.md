# CO2 emission calculator (Development Challenge)


Description
=======

A command line tool build using [node.js](https://nodejs.org/en/) that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation method.The project uses [yargs](http://yargs.js.org/) for parsing the CLI commands and [jest](https://jestjs.io/en/) for writing unit tests. 


## Usage

Download the repository:
```
$ git clone https://github.com/ashok-kavungal/AssignmentTask.git
```

Init project:
```
$ cd AssignmentTask
$ npm install
```
Launch:
```
$ cd AssignmentTask/app
$ node co2-calculator.js --exampleflag1 flag1 --exampleflag2 arg2 --exampleflag3 sample3
```

### examples of using command and expected results


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
