import * as Auctions from './Auctions';
import * as Clubs from './Clubs';

const router = require('express').Router();
module.exports = router;

router.use('/auctions', Auctions);
router.use('/clubs', Clubs);
