import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join( __dirname , './dist')));

app.get('*' , (req , res)=>{
    res.sendFile(path.resolve( __dirname , './dist/index.html'));
})

app.listen( 3000 , ()=>{
    console.log('app is listening on port 3000');
})
