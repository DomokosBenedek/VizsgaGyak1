import { IsDate, IsInt, IsNumber } from "class-validator";

export class CreateRentalDto {
    @IsNumber()
    @IsInt()
    id: number;
    @IsNumber()
    @IsInt()
    book_id: number;
    @IsDate()
    start_date: Date;
    @IsDate()
    end_date: Date;
}
