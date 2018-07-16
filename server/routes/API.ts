import * as Lots from './Lots';
import * as Clubs from './Clubs';

const router = require('express').Router();
module.exports = router;

router.use('/lots', Lots);
router.use('/clubs', Clubs);
