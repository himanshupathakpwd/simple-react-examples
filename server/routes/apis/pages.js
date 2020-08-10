const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Pages = mongoose.model('pages');

router.route('/')
    .all(function (req, res, next) {
        next();
    })
    .get(async function (req, res) {
        const data = await Pages.find();
        res.status(200).json({
            error: false,
            data,
        });
    })
    .post(async (req, res) => {
        const data = await Pages.create(req.body);
        res.status(201).json({
            error: false,
            data,
        })
    });

router.route('/:id')
    .all(function (req, res, next) {
        next();
    })
    .get(async function (req, res) {
        const { id } = req.params;
        const data = await Pages.findById(id);
        res.status(200).json({ error: false, data });
    })
    .put(async (req, res) => {
        const { id } = req.params;
        const data = await Pages.findByIdAndUpdate(id, req.body);
        return res.status(202).json({
            error: false,
            data
        })
    });

module.exports = router;