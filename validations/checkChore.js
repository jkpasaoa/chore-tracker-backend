const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log(`Yay! A chore name!`)
    next()
  } else {
    res.status(400).json({ error: "A chore name is required" });
  }
};

module.exports = { checkName };
