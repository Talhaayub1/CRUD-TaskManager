const notfound = async (req, res) => res.status(404).send("Route Does Not Exist");

module.exports = notfound;