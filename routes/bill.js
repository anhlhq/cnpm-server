const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill')
router.get('/', async (req, res, next) => {
    const { keyword } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const bills = await Bill.find({
                    $or: [
                        {
                            tinhtranghoadon: keyword
                        }
                    ]
                })
                console.log('1', keyword)
                res.json(bills)
            }
            else {
                const bills = await Bill.find({
                    $or: [
                        {
                            id: keyword
                        },
                        {
                            sinhvienid: keyword
                        },
                        {
                            phongid: keyword
                        },
                        {
                            thang: keyword
                        },
                        {
                            nam: keyword
                        }
                    ]
                })
                console.log(keyword)
                res.json(bills)
            }
        }
        const bills = await Bill.find()
        res.json(bills)
    } catch (err) {
        next(err)
    }
})


// hoa don theo ma sinh vien va thang nam
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
        const bill = await Bill.findById(oid)
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


router.delete('/delete/:oid', async (req, res, next) => {
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