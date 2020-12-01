let projects = document.querySelectorAll('.project');
let burger = document.querySelector('.burger');
let list = document.querySelector('.nav_list')
burger.addEventListener('click',showNav);
projects.forEach(item=>{item.addEventListener('mouseenter',show_more_project_info),item.addEventListener('mouseleave',hide_project_info)});
function show_more_project_info(e){
    e.target.children[0].classList.toggle('visible');
}
function hide_project_info(e){
    e.target.children[0].classList.toggle('visible');
}
function showNav(){
    list.classList.toggle('mobile-visible');
    animateBurger();
}
function animateBurger(){
    let lines = document.querySelectorAll('.line');
    lines.forEach(item=>item.classList.toggle('rotated'));  
}