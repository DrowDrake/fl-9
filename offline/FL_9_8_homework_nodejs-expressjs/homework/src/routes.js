const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const car = require('./handlers/car');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', function (req, res) {
    let result= car.getAllCars();
    res.status(result.status).send(result.message);
});

router.post('/', function (req, res) {
    let result = car.createCar(req.body.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(result.status).send(result.message);

});

router.put('/:id', function (req, res) {
    let result = car.putCarById(req.params.id, req.body.brand, req.body.model, req.body.engineVolume, req.body.year);
    res.status(result.status).send(result.message);
});

router.get('/:id', function (req, res) {
    let result = car.getCarById(req.params.id);
    res.status(result.status).send(result.message);
});

router.delete('/:id', function (req, res) {
    let result =  car.deleteCarById(req.params.id);
    res.status(result.status).send(result.message);
});

module.exports = router;