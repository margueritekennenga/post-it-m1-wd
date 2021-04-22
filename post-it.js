var onPostitContainer = document.getElementById('comment');
var onPostitLabel = document.getElementById('commentLabel');
var onPostit = document.getElementById('postitState');
var elements = document.getElementsByClassName('postit');

document.querySelector('body').addEventListener('click', (e)=>{
  if (onPostit.checked == true && e.target != onPostitContainer && e.target != onPostitContainer.children && e.target != onPostitLabel){
    for (var i = 0; i < elements.length; i++){
      elements[i].style.display = 'block';
    }
    if (e.target.className == 'close') {
          var openPostit = e.target.nextElementSibling;
          if(openPostit.style.display === 'none'){
            openPostit.style.display = 'block';
          } else {
            openPostit.style.display = 'none';
          }
    }else if (!e.target.classList.contains('none'))  {
      let target = (e.target.nodeName == 'IMG') || (e.target.nodeName == 'A') ? e.target.parentElement : e.target
      let rect = target.getBoundingClientRect();
      let xPosition = ((e.clientX - rect.left) / rect.width * 100).toFixed(3);
      let yPosition = ((e.clientY - rect.top) / rect.height * 100).toFixed(3);
      target.style.position = 'relative';
      let postit = document.createElement("div");
      postit.classList.add('postit');
      postit.style.top=yPosition+ '%';
      postit.style.left=xPosition+ '%';
      if ((rect.width - e.layerX) < 200) {
        postit.innerHTML = `<div class="close"></div>
                            <div class='postitcontent none left'>
                              <div contenteditable="true" class="none"></div>
                              <div class="delete"><i class="bi bi-trash-fill none"></i></div>
                            </div>`
      } else {
        postit.innerHTML = `<div class="close"></div>
                            <div class='postitcontent none right'>
                              <div contenteditable="true" class="none"></div>
                              <div class="delete"><i class="bi bi-trash-fill none"></i></div>
                            </div>`
      }
      target.appendChild(postit);
    }
  }

  if (onPostit.checked == false){
    for (var i = 0; i < elements.length; i++){
      elements[i].style.display = 'none';
    }
  }

  if(e.target.classList.contains('bi-trash-fill')){
    e.target.closest('.postit').remove();
  }
})
