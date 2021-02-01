const projects = document.querySelectorAll('.project'),
burger = document.querySelector('.burger'),
list = document.querySelector('.nav_list'),
list_item = document.querySelectorAll('.nav_link'),
butttons = document.querySelectorAll('.coding_btn');
burger.addEventListener('click',showNav);
butttons.forEach(item => item.addEventListener('click',filterProjects));

// projects.forEach(item=>{item.addEventListener('mouseenter',show_more_project_info),item.addEventListener('mouseleave',hide_project_info)});
// function show_more_project_info(e){
//     e.target.children[0].classList.toggle('visible');
// }
// function hide_project_info(e){
//     e.target.children[0].classList.toggle('visible');
// }
function showNav(){
    for(i = 0; i < list_item.length;i++){
        list_item[i].classList.toggle('mobile_visible');
        list_item[i].style.transition = `transform .5s ${i / 10}s ease-in-out`;
    }
    animateBurger();
}
function animateBurger(){
    let lines = document.querySelectorAll('.line');
    lines.forEach(item=>item.classList.toggle('rotated'));  
}
function filterProjects(e){
    let value = e.target.dataset.val;
    butttons.forEach(btn=>btn.classList.remove('active'))
    e.target.classList.add('active');
    if(value == 'all'){
        projects.forEach(item => item.style.display = 'flex');
    }else if(value == 'angular'){
        projects.forEach(item => {
            item.classList.contains('angular') ? item.style.display = 'flex' : item.style.display = 'none';
        });
    }else if(value == 'javascript'){
        projects.forEach(item => {
            item.classList.contains('javascript') ? item.style.display = 'flex' : item.style.display = 'none';
        });
    }else{
        projects.forEach(item => {
            item.classList.contains('wordpress') ? item.style.display = 'flex' : item.style.display = 'none';
        });
    }
}