/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { BeltGuard } from './belt/belt.guard';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
@UseGuards(BeltGuard)
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
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return  this.ninjasService.getNinja(id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Ninja with id : ${id}  doesn't exist`,
      }, HttpStatus.NOT_FOUND, {
        cause: error
      })
    }
  }


  // POST /ninjas
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDTO: CreateNinjaDto) {
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
   return this.ninjasService.removeNinja(+id)
     
  }
}
