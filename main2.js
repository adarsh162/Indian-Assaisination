var $ken = $('.ken'),
    $guile=$('.guile'),
    $stage=$('.stage'),
    
    $kenPos,$guilePos,$fireballPos;


setInterval(function (){
    $kenPos=$ken.offset();
    $guilePos=$guile.offset();
    
},250);


var isColision=function (){
  return ($guilePos.left-$kenPos.left<=75 && $guilePos.left-$kenPos.left>=-75) ? true : false ;
};


var walkLeft = function(){
    $ken.addClass('walk').css({ marginLeft:'-=10px' });
};
var walkRight = function(){
    $ken.addClass('walk').css({ marginLeft:'+=10px' });
};


$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $ken.removeClass('walk'); }
});
$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $ken.removeClass('walk'); }
});
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
  
  
      
var hitcount=0;
$('#a').click(punch);
$('#w').click(kick);
$('#s').click(rkick);
$('#d').click(fball);
$('#up').click(jump);
$('#down').click(kneel);

$(document).on('keydown keyup',function (e){
    if(e.type=='keydown'){
        //walk
        if (e.keyCode == 37) { if($kenPos.left>0){walkLeft();                   //for small screen $kenPos.left>450     for big screen $kenPos.left>0 
        console.log($ken.left);}}
        if (e.keyCode == 39) { if($kenPos.left<$guilePos.left-180){walkRight(); }}
        //punch
        if(e.keyCode==65 && !$ken.hasClass('punch') ){
        punch();
        }
        //kick
        if(e.keyCode==87 && !$ken.hasClass('kick')){
            kick();
        }
        if(e.keyCode==83 && !$ken.hasClass('rkick') && !$ken.hasClass('kick')){
            rkick();
        }
        if(e.keyCode== 38 && !$ken.hasClass('jump') && !$ken.hasClass('kick') ){
            jump();
        }
        if(e.keyCode== 40 && !$ken.hasClass('kneel') && !$ken.hasClass('jump') && !$ken.hasClass('kick') ){
            kneel();
        }
        if(e.keyCode==68 && !$ken.hasClass('fball') && !$ken.hasClass('rkick') && !$ken.hasClass('kick') && !$ken.hasClass('punch')){
            fball();
        }
    }
}
)
setInterval(function(){
    if($guile.hasClass('hit1') || $guile.hasClass('hit2') || $guile.hasClass('hit3')){
        update();
    }
},500);
setInterval(function(){
    if(hitcount<10){
        $('#myModal').modal('hide');
    }
},100);

setInterval(function(){
    if(hitcount>=10 && width==0){
        console.log(hitcount);
        $('#myModal').modal('show');
        /*window.open("http://mywebsite.com/home.html");
        $("#mymodal").modal("show");*/
      
    }
},500);


var punch = function (){
      $ken.addClass('punch');
      console.log($kenPos-$guilePos);
      console.log($kenPos);
      console.log($guilePos);
      if(isColision() || $kenPos.left>($guilePos.left-220)){
          $guile.addClass('hit3');
          
          setTimeout(function (){hitcount++;
                          $guile.removeClass('hit3');},500);
      }
      setTimeout(function (){$ken.removeClass('punch');},150);
};
var kick = function(){
    $ken.addClass('kick');
    if(isColision() || $kenPos.left>($guilePos.left-220)){
        $guile.addClass('hit3');
        setTimeout(function (){hitcount++;$guile.removeClass('hit3');},500);
    }
    setTimeout(function (){$ken.removeClass('kick');},500);
};
/*guile fight*/

var punch2 = function (){
    
    $guile.addClass('punch2');
  
    setTimeout(function (){hitcount++;$guile.removeClass('punch2');},150);
};
var kick2 = function(){
  $guile.addClass('kick');
  if(isColision()){
      $ken.addClass('hit2');
      setTimeout(function (){$ken.removeClass('hit2');},500);
  }
  setTimeout(function (){$ken.removeClass('kick');},500);
};
/*guile done*/
var rkick = function(){
    $ken.addClass('reversekick');
    if(isColision() || $kenPos.left>($guilePos.left-220)){
        $guile.addClass('hit2');
        setTimeout(function (){hitcount++;$guile.removeClass('hit2');},500);
    }
    setTimeout(function (){$ken.removeClass('reversekick');},500);
};
var jump =function(){
    $ken.addClass('jump');
    setTimeout(function() { $ken.addClass('down');},500);
    setTimeout(function(){ $ken.removeClass('jump down');},1000);
};
var kneel = function(){
        $ken.addClass('kneel');
        setTimeout(function(){ $ken.removeClass('kneel');},500);
}
var x;
var fball = function(){
    $ken.addClass('fball');
    setTimeout(function(){$ken.removeClass('fball');},500);
    setTimeout(function(){
        var $fireball=$('<div/>',{class:'fireball'});
        $fireball.appendTo($ken);

        var isFireballColision=function(){
            return  ($guilePos.left-$kenPos.left<=75 && $guilePos.left-$kenPos.left>=-75);
        };

        var explodeIfColision=setInterval(function(){
            $fireballPos=$fireball.offset();
            if($fireballPos.left>=$guilePos.left-180){
                 x=1;
                $guile.addClass('hit2');
                setTimeout(function(){hitcount++;$guile.removeClass('hit2');},500);
                setTimeout(function(){$fireball.remove();},500);
                $fireball.remove();
            }
            if(isFireballColision()){
                $fireball.addClass('explode').removeClass('moving').css('marginleft','+=22px');
                clearInterval(explodeIfColision);
                setTimeout(function(){$fireball.remove();},500);
                if(x!=1){
                $guile.addClass('hit2');
                setTimeout(function(){hitcount++;$guile.removeClass('hit2');},500);
                }
            }
        },50);
       setTimeout(function(){$fireball.addClass('moving')},20);
       setTimeout(function(){
           $fireball.remove();
           clearInterval(explodeIfColision);
       },3020);
    },250);
};
punch2();

