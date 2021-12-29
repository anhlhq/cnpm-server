const express = require('express')
const router = express.Router()
const Contract = require('../models/Contract')
const Room = require('../models/Room')
const Student = require('../models/Student')

router.get('/', async (req, res, next) => {
    const { keyword, sinhvienid } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const contracts = await Contract.find({
                    $or: [
                        {
                            tinhtranghopdong: keyword
                        }
                    ]
                })
                console.log('1', keyword)
                res.json(contracts)
            }
            else {
                const contracts = await Contract.find({
                    $or: [
                        {
                            phongid: keyword
                        }
                    ]
                })
                console.log(keyword)
                res.json(contracts)
            }
        }

        if (sinhvienid) {
            const contract = await Contract.find({
                sinhvienid: sinhvienid
            })
            res.json(contract)
        }
        const sinhvien = await Student.find()
        const room = await Room.find()
        const contracts = await Contract.find()

        const data = contracts.map(item => {
            return {
                id: item.id,
                sinhvien: item.sinhvienid,
                hoten: sinhvien.filter(item2 => item2.id === item.sinhvienid.toString())[0].hoten,
                phongid: item.phongid,
                sophong: room.filter(item2 => item2.id === item.phongid.toString())[0].sophong,
                toanha: room.filter(item2 => item2.id === item.phongid.toString())[0].toanha,
                tang: room.filter(item2 => item2.id === item.phongid.toString())[0].tang,
                ngaybatdau: item.ngaybatdau,
                ngayketthuc: item.ngayketthuc,
                tinhtranghopdong: item.tinhtranghopdong
            }
        })
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const contract = await Contract.findById(id)
        res.json(contract)
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
            ngaybatdau,
            ngayketthuc,
            tinhtranghopdong,
        } = req.body
        const contract = await new Contract
        contract.id = id
        contract.sinhvienid = sinhvienid
        contract.phongid = phongid
        contract.ngaybatdau = ngaybatdau
        contract.ngayketthuc = ngayketthuc
        contract.tinhtranghopdong = tinhtranghopdong
        await contract.save()
        res.json(contract)
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
            ngaybatdau,
            ngayketthuc,
            tinhtranghopdong,
        } = req.body
        const contract = await Contract.findById(oid)
        contract.id = id
        contract.sinhvienid = sinhvienid
        contract.phongid = phongid
        contract.ngaybatdau = ngaybatdau
        contract.ngayketthuc = ngayketthuc
        contract.tinhtranghopdong = tinhtranghopdong
        await contract.save()
        res.json(contract)
    } catch (err) {
        next(err)
    }
})


router.delete('/delete/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const contract = await Contract.remove({
            _id: oid
        })
        res.json(contract)
    } catch (error) {
        next(error)
    }
})

module.exports = router