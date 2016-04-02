const searchIcon = document.getElementById('searchIcon'),
        searchIconTR = document.getElementById('searchIconTR'),
        searchBarTR = document.getElementById('searchBarTR'),
        searchBar = document.getElementById('searchBar'),
        menu = document.getElementById("menu_button"),
        nav = document.getElementById('nav'),
        arrow = document.getElementById('arrow');

let axis = 0;

menu.addEventListener('click', () => { toggleMenu(nav, 'show')});
searchIcon.addEventListener('click', () => { toggleSearch(searchBar, 'showSearch')});
searchIconTR.addEventListener('click', () => {toggleSearch(searchBarTR, 'showSearch')})
arrow.addEventListener('click', () => { toggleMusic(null, 'see-more')})

const toggleMenu = (element, className) => {
  if (!element || !className) return;

  let classString = element.className,
      nameIndex = classString.indexOf(className);

  classString = (nameIndex === -1) ? "show" : "hide";
  element.className = classString;
};

const toggleSearch = (element, className) => {
  if (!element || !className) return;

  let classString = element.className,
      nameIndex = classString.indexOf(className)

  classString = (nameIndex === -1) ? "showSearch" : "hideSearch";
  element.className = classString;
}

const toggleMusic = (element, className) => {
  let hiddenSongs = document.getElementsByClassName('see-more')
  if(!hiddenSongs.length){
      hiddenSongs = document.getElementsByClassName('hideMusic')
  }
  let classString;
  let nameIndex;
  axis = (axis === 0) ? axis += 180 : 0;

  arrow.style.transform = "rotatex(" + axis + "deg)";
  arrow.style.transitionDuration = "0.5s";

  for(let i = 0; i < hiddenSongs.length; i++) {
    classString = hiddenSongs[i].className,
    nameIndex = classString.indexOf(className);
    classString = (nameIndex === -1) ? "see-more" : "hideMusic";
    hiddenSongs[i].className = classString;
    i = -1;
  }
}


