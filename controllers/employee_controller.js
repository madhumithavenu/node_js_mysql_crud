const express = require('express'),
    router = express.Router()

// const service = require('../services/employee.service')

router.get('/',  (req, res) => {
    // const employees = await service.getAllEmployees()
    res.send('list of employees');
})
module.exports = router;