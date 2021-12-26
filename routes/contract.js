const express = require('express')
const router = express.Router()
const Contract = require('../models/Contract')

router.get('/', async (req, res, next) => {
    const { keyword } = req.query
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
                            id: keyword
                        },
                        {
                            sinhvienid: keyword
                        },
                        {
                            phongid: keyword
                        },
                        {
                            ngaybatdau: keyword
                        },
                        {
                            ngaykethuc: keyword
                        }
                    ]
                })
                console.log(keyword)
                res.json(contracts)
            }
        }
        const contracts = await Contract.find()
        res.json(contracts)
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