const btnBackground = document.querySelector(".changebackgroundcolor");
const btnColor = document.querySelector(".changetextcolor");
const btnText = document.querySelector(".changetextcontent");


btnBackground.addEventListener("click",btnBackgroundFun);
btnColor.addEventListener("click",btnColorFun);
btnText.addEventListener("click",btnTextFun);

const content =["BLUE","YELLOW","RED","PINK","PURPLE"];

function btnBackgroundFun() {
    document.body.style.backgroundColor =  giveMeRandomeColor();
}

function btnColorFun() {
    btnColor.style.color = giveMeRandomeColor();
}

function btnTextFun() {
    btnText.innerHTML = content[giveMeRandomeIndex()];
}

function giveMeRandomeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;

}

function giveMeRandomeIndex(){
    return Math.floor(Math.random() * content.length);
}