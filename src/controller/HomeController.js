const Post = require("../models/Post");

module.exports = {
  async getText(req, res) {
    if (req.params._id === undefined)
      return res.json(await Post.findById("home"));
    return res.json(await Post.findById(req.params._id));
  },
  async postText(req, res) {
    const _id = req.params._id === undefined ? "home" : req.params._id;
    const sendBody = new Post(req.body);
    const post = await Post.updateOne(
      { _id },
      {
        text: sendBody.text
      },
      { upsert: true }
    );
    req.io.emit(_id, sendBody);
    return res.json(post);
  }
};
