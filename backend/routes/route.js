
import  express  from 'express'
import {Book} from '../models/bookModel.js'

const router = express.Router()


router.post('/create', async (request, respone) => {

    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return respone.status(404).send('Sorry nees fields : title,author,publish year')
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        const book = await Book.create(newBook)
        return respone.status(200).send(book)

    } catch (error) {
        respone.status(500).send({ message: error.message })

    }
})

router.get('/', async (request, respone) => {




    try {
        const findBook = await Book.find({})
        return respone.status(200).json(
                        findBook
                // count: findBook.length,
                // data: findBook
            

        )

    } catch (error) {
        console.log(error.message);
        respone.status(500).send({ message: error.message })
    }
})
///Route by id 
router.get('/:id', async (request, respone) => {

    const bookId = request.params.id;

    try {
        const findBook = await Book.findById(bookId);
        return respone.status(200).json(
            findBook
        )

    } catch (error) {
        console.log(error.message);
        respone.status(500).send({ message: error.message })
    }
})

router.delete('/:bookId', async function (request, respone) {

    const bookIdFind = request.params.bookId

    try {
        const deleteBook = await Book.findByIdAndDelete(bookIdFind)

        if (deleteBook) {
            return respone.status(200).send(   {  message: 'Book deleted'  
                                                , bookId : `${bookIdFind}`   })
          
        }
       
        return respone.status(404).send({ message: 'Book not found' })
    }


    catch (error) {
        console.log(error.message);
        respone.status(500).send({ message: error.message })

    }

})

router.put('/:bookId' ,async function (request, response) {
                try {
                                if(!request.body.title || !request.body.author || !request.body.publishYear){
                                    return response.status(404).send( { message : 'Sorry nees fields : title,author,publish year'}) 

                                }

                                const bookIdFindUpDate = request.params.bookId 
                                const upddate  = await Book.findByIdAndUpdate(bookIdFindUpDate,request.body)
                                

                                if(upddate){

                                    return response.status(200).send( { message : 'update now '})
                                }
                                    else if (upddate === response.body){
                                        return response.status(400).send( { message : 'uniqe'})
                                    }

                                else{
                                    return  response.status(404).send({message : 'cant not update'})
                                }


                    
                } catch (error) {
                    response.status(500).send({ message: error.message })
                }

})

export default router