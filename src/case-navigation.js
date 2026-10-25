const links=[...document.querySelectorAll('.case-section-nav a')];
const sections=links.map(a=>document.querySelector(a.hash)).filter(Boolean);
function updateActive(){const offset=(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)+(parseFloat(getComputedStyle(sections[0]).scrollMarginTop)||0)+4;let active=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=offset)active=section;}for(const a of links){if(a.hash==='#'+active.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}
let pending=false;
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{updateActive();pending=false;});}},{passive:true});
window.addEventListener('resize',updateActive);
updateActive();
