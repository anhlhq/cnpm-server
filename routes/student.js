const express = require('express')
const router = express.Router()
const Student = require('../models/User')

router.get('/', async (req, res, next) => {
    const { keyword } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const students = await Student.find({
                    $or: [
                        {
                            id: keyword
                        },
                        {
                            hoten: keyword
                        },
                        {
                            gioitinh: keyword
                        },
                        {
                            khoa: keyword
                        }
                    ]
                })
                res.json(students)
            }
            else {
                const students = await Students.find({
                    $or: [
                        {
                            hoten: keyword
                        },
                        {
                            ngaysinh: keyword
                        },
                        {
                            diachi: keyword
                        },
                        {
                            sodienthoai: keyword
                        },
                    ]
                })
                res.json(students)
            }

        }
        const students = await Student.find()
        res.json(students)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            hoten,
            ngaysinh,
            lop,
            khoa,
            gioitinh,
            diachi,
            sodienthoai
        } = req.body
        const student = await new Student
        student.id = id
        student.hoten = hoten
        student.ngaysinh = ngaysinh
        student.lop = lop
        student.khoa = khoa
        student.gioitinh = gioitinh
        student.diachi = diachi
        student.sodienthoai = sodienthoai
        await student.save()
        res.json(student)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const {
            id,
            hoten,
            ngaysinh,
            lop,
            khoa,
            gioitinh,
            diachi,
            sodienthoai
        } = req.body
        const student = await User.findById(oid)
        student.id = id
        student.hoten = hoten
        student.ngaysinh = ngaysinh
        student.lop = lop
        student.khoa = khoa
        student.gioitinh = gioitinh
        student.diachi = diachi
        student.sodienthoai = sodienthoai
        await student.save()
        res.json(student)
    } catch (err) {
        next(err)
    }
})


router.delete('/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const student = await Student.remove({
            _id: oid
        })
        res.json(student)
    } catch (error) {
        next(error)
    }
})

module.exports = router