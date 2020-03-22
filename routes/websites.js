const express = require('express')
const router = express.Router()

// @route   GET api/websites
// @desc    Get all users websites
// @access  PRIVATE
router.get('/',(req,res) => {
    res.send('Get all websites')
})

// @route   POST api/websites
// @desc    Add a Website 
// @access  PRIVATE
router.post('/',(req,res) => {
    res.send('Add a website')
})

// @route   PUT api/websites/:id
// @desc    Update a Website 
// @access  PRIVATE
router.put('/:id',(req,res) => {
    res.send('Update a Website')
})

// @route   DELETE api/websites/:id
// @desc    Delete a Website 
// @access  PRIVATE
router.delete('/:id',(req,res) => {
    res.send('Delete a Website')
})

module.exports = router