/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  // GET /ninjas -- []
  // QUERY PARAMETERS
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'waters' ) {
    return {
      msg: "All Ninjas",
      query: `Query Parameters is : ${weapon}`,
      data: this.ninjasService.getNinjas(weapon)
      // data: [
      //   {
      //     id: 1,
      //     name: "jordan"
      //   },
      //   {
      //     id: 2,
      //     name: "jordan"
      //   },
      //   {
      //     id: 3,
      //     name: "jordan"
      //   }
      // ]
    
  }
  }
  // GET /ninjas/:id -- {...}
  @Get(':id')
  getOneNinja(@Param('id') id:string) {
    return {
      msg: `One Ninja with id : ${id}`,
      data: [
        {
          id: 123,
          name: "jordan"
        }
      ]
    }
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDTO: CreateNinjaDto) {
    return {
      name: createNinjaDTO.name,
      pos: createNinjaDTO.pos,
      data: []
    }
  }
  // PUT /ninjas/:id -- {...}
   // POST /ninjas
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDTO: UpdateNinjaDto) {
    return {
      msg: "Ninja Updated",
      name: updateNinjaDTO.name,
      pos: updateNinjaDTO.pos,
      data: []
    }
  }
// DELETE /ninjas/:id -- {...}
 @Delete(':id')
  deleteNinja() {
    return {
      msg: "Ninja Deleted",
      data: []
    }
  }
}