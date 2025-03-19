import { books, PrismaClient, rentals } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()
async function main() {
    const booksLIst: books[] = await prisma.books.findMany();
    const randomBookId = faker.helpers.shuffle(booksLIst);
    
    for (let i = 0; i < 15; i++) {
        await prisma.rentals.create({ 
            data:{
            book_id: randomBookId[i].id,
            start_date: faker.date.past(),
            end_date: faker.date.future(),}
        });
    }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })