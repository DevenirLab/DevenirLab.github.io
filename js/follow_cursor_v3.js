const cursor = document.getElementById('cursor');
const cursorBorder = document.getElementById('cursor-border');
/*
https://codingartistweb.com/2023/09/custom-cursor/
*/
let cursorX = 0,
    cursorY = 0,
    borderX = 0,
    borderY = 0;
let deviceType = '';
//check if it is a touch device
const isTouchDevice = () => {
    try {
        document.createEvent('TouchEvent');
        deviceType = 'touch';
        return true;
    } catch (e) {
        deviceType = 'mouse';
        return false;
    }
};
//move
const move = (e) => {
    cursorX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    cursorY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
};

document.addEventListener('mousemove', (e) => {
    move(e);
});
document.addEventListener('touchmove', (e) => {
    move(e);
});
document.addEventListener('touchend', (e) => {
    //e.preventDefault();
    move(e);
});

document.addEventListener('click', (e) => {
    //e.preventDefault();
    //console.log("clicked!!", e.target);
    cursor.classList.add('clickEffect');
    setTimeout(() => {
        cursor.classList.remove('clickEffect');
    }, "2000");
});

let HoverElementList = document.querySelectorAll('a, button, summary');

document.addEventListener('mouseover', (e) => {
    HoverElementList.forEach(function (HoverElement) {
        if (HoverElement.matches(':hover')) {
            cursor.classList.add('mouseover');
            cursorBorder.classList.add('mouseover');
            //console.log("mouseover!!", e.target);

            HoverElement.addEventListener('mouseout', (e) => {
                cursorBorder.classList.remove('mouseover');
                cursor.classList.remove('mouseover');
            })
        }
    })
});

//animate border
const borderAnimation = () => {
    const gapValue = 5;
    borderX += (cursorX - borderX) / gapValue;
    borderY += (cursorY - borderY) / gapValue;
    cursorBorder.style.left = `${borderX}px`;
    cursorBorder.style.top = `${borderY}px`;
    requestAnimationFrame(borderAnimation);
};

requestAnimationFrame(borderAnimation);