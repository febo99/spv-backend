import express, { Application } from 'express';
import path from 'path';
import randomRoute from './routes/random'


const app: Application = express();


app.use('/api/', randomRoute)



app.listen(5000, () => {
    console.log(`Server started on port 5000`)
})



