import { Controller, Get, Param, Post, Body, Patch, Delete, Put } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { identity } from 'rxjs';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

  // READ All
  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightService.findAll();
  }

  // READ ONE
  @Get("/:id")
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }

   // QUERY
   @Get("query/:orig/:dest")
   async query(@Param() params): Promise<any> {
     return this.flightService.query(params.orig,params.dest);
   }

   // CREATE
  @Post()
  async create(@Body() flight: Flight): Promise<Flights[]> {
    return this.flightService.create(flight);
  }

  // UPDATE 
  // @Post(":id/update") 
  @Patch(":id/update")
  async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.update(flight);
  }

  // DELETE
  @Delete(":id/delete")
  async delete(@Param('id') id): Promise<any> {
    return this.flightService.delete(id);
  }

  @Get("cities/origins")
  getOrigins(): Promise<String[]> {
    return this.flightService.getFlightOrigins();
  }

  @Get("cities/destinations")
  getDestinations(): Promise<String[]> {
    return this.flightService.getFlightDestinations();
  }
}