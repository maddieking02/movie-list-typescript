const router = require('express').Router();
import { controllers } from './controllers/controllers';

router.get('/api/movies/info', controllers.getInfo);

module.exports = router;