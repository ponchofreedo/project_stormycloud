console.log('gold team rules!');

window.onscroll = function scrollChangeHeaderBg(){
    var header = document.getElementsByTagName('header')[0];
    var sectionHeader = document.getElementsByTagName('header')[1];
    var sectionHeaderBottom = sectionHeader.getBoundingClientRect().bottom; 
    var headerHeight = header.getBoundingClientRect().height;

    if(sectionHeaderBottom <= headerHeight) {
        header.classList.add('header--main-scroll');
    } else if(sectionHeaderBottom >= headerHeight) {
        header.classList.remove('header--main-scroll');
    }
}

// add toggle event for the pull-out nav
var navContainer = document.getElementById('nav-pullout--trigger');
var navTrigger = document.getElementById('menu-toggle');

function hasClass(e, c) {
    return !!e.className.match(new RegExp('(\\s|^)' + c + '(\\s|$)'));
}

function triggerNavOpen() {
    navContainer.classList.add('pullout-opened');
    navTrigger.classList.add('pullout-opened');
}

function triggerNavClose() {
    navContainer.classList.remove('pullout-opened');
    navTrigger.classList.remove('pullout-opened');
}

document.getElementById('menu-toggle').addEventListener('click', function(){
    if(!hasClass(navContainer, 'pullout-opened')) {
        triggerNavOpen();
    } else {
        triggerNavClose();
    }
});

// prevent functions from running before the document is loaded
// just in case...
document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
        //addScrollClass();
        //removeScrollClass();
        triggerNavOpen();
        triggerNavClose();
    }
});
