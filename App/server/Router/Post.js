const express = require('express')
const router = express.Router()
const multer = require('multer')
const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const setUpload = require("../Utill/upload.js");

router.post("/submit", (req, res) => {
    let temp = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
    }
    Counter.findOne({name:"counter"})
        .exec()
        .then((counter) => {
          temp.postNum = counter.postNum;
          User.findOne({ uid: req.body.uid })
          .exec()
          .then((userInfo) => {
            temp.author = userInfo._id;
            const CommunityPost = new Post(temp);
            CommunityPost.save().then((doc) => {
              Counter.updateOne(
                { name: "counter" },
                { $inc: { postNum: 1 } }
              ).then(() => {
                res.status(200).json({ success: true });
              });
            });
          });
      })
      .catch((err) => {
        res.status(400).json({ success:false })
      })
    });
  
    router.post("/list", (req, res) => {
      Post.find()
        .populate("author")
        .exec()
        .then((doc) => {
          res.status(200).json({ success:true, postList: doc });
        })
        .catch((err) => {
          res.status(400).json({ success:false });
        });
    })
  
    router.post("/detail", (req, res) => {
      Post.findOne({postNum : Number(req.body.postNum)})
        .populate("author")
        .exec()
        .then((doc) => {
          console.log(doc);
          res.status(200).json({ success:true, post: doc });
        })
        .catch((err) => {
          res.status(400).json({ success:false });
        });
    })
  
    router.post("/edit", (req, res) => {
      let temp = {
        title: req.body.title,
        content: req.body.content,
      }
      Post.updateOne({postNum : Number(req.body.postNum)}, {$set: temp})
        .exec()
        .then((doc) => {
          res.status(200).json({ success:true });
        })
        .catch((err) => {
          res.status(400).json({ success:false });
        });
    })
  
    router.post("/delete", (req, res) => {
      Post.deleteOne({postNum : Number(req.body.postNum)})
        .exec()
        .then(() => {
          res.status(200).json({ success:true });
        })
        .catch((err) => {
          res.status(400).json({ success:false });
        });
    })

/*
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'image/')
        },
        filename: function (req, file, cb) {
          cb(null,  Date.now() + '-' +file.originalname )
        }
      })
      
      const upload = multer({ storage: storage }).single("file");

    router.post("/image/upload", (req, res) => {
        upload(req, res, (err) => {
          if (err) {
            res.status(400).json({ success: false });
          } else {
            res.status(200).json({ success: true, filePath: res.req.file.path });
          }
        });
    });
*/
router.post(
    "/image/upload",
    setUpload("usw-community/post"), 
    (req, res, next) => {
        res.status(200).json({ success: true, filePath: res.req.file.location });
    });


module.exports = router;