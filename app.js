$(document).ready(function(){
  const canvas = $('#canvas');
  for(var i = 0;i< 2000;i++){
    canvas.append('<div class="box"></div>');
  }

  var allBoxes = $('.box');
  var color = 'orange';
  $('.box').click(function(){
    $(this).addClass(color);
  })
  .dblclick(function(){
    $(this).removeClass(color);
  })
  $('a').click(function(){
    color = $(this).attr('id');
  })

  $('.restart').click(function(){
    allBoxes.removeClass('blue orange pink green');
  })

  $('#rainbow').click(function(){
      var rando = Math.floor(Math.random()*4);
      console.log(rando);
      if(rando === 0){
        color = 'blue';
      } else if (rando === 1){
        color = 'orange';
      } else if( rando === 2){
        color = 'pink';
      } else {
        color = 'green';
      }
  })

});
