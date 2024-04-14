const express = require('express');
const zod = require('zod');
const router = express.Router();
const { User, Account } = require('../db.js');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config.js');
const { authMiddleware } = require('../middleware.js');

// zod schema for signup

const signupSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const existing_user = await User.findOne({
    username: body.username,
  });

  if (existing_user) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRET
  );
  res.status(200).json({
    message: 'User created succesfully',
    token: token,
  });
});

// zod schema for sign in

const siginSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post('/signin', async (req, res) => {
  const { success } = siginSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: 'Error while logging in',
  });
});

// zod schema for update
const updateSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.put('/', authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: 'Error while updating information',
    });
  }
  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    message: 'Updated successfully',
  });

  router.get('/bulk', async (req, res) => {
    // Extract the 'filter' query parameter from the request URL, or set it to an empty string if not provided
    const filter = req.query.filter || '';
    // Use Mongoose's User model to find users that match the specified criteria
    const users = await User.find({
      $or: [
        {
          // Match users with firstName that contains the filter value
          firstName: {
            $regex: filter,
          },
        },
        // Match users with lastName that contains the filter value
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });

    // Respond with a JSON object containing user data
    res.json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  });
});
module.exports = router;
