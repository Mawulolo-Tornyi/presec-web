import express from 'express';
import path from 'path';

import router from './routes/pages.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})



