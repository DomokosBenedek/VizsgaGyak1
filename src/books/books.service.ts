import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return this.create(createBookDto);
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.update(id, updateBookDto);
  }

  remove(id: number) {
    try{
      return this.remove(id);
    }catch(error){
      return {error:error.message};
    };
  }
}
