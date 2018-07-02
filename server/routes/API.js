"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tokens = require("./Tokens");
var Portfolios = require("./Portfolios");
var router = require('express').Router();
module.exports = router;
router.use('/tokens', Tokens);
router.use('/portfolios', Portfolios);
//# sourceMappingURL=API.js.map