const express = require('express');
const router = express.Router();
const multController = require('../controllers/multController');

router.get('/', (req, res) => {
    multController.testar(req, res);
});

router.post('/ganhadorBd', (req, res) => {
    multController.ganhadorBd(req, res);
});

router.get("/graficoMp", function (req, res) {
    multController.graficoMp(req, res);
});


module.exports = router;
