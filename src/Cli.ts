import inquirer from 'inquirer';
import { Car } from './Car';
import { Truck } from './Truck';
import { Motorbike } from './Motorbike';
import { Vehicle } from './Vehicle';

async function run() {
  const { type } = await inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'What kind of vehicle do you want to build?',
    choices: ['Car', 'Truck', 'Motorbike'],
  });

  const { model, color } = await inquirer.prompt([
    { type: 'input', name: 'model', message: 'Enter vehicle model:' },
    { type: 'input', name: 'color', message: 'Enter vehicle color:' },
  ]);

  let vehicle: Vehicle;

  if (type === 'Car') {
    const { doors } = await inquirer.prompt({
      type: 'number',
      name: 'doors',
      message: 'How many doors does the car have?',
    });
    vehicle = new Car(model, color, doors);
  } else if (type === 'Truck') {
    const { payload } = await inquirer.prompt({
      type: 'number',
      name: 'payload',
      message: 'Enter payload capacity in tons:',
    });
    vehicle = new Truck(model, color, payload);
  } else {
    const { sidecar } = await inquirer.prompt({
      type: 'confirm',
      name: 'sidecar',
      message: 'Does it have a sidecar?',
    });
    vehicle = new Motorbike(model, color, sidecar);
  }

  console.log('\n Vehicle created!');
  console.log(vehicle.getInfo());

  let running = true;
  while (running) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What do you want to do next?',
      choices: ['Increase Speed', 'Decrease Speed', 'Show Info', 'Exit'],
    });

    if (action === 'Increase Speed') {
      const { amount } = await inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Increase speed by how many mph?',
      });
      vehicle.increaseSpeed(amount);
      console.log(`Speed increased. ${vehicle.getInfo()}`);
    } else if (action === 'Decrease Speed') {
      const { amount } = await inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Decrease speed by how many mph?',
      });
      vehicle.decreaseSpeed(amount);
      console.log(`Speed decreased. ${vehicle.getInfo()}`);
    } else if (action === 'Show Info') {
      console.log(vehicle.getInfo());
    } else {
      running = false;
    }
  }
}

run();
