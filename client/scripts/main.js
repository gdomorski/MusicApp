var searchIcon = document.getElementById('searchIcon'),
        searchIconTR = document.getElementById('searchIconTR'),
        searchBarTR = document.getElementById('searchBarTR'),
        searchBar = document.getElementById('searchBar'),
        menu = document.getElementById("menu_button"),
        nav = document.getElementById('nav');
        arrow = document.getElementById('arrow');
        axis = 0;

menu.addEventListener('click', function() { toggleMenu(nav, 'show'); });
searchIcon.addEventListener('click', function () { toggleSearch(searchBar, 'showSearch'); });
searchIconTR.addEventListener('click', function () {    toggleSearch(searchBarTR, 'showSearch'); })
arrow.addEventListener('click', function(){ toggleMusic(toggleMusic, 'see-more'); })

var toggleMenu = function (element, className) {
    if (!element || !className) return;

    var classString = element.className,
        nameIndex = classString.indexOf(className);

    if (nameIndex === -1) {
        classString = "show";
    } else {
        classString = "hide";
    }
    element.className = classString;
};

var toggleSearch = function(element, className) {
    if (!element || !className) return;

    var classString = element.className,
        nameIndex = classString.indexOf(className);
      if (nameIndex === -1) {
        classString = "showSearch";
    } else {
        classString = "hideSearch";
    }
    element.className = classString;
}

var toggleMusic = function (element, className) {
    var hiddenSongs = document.getElementsByClassName('see-more')
    if(!hiddenSongs.length){
        hiddenSongs = document.getElementsByClassName('hideMusic')
    }

    var classString;
    var nameIndex;
    if( axis === 0){
        axis += 180;
    } else {
        axis = 0;
    }

  arrow.style.transform = "rotatex(" + axis + "deg)";
  arrow.style.transitionDuration = "0.5s";

    for(var i = 0; i < hiddenSongs.length; i++) {
        classString = hiddenSongs[i].className,
        nameIndex = classString.indexOf(className);
      if (nameIndex === -1) {
          classString = "see-more";
      } else {
          classString = "hideMusic";
      }
      hiddenSongs[i].className = classString;
      i = -1;
    }
}


