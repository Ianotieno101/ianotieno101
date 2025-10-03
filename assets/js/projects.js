
let slider = document.querySelector('.slider');
let form = document.querySelector('.form');
let mouseDownAt = 0;
let left = 0;

slider.onmousedown = (e) => {
    mouseDownAt = e.clientX;
}

slider.onmouseup = () => {
    mouseDownAt = 0;
    slider.style.userSelect = 'unset';
    slider.style.cursor = 'unset';
    form.style.pointerEvents = 'unset';
    form.classList.remove('left')
    form.classList.remove('right');
}

slider.onmousemove = (e) => {
    if (mouseDownAt === 0) return;
    slider.style.userSelect = 'none';
    slider.style.cursor = 'grab';
    form.style.pointerEvents = 'none';

    if(e.clientX >mouseDownAt) {
        form.classList.add("left");
        form.classList.remove("right");
    }else if (e.clientX < mouseDownAt) {
        form.classList.add("right");
        form.classList.remove("left");
    }
    //Increase or decrease the speed of the slider
    // by changing the value of "speed"
    let speed = 1.5;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form.offsetwidth - slider.offsetWidth;

    if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
        form.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }
}
