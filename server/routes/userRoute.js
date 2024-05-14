const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const blacklist = require("../middleware/blacklist");
const User = require("../models/userModel");
const CreateUser = require("../models/createUserModel")

// endpoint to register user
router.post("/api/user/register", (req, res) => {
  // hash the password
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // save the user
      const user = new User({
        loginId: req.body.loginId,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});


// endpoint for verifying users
router.post("/api/user/login", (req, res) => {
  User.findOne({
    loginId: req.body.loginId,
  })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Password does not match",
              error,
            });
          }
          // create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userLoginId: user.loginId,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login Successful",
            loginId: user.loginId,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(401).send({
        message: "loginId not found",
        error,
      });
    });
});
// create user details
router.post("/api/user/details", async (req, res) => {
  try {
    const { name, fatherName, phoneNumber, email, className, section, school} = req.body;

    // Create a new user instance
    const newUser = new CreateUser({
      name,
      fatherName,
      phoneNumber,
      email,
      className,
      section,
      school,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).send({
      message:"Details saved successfully",
      savedUser
    })
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// endppoint to get registered users
router.get("/api/user/get-users", async (req, res) => {
  try {
    const users = await CreateUser.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users", error });
  }
});
// Define your logout endpoint
router.post("/api/user/logout", auth, (req, res) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Authorization header missing" });
    }
    const tokenParts = req.headers.authorization.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ error: "Invalid authorization header" });
    }
    const token = tokenParts[1];
    blacklist.add(token);
    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
