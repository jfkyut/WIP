const navLocs = document.querySelectorAll('.nav-loc');

navLocs.forEach(function(navLoc) {
  navLoc.addEventListener('click', function() {
    navLocs.forEach(function(loc) {
      loc.classList = 'nav-loc';
    });
    this.classList = 'nav-loc active';
  });
});

