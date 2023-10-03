const sendsearchblog = (req,res)=>{
    res.json({
        blogs:req.body
    });
}
module.exports = sendsearchblog;
