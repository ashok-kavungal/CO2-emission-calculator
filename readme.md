# CO2 emission calculator (Development Challenge)


Description
=======

A command line tool build using [node.js](https://nodejs.org/en/) that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation method.The project uses [yargs](http://yargs.js.org/) for parsing the CLI commands and [jest](https://jestjs.io/en/) for writing unit tests. 

## Requirements

For development, you will need Node.js installed in your environement.

### Node
- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`, After running the following command.

    $ npm install npm -g

---


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


**-- transportation-method**  - The flag accepts a <ins>string</ins> representing the transportation method.<br>

**-- distance**  - The flag accepts a <ins>number</ins> indicating the distance. <br>

**-- unit-of-distance**  - By <ins>default</ins> the app uses the unit of distance is <ins>Km (kilometers)</ins> if not set externaly. This falg allows user to sets the unit of distance.The accepted arguments are <ins>'Km'-(kilometers) and 'm'-(meters)</ins>.<br>

**-- output**  - The flag tells the app in which unit should the output be printed. By <ins>default</ins> the unit of output is 'Kg'. The accepted arguments are <ins>'Kg'-(kilogram) and 'g'-(gram)</ins><br>


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

## Useful links

* [yargs](https://github.com/yargs/yargs)
* [Jest](https://github.com/facebook/jest)
* [Node](https://nodejs.org/docs/latest-v13.x/api/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)


