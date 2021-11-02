const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { student_id, name, date_of_birth, class_id, faculty_id,
            gender, address, phone } = req.body
        const student = await new Student()
        student.student_id = student_id
        student.name = name
        student.date_of_birth = date_of_birth
        student.class_id = class_id
        student.faculty_id = faculty_id
        student.gender = gender
        student.address = address
        student.phone = phone
        await student.save()
        res.json(student)
    } catch (error) {
        next(error)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { student_id, name, date_of_birth, class_id, faculty_id,
            gender, address, phone } = req.body
        const { id } = req.params
        const student = await Student.findById(id)
        student.student_id = student_id
        student.name = name
        student.date_of_birth = date_of_birth
        student.class_id = class_id
        student.faculty_id = faculty_id
        student.gender = gender
        student.address = address
        student.phone = phone
        await student.save()
        res.json(student)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const student = Student.remove({
            _id: id
        })
        res.json(student)
    } catch (error) {
        next(error)
    }
})
module.exports = router