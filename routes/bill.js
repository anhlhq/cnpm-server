const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill')

router.get('/', async (req, res, next) => {
    const query = req.query
    const key = Object.keys(query)
    const value = Object.values(query)
    try {
        const contracts = await Bill.find({
            [key]: value
        })
        res.json(contracts)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const bill = await Bill.findById(id)
        res.json(bill)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            sinhvienid,
            phongid,
            thang,
            nam,
            chisodiendau,
            chisodiencuoi,
            chisonuocdau,
            chisonuoccuoi,
            tinhtranghoadon
        } = req.body
        const bill = await new Bill
        bill.id = id
        bill.sinhvienid = sinhvienid
        bill.phongid = phongid
        bill.thang = thang
        bill.nam = nam
        bill.chisodiendau = chisodiendau
        bill.chisodiencuoi = chisodiencuoi
        bill.chisonuocdau = chisonuocdau
        bill.chisonuoccuoi = chisonuoccuoi
        bill.tinhtranghoadon = tinhtranghoadon
        await bill.save()
        res.json(bill)
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
            phongid,
            thang,
            nam,
            chisodiendau,
            chisodiencuoi,
            chisonuocdau,
            chisonuoccuoi,
            tinhtranghoadon
        } = req.body
        const bill = await new Bill.findById(oid)
        bill.id = id
        bill.sinhvienid = sinhvienid
        bill.phongid = phongid
        bill.thang = thang
        bill.nam = nam
        bill.chisodiendau = chisodiendau
        bill.chisodiencuoi = chisodiencuoi
        bill.chisonuocdau = chisonuocdau
        bill.chisonuoccuoi = chisonuoccuoi
        bill.tinhtranghoadon = tinhtranghoadon
        await bill.save()
        res.json(bill)
    } catch (err) {
        next(err)
    }
})


router.delete('/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const bill = await Bill.remove({
            _id: oid
        })
        res.json(bill)
    } catch (error) {
        next(error)
    }
})

module.exports = router