const express = require('express')
const router = express.Router()
const Record = require('../models/Record')
const Student = require('../models/Student')
router.get('/', async (req, res, next) => {
    const { keyword } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const records = await Record.find({
                    $or: [
                        {
                            noidungvipham: keyword
                        }, {
                            hinhthuckiluat: keyword
                        }
                    ]
                })
                res.json(records)
            }
            else {
                const records = await Record.find({
                    $or: [
                        {
                            sinhvien: keyword
                        },
                    ]
                })
                res.json(records)
            }

        }
        const records = await Record.find()
        const sinhvien = await Student.find()

        const data = records.map(item => {
            return {
                id: item.id,
                sinhvienid: item.sinhvienid,
                hoten: sinhvien.filter(item2 => item2.id === item.sinhvienid.toString())[0].hoten,
                noidungvipham: item.noidungvipham,
                thoigianvipham: item.thoigianvipham,
                hinhthuckiluat: item.hinhthuckiluat,
                thoigiankiluat: item.thoigiankiluat
            }
        })
        res.json(data)
    } catch (err) {
        next(err)
    }
})
// 
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
        console.log(err)
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
        const record = await Record.findById(oid)
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


router.delete('/delete/:oid', async (req, res, next) => {
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