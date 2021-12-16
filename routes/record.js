const express = require('express')
const router = express.Router()
const Record = require('../models/Record')

router.get('/', async (req, res, next) => {
    try {
        const records = await Record.find()
        res.json(records)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const record = await Record.findById(id)
        res.json(record)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            sinhvienid,
            noidungvipham,
            thoigianvipham,
            hinhthuckiluat,
            thoigiankiluat,
        } = req.body
        const record = await new Record
        record.id = id
        record.sinhvienid = sinhvienid
        record.noidungvipham = noidungvipham
        record.thoigianvipham = thoigianvipham
        record.hinhthuckiluat = hinhthuckiluat
        record.thoigiankiluat = thoigiankiluat
        await record.save()
        res.json(record)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const {
            id,
            sinhvienid,
            noidungvipham,
            thoigianvipham,
            hinhthuckiluat,
            thoigiankiluat,
        } = req.body
        const record = await new Record.findById(oid)
        record.id = id
        record.sinhvienid = sinhvienid
        record.noidungvipham = noidungvipham
        record.thoigianvipham = thoigianvipham
        record.hinhthuckiluat = hinhthuckiluat
        record.thoigiankiluat = thoigiankiluat
        await record.save()
        res.json(record)
    } catch (err) {
        next(err)
    }
})


router.delete('/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const record = await Record.remove({
            _id: oid
        })
        res.json(record)
    } catch (error) {
        next(error)
    }
})

module.exports = router