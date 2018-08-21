"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lots = require("./Lots");
var Organisations = require("./Organisations");
var router = require('express').Router();
module.exports = router;
router.use('/lots', Lots);
router.use('/organisations', Organisations);
//# sourceMappingURL=API.js.map