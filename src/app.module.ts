import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './car/cars.entity';
import { CarModule } from './car/car.module';
import { FlightsController } from './flights/flights.controller';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'change_me',
      password: 'change_me',
      database: 'transportation',
      entities: [Cars, Flights],
      synchronize: true,
    }),
    CarModule, FlightsModule
  ],
})
export class AppModule {}
