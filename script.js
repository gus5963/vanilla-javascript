const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLR = "rgb(26, 188, 156)";

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("dblclick", handleClick);
}
init();
