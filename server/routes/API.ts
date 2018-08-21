import * as Lots from './Lots';
import * as Organisations from './Organisations';

const router = require('express').Router();
module.exports = router;

router.use('/lots', Lots);
router.use('/organisations', Organisations);
