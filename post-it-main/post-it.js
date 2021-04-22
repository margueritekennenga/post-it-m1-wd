var onPostit = document.getElementById('postitState');

document.querySelector('body').addEventListener('click', (e)=>{
  if (onPostit.checked == true && e.target != onPostit && e.target != onPostit.nextElementSibling) {
    if (e.target.className == 'open') {
          var openPostit = e.target.nextElementSibling;
          if(openPostit.style.display === 'none') openPostit.style.display = 'block'
          else openPostit.style.display = 'none'
    } else if (!e.target.classList.contains('postitcontent'))  {
      let target = (e.target.nodeName == 'IMG') || (e.target.nodeName == 'A') ? e.target.parentElement : e.target

      let rect = target.getBoundingClientRect();
      let xPosition = ((e.clientX - rect.left) / rect.width * 100).toFixed(3)
      let yPosition = ((e.clientY - rect.top) / rect.height * 100).toFixed(3)
      target.style.position = 'relative'
      let postit = document.createElement("div");
      postit.classList.add('postit');
      postit.style.top=yPosition+ '%';
      postit.style.left=xPosition+ '%';
      if ((rect.width - e.layerX) < 200) {
        postit.innerHTML = `<div class="close"></div>
                            <div contenteditable="true" class='postitcontent left'>
                              <div class="delete"></div>
                            </div>`
      }else {
        postit.innerHTML = `<div class="close"></div>
                            <div contenteditable="true" class='postitcontent right'>
                              <div class="delete"></div>
                            </div>`
      }
      target.appendChild(postit);
    }
  }
})
