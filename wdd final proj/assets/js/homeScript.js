$('.prod').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.prod .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.prod',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 500
  });