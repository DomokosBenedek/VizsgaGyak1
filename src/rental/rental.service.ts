import { Injectable } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';

@Injectable()
export class RentalService {
  create(createRentalDto: CreateRentalDto) {
    return createRentalDto;
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateRentalDto: UpdateRentalDto) {
    return this.update(id, updateRentalDto);
  }

  remove(id: number) {
    try{
      return this.remove(id);
    }catch(error){
      return {error:error.message};
    };
  }
}
