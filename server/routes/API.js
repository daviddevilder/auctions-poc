"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lots = require("./Lots");
var Clubs = require("./Clubs");
var router = require('express').Router();
module.exports = router;
router.use('/lots', Lots);
router.use('/clubs', Clubs);
//# sourceMappingURL=API.js.map