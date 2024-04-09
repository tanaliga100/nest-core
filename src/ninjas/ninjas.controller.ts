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
      length: this.ninjasService.getNinjas.length,
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
      data: this.ninjasService.getNinja(Number(id))
    }
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDTO: CreateNinjaDto) {
    return {
      msg: "Ninja Created",
      data: this.ninjasService.createNinja(createNinjaDTO)
    }
  }
  // PUT /ninjas/:id -- {...}
   // POST /ninjas
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDTO: UpdateNinjaDto) {
    return {
      msg: "Ninja Updated",
     
      data: this.ninjasService.updateNinja(+id, updateNinjaDTO)
    }
  }
// DELETE /ninjas/:id -- {...}
 @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      msg: "Ninja Deleted",
      data: this.ninjasService.removeNinja(+id)
    }
  }
}
