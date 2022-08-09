function add() {
    let addHealth = document.getElementById('health2');
   
    addHealth.width += 0;
   width+=10;
    if (addHealth) {
      addHealth.style.width = width + '%';
      addHealth.innerHTML = width + 0 + 'HP';
    }
  }

  var width = 100;
  function update() {
    var damage = document.getElementById('health2');
   
  
    width =width- 10;
    console.log(width);
  
    if (damage) {
      if(width>=0){
      damage.style.width=width+'%';
     
      
      damage.innerHTML = width  +'%';
      }

    }
  }
  setInterval(function(){
    if(width>30 && width<=60){
      var damage = document.getElementById('health2');
      damage.style.background='rgb(255, 102, 0)';
      damage.style.fontSize='20px';
      damage.style.textAlign='center';
     
    }
    if(width>=0 && width<=30){
      var damage = document.getElementById('health2');
      damage.style.background='rgb(255, 0, 0)';
      damage.style.fontSize='13px';
      damage.style.textAlign='center';
    }
  },100);


      
  