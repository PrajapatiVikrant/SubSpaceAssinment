
const express = require('express');
const path = require('path')
const sendblog =  require('./Controller/sendblog');
const sendsearchblog = require('./Controller/sendsearchblog')

const app = express();

const middleware = require('./middleware');
app.use(express.static(path.join(__dirname,'./public')))
const router = express.Router();
router.get('/',(req,res)=>{
    res.sendFile('/config/workspace/public/blog.html')
})

router.get('/blog-stats',middleware.getdata,sendblog);
router.get('/blog-search',middleware.getsearchblog,sendsearchblog)

module.exports = router;
