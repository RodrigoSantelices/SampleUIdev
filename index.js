
// on click of the green button
$('.green').on('click',function(){
  //button color switches
  $('.green').addClass('chosen');
  $('.red').removeClass('chosen');
  $('.red').removeClass('start');
  $('.green').removeClass('start');
  //column color switches
  $('.resultBox').removeClass('redBox');
  $('.resultBox').addClass('greenBox');
  $('.app-logo').attr("src","./assets/My app green @2x.png");
  $('.lineIcon').attr("src","./assets/icon.svg")
})

//on click of the red button
$('.red').on('click',function(){
  //button color switches
  $('.red').addClass('chosen');
  $('.green').removeClass('chosen');
  $('.green').removeClass('start');
  $('.red').removeClass('start');
  //column color switches
  $('.resultBox').removeClass('greenBox');
  $('.resultBox').addClass('redBox');
  $('.app-logo').attr("src","./assets/My app red @2x.png");
  $('.lineIcon').attr("src","./assets/icon2.png")
})
