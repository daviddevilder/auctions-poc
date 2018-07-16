"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auctions = require("./Auctions");
var Clubs = require("./Clubs");
var router = require('express').Router();
module.exports = router;
router.use('/auctions', Auctions);
router.use('/clubs', Clubs);
//# sourceMappingURL=API.js.map