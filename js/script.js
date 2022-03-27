$(document).ready(function(){
  $(".hide").hide();
  
  
  $(".marker-EurAsia").click(function(){
    $(".hide").hide();
    $(".EurAsia-txt").fadeIn(300);
  });

  $(".marker-northPole").click(function(){
    $(".hide").hide();
    $(".northPole-txt").fadeIn(300);
  });
  
    $(".marker-northAmerica").click(function(){
       $(".hide").hide();
    $(".northAmerica-txt").fadeIn(300);
  });
  
    $(".marker-africa").click(function(){
       $(".hide").hide();
    $(".africa-txt").fadeIn(300);
  });
  
    $(".marker-SA").click(function(){
       $(".hide").hide();
    $(".southAmerica-txt").fadeIn(300);
  });
  document.addEventListener('mouseup', function(e) {
    var northPole = document.getElementById('northPole');
    if (!northPole.contains(e.target)) {
        northPole.style.display = 'none';
    }
    var northAmerica = document.getElementById('northAmerica');
    if (!northAmerica.contains(e.target)) {
      northAmerica.style.display = 'none';
    }
    
  
  });
  document.addEventListener('mouseup', function(e) {
    var southAmerica = document.getElementById('southAmerica');
      if (!southAmerica.contains(e.target)) {
        southAmerica.style.display = 'none';
      }
      var africa = document.getElementById('africa');
      if (!africa.contains(e.target)) {
        africa.style.display = 'none';
      }
      var EurAsia = document.getElementById('EurAsia');
      if (!EurAsia.contains(e.target)) {
        EurAsia.style.display = 'none';
      }
  });
});
