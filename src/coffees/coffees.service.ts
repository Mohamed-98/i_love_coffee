import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'mohamed',
      best_flaver: ['test1', 'test2'],
      age: 12,
      address: 'test',
      phone: 123456,
      email: 'test1',
    },
    {
      id: 2,
      name: 'mohamed-gado',
      best_flaver: ['test1', 'test2'],
      age: 12,
      address: 'test',
      phone: 123456,
      email: 'test1',
    },
  ];
  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    // eslint-disable-next-line prettier/prettier
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: number) {
    // eslint-disable-next-line prettier/prettier
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
