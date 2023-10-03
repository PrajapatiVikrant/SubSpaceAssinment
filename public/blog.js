let total_no = document.getElementById('btn1');
let longet_tittl = document.getElementById('btn2');
let privacy = document.getElementById('btn3');
let unique = document.getElementById('btn4');
let blogctn = document.getElementById('blogctn');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-stats',true);
xhr.onload = function(){
let data = JSON.parse(this.response);



     //blog body
let blogbody = document.createElement('div');
blogbody.classList.add('blogbody');

//total blogs
let total_blogs = document.createElement('div')
total_blogs.classList.add('response')
total_blogs.innerText = "Total blogs : "+ data.total_blogs;







blogbody.append(total_blogs)

blogctn.append(blogbody);




console.log(data)
}
xhr.send()




//btn1
total_no.onclick = ()=>{
     blogctn.innerHTML = 'Loading...';
   
     let xhr = new XMLHttpRequest();
xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-stats',true);
xhr.onload = function(){
     document.getElementById('blogctn').innerHTML = ''
let data = JSON.parse(this.response);
let blogctn = document.getElementById('blogctn');


     //blog body
let blogbody = document.createElement('div');
blogbody.classList.add('blogbody');

//total blogs
let total_blogs = document.createElement('div')
total_blogs.classList.add('response')
total_blogs.innerText = "Total blogs : "+ data.total_blogs;






blogbody.append(total_blogs)

blogctn.append(blogbody);
console.log(data)
}
xhr.send()
}



//btn2
longet_tittl.onclick = ()=>{
     blogctn.innerHTML = 'Loading...'
     
     let xhr = new XMLHttpRequest();
xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-stats',true);
xhr.onload = function(){
let data = JSON.parse(this.response);

blogctn.innerHTML = '';

     //blog body
let blogbody = document.createElement('div');
blogbody.classList.add('blogbody');




//Longest's blog  tittle
let longtittle = document.createElement('div');
longtittle.classList.add('response');
longtittle.innerText = data.maximum_tittle_blogs.title;
longtittle.style.width = '450px'


//Longet's blogs image
let image = document.createElement('img');
image.src = data.maximum_tittle_blogs.image_url
image.style.width = "400px";
image.style.height = "400px";

blogbody.append(longtittle,image)

blogctn.append(blogbody);




console.log(data)
}
xhr.send()

}



privacy.onclick = ()=>{
     document.getElementById('blogctn').innerHTML = "Loading..."
     xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-stats',true);
xhr.onload = function(){
     document.getElementById('blogctn').innerHTML= '';
let data = JSON.parse(this.response);



     //blog body
let blogbody = document.createElement('div');
blogbody.classList.add('blogbody');

for(let i = 0;i<data.total_blogs_with_privacy.length;i++){


//  tittle
let tittle = document.createElement('div');
tittle.classList.add('response');
tittle.innerText = data.total_blogs_with_privacy[i].title;
tittle.style.width = '450px'


//image
let image = document.createElement('img');
image.src = data.total_blogs_with_privacy[i].image_url;
image.style.width = "400px";
image.style.height = "400px";

blogbody.append(tittle,image)

blogctn.append(blogbody);


}

console.log(data)
}
xhr.send()



     
}




//btn4
unique.onclick = ()=>{
     document.getElementById('blogctn').innerHTML = "Loading..."
     xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-stats',true);
xhr.onload = function(){
     document.getElementById('blogctn').innerHTML= '';
let data = JSON.parse(this.response);



     //blog body
let blogbody = document.createElement('div');
blogbody.classList.add('blogbody');

for(let i = 0;i<data.unique_tittle.length;i++){


//  tittle
let tittle = document.createElement('div');
tittle.classList.add('response');
tittle.innerText = data.unique_tittle[i].title;
tittle.style.width = '450px'


//image
let image = document.createElement('img');
image.src = data.unique_tittle[i].image_url;
image.style.width = "400px";
image.style.height = "400px";

blogbody.append(tittle,image)

blogctn.append(blogbody);


}

console.log(data)
}
xhr.send()

}


window.addEventListener('keydown',(e)=>{
    
     if(e.key === "Enter"){
         
        
          if(document.getElementById('mysearch')){
               const search = document.getElementById('mysearch').value;
          document.getElementById('blogctn').innerHTML = "Loading..."
          xhr.open('GET','https://blue-florist-ucgfr.pwskills.app:5000/api/blog-search?query='+search,true);
     xhr.onload = function(){
          document.getElementById('blogctn').innerHTML= '';
     let data = JSON.parse(this.response);
     
     
     
          //blog body
     let blogbody = document.createElement('div');
     blogbody.classList.add('blogbody');
     
     for(let i = 0;i<data.blogs.length;i++){
     
     
     //  tittle
     let tittle = document.createElement('div');
     tittle.classList.add('response');
     tittle.innerText = data.blogs[i].title;
     tittle.style.width = '450px'
     
     
     //image
     let image = document.createElement('img');
     image.src = data.blogs[i].image_url;
     image.style.width = "400px";
     image.style.height = "400px";
     
     blogbody.append(tittle,image)
     
     blogctn.append(blogbody);
     
     
     }
     
     console.log(data)
     }
     xhr.send() 
          
}
     }

})
