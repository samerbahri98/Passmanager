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
      date: -1,
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
  [auth, check("WebsiteName", "webiste name is missing").not().isEmpty()],
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
      Notes,
      logoUrl,
    } = req.body;

    try {
      const newWebsite = new Website({
        user: req.user.id,
        WebsiteName,
        WebsiteUrl,
        Username,
        Email,
        Phone,
        Password,
        Notes,
        logoUrl,
      });
      const website = await newWebsite.save();

      res.json({ website });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/websites/:id
// @desc    Update a Website
// @access  PRIVATE
router.put("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    const newWebsite = {
      $set: {
        user: req.user.id,
        WebsiteName: req.body.WebsiteName,
        WebsiteUrl: req.body.WebsiteUrl,
        Username: req.body.Username,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Password: req.body.Password,
        Notes: req.body.Notes,
        logoUrl: req.body.logoUrl,
      },
    };
    await Website.findOneAndUpdate({ _id: req.params.id}, newWebsite );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/websites/:id
// @desc    Delete a Website
// @access  PRIVATE
router.delete("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    await Website.deleteOne({ _id: req.params.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
