$(document).ready(function() {

  // function showHide () {
  //   var cultural = document.getElementsByClassName('cultural');
  //   var technical = document.getElementsByClassName('technical');
  //
  //   var buttonHideTech = document.getElementById('hide-tech');
  //   var buttonHideCult = document.getElementById('hide-cult');
  //
  //   buttonHideTech.addEventListener("click", hideTech);
  //   buttonHideCult.addEventListener("click", hideCult);
  // }
  //
  // function hideTech (evt) {
  //   var cultural = document.getElementsByClassName('cultural');
  //   var technical = document.getElementsByClassName('technical');
  //   evt.target.technical.add("hide");
  // }
  //
  // function hideCult (evt) {
  //   var cultural = document.getElementsByClassName('cultural');
  //   var technical = document.getElementsByClassName('technical');
  //     evt.target.cultural.add("hide");
  // }

  $("#hide-cult").click(function() {
    $(".cultural").addClass('hide');
  })

  $("#hide-tech").click(function() {
    $(".technical").addClass('hide');
  })

  $("#show-all").click(function() {
    $(".technical, .cultural").removeClass('hide');
  })

});
