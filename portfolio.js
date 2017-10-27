var options = {
  strings: ["is ^200 Ambitious", "is ^200 Intuitive", "is ^200 Passionate", "is a ^200 Web Developer"],
  typeSpeed: 80,
  showCursor: false,
  loop: true,
  smartBackspace: true,
  backSpeed: 50

}
var typed = new Typed(".words", options);


function timeOutDelay(x){
  var k = setTimeout(smoothScroll, 350);
}
//smooooooth scroollllinnnggggg
const smoothScroll = function(target = document.getElementById('projects')){
  const MIN_PIXELS_PER_STEP = 16;
  const MAX_SCROLL_STEPS = 30;
  let scrollContainer = target;

  do{
    scrollContainer = scrollContainer.parentNode;
    if(!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  let targetY = 0;

  do{
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  }while (target = target.offsetParent);

  let pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP, (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

  let stepFunc = function(){
    scrollContainer.scrollTop = Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

    if(scrollContainer.scrollTop >= targetY){
      return; 
    }

    window.requestAnimationFrame(stepFunc);
  };

  window.requestAnimationFrame(stepFunc)

};




//open and close sidebar
function openSlideMenu() {
  document.getElementById('side-menu').style.width = "60%";
}

function closeSlideMenu() {
  console.log('its closing')
  document.getElementById('side-menu').style.width = "0";

}

// shift work belt left and right 
  const thumb = document.querySelectorAll('.pUnit');
  
  Array.from(thumb).forEach(e => {
    e.addEventListener('click', function(){
    document.getElementById('pBelt').style.left = "-100%";
    document.getElementById('wContainer').style.display = "block";
    openContent(e)
    })
  });


const backArrow =  document.getElementById('work-return');

 backArrow.addEventListener('click', function(){
    document.getElementById('pBelt').style.left = "0%";

    setTimeout(function(){
      document.getElementById('wContainer').style.display = "none";
    },400);

    closeAllTabContent()
  });

// load work based on thumbnail name/class

function workLoad(){
  Array.from(thumb).forEach(e => {
    e.addEventListener('click', function(){

      let spinner = "<div class='loader'> Loading...</div>",
          newHTTML = "";

    })
  })
}

function closeAllTabContent(){
  let tabContent = document.getElementsByClassName("tabcontent");
Array.from(tabContent).forEach(e => {
  e.style.display = "none";
  
})
};



function openContent(e){
 let attr = e.getAttribute('data-project');
 document.getElementById(attr).style.display = "block";
}
