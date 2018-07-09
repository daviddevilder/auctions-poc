import * as Auctions from './Auctions';

const router = require('express').Router();
module.exports = router;

router.use('/auctions', Auctions);
