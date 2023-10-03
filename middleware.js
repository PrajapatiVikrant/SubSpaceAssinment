const axios = require('axios')
const _  = require('lodash')



const middleware = {

  //to get all blogs
 getdata : async(req,res,next)=>{
    const data = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs',{
        headers: {
          'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
          });

    let detail = {
     total_blogs: _.size(data.data.blogs),
     maximum_tittle_blogs:_.maxBy(data.data.blogs, blog => blog.title.length), 
     total_blogs_with_privacy: _.filter(data.data.blogs, blog => _.includes(blog.title.toLowerCase(), 'privacy')),
     unique_tittle:_.uniqBy(data.data.blogs, 'title')
    }
      req.body = detail;
      next();
},
  // to get search blog
getsearchblog:async(req,res,next)=>{
  const data = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs',{
    headers: {
      'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
    }
      });
 console.log(req.query);
   const searchblog = _.filter(data.data.blogs,blog=>_.includes(blog.title.toLowerCase(),req.query.query.toLowerCase()));
   req.body = searchblog;
   next();
}


}
module.exports = middleware;

