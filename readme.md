# CO2 emission calculator (Development Challenge)


Description
=======

A command line tool build using [node.js](https://nodejs.org/en/) that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation method.The project uses [yargs](http://yargs.js.org/) for parsing the CLI commands and [jest](https://jestjs.io/en/) for writing unit tests. 

## Requirements

For development, you will need Node.js and a node global package,NPM installed in your environement.

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
