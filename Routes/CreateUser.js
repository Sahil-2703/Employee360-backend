const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    const createdUser = await User.create({
      company: req.body.company,
      department: req.body.department,
      employee_id: req.body.employee_id,
      age: req.body.age,
      age_when_joined: req.body.age_when_joined,
      years_in_the_company: req.body.years_in_the_company,
      salary: req.body.salary,
      annual_bonus: req.body.annual_bonus,
      prior_years_experience: req.body.prior_years_experience,
      full_time: req.body.full_time,
      part_time: req.body.part_time,
      contractor: req.body.contractor
    });
    res.json({ success: true, user: createdUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;