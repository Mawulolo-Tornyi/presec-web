import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


export default router;
