fetch('http://localhost:5000/data')
  .then(response => response.json())
  .then(json => {
    var MM= document.getElementById('MM');
    var OriginalContent=`<div >
    <div class="icon"><i class="test"></i></div>
    <h4 class="title"><a href="">abc</a></h4>
    <p class="description">taram</p>
  </div>`;
    for(var i=0;i<json.length;i++)
    {
       var myContent= document.createElement('div');
       var CustomizedContent=OriginalContent;
       CustomizedContent= CustomizedContent.replace('abc',json[i].title);
       CustomizedContent= CustomizedContent.replace('taram',json[i].description);
       CustomizedContent= CustomizedContent.replace('test',json[i].icon);
       myContent.className= 'col-lg-4 col-md-6 icon-box'
       myContent.innerHTML= CustomizedContent;
       MM.appendChild(myContent);

    
    }
} )
    fetch('http://localhost:5000/dataSection')
  .then(response => response.json())
  .then(json => {
    for(var j=0;j<json.length;j++)
    {
    


    var section=document.getElementById('section')
    var SectionContent=`<div>
    <div  >
   
    <div class="card-body">
     <img src="assets/img/featured-1.jpg"   class="card-img-top" alt="...">
      <h5 class="card-title"><a href="">Autem sunt earum</a></h5>
      <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore</p>
      <a href="#" class="btn">Explore more</a>
    </div>
  </div>`;
       //to create new images
       //var image =document.getElementById('image');
       //image.src='assets/img/featured-1.jpg' 

 
     var mysection= document.createElement('div1');
     var CustomizedSection=SectionContent;
     CustomizedSection= CustomizedSection.replace('Autem sunt earum',json[j].description);
     CustomizedSection= CustomizedSection.replace('Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore',json[j].text);
     var img = document.createElement("img");
     img.className='card'
     CustomizedSection= CustomizedSection.replace('assets/img/featured-1.jpg',json[j].icon);
     mysection.className= 'col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0'
     mysection.innerHTML= CustomizedSection;
     section.appendChild(mysection);

        
     
     }
    
   } )