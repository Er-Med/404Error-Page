function starts(n){
  for(i=0; i<n; i++){
    let star = document.createElement('i');
    let mainBox = document.getElementById('main');
    star.className = 'fa-solid fa-star'; 
    mainBox.appendChild(star);

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    if(i % 2 == 0){
      star.classList.add('gloss');
    }
  }
}starts(40);
