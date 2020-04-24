const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Website = require("../models/Website");
// @route   GET api/websites
// @desc    Get all users websites
// @access  PRIVATE
router.get("/", auth, async (req, res) => {
  try {
    const websites = await Website.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json({ websites });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/websites
// @desc    Add a Website
// @access  PRIVATE
router.post(
  "/",
  [
    auth,
    check("WebsiteName", "webiste name is missing")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const {
      WebsiteName,
      WebsiteUrl,
      Username,
      Email,
      Phone,
      Password,
      imgurid
    } = req.body;

    try {
        const newWebsite = new Website({
            user:req.user.id,
            WebsiteName,
            WebsiteUrl,
            Username,
            Email,
            Phone,
            Password,
            imgurid})
        const webiste = await newWebsite.save()
        res.json(Website)
    } catch (err) {
        
    console.error(err.message);
    res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/websites/:id
// @desc    Update a Website
// @access  PRIVATE
router.put("/:id", (req, res) => {
  res.send("Update a Website");
});

// @route   DELETE api/websites/:id
// @desc    Delete a Website
// @access  PRIVATE
router.delete("/:id", (req, res) => {
  res.send("Delete a Website");
});

module.exports = router;
