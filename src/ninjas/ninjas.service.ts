/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {id: 123, name: 'ninjaJordan', weapon: "stars"},
    {id: 321, name: 'ninjaChris', weapon: "waters"}, 
  ]
  // filter query
  getNinjas(weapon?: 'stars' | 'waters') {
    if (weapon) {
      return this.ninjas.filter((n) => n.weapon === weapon)
    }
    return this.ninjas;
  }
}