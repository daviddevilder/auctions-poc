import * as Tokens from './Tokens';
import * as Portfolios from './Portfolios';

const router = require('express').Router();
module.exports = router;

router.use('/tokens', Tokens);
router.use('/portfolios', Portfolios);
