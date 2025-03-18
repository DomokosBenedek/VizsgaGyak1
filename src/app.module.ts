import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [BooksModule, RentalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
