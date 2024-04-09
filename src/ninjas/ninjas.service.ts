/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

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
    return {
      length: this.ninjas.length,
      data: this.ninjas,
    }
  }
  getNinja(id: number) {
    const ninja = this.ninjas.find((n: { id: number, name: string, weapon: string }) => n.id === id)

      if (!ninja) {
          throw new Error(`Ninja with id: ${id} doesn't exist`)
        }
      return ninja;
  }


  createNinja(createNinjaDTO: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDTO,
      id: Date.now()
    }
    this.ninjas.push(newNinja)
    return newNinja;
  }

  updateNinja(id:number, updateNinjaDTO: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return {...ninja, ...updateNinjaDTO}
      }
      return ninja;
    })
  return this.getNinja(id)
  }

  removeNinja(id: number) {
    const tobeRremoved = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id)
    
    return tobeRremoved;
  }
}