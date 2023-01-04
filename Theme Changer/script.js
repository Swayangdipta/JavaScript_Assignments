let currentTheme = "light";
let theme = [{
    text: "#fff",
    text2: "#000",
    bodyBg: "rgb(213, 213, 213)",
    projectBg: "rgb(113, 255, 134)",
    btnBg: "#000",
    shadow: "0px 3px 18px rgb(91, 91, 91)"
},{
    text: "#000",
    text2: "#fff",
    bodyBg: "#444",
    projectBg: "#111",
    btnBg: "#fff",
    shadow: "0px 3px 18px #eee"
}]

const toggleTheme = () => {
    if(currentTheme === "light"){
        document.querySelector('body').style.background = theme[1].bodyBg;
        document.querySelector('.projectTitle').style.background = theme[1].projectBg;
        document.querySelector('.projectTitle').style.boxShadow = theme[1].projectBg;
        document.querySelector('.projectTitle').style.color = theme[1].text2;
        document.querySelector('.changerWrapper').style.color = theme[1].text;
        document.querySelector('.changerWrapper').style.background = theme[1].btnBg;
        document.querySelectorAll('.card').forEach(card => {
            card.style.background = theme[1].projectBg;
            card.style.color = theme[1].text2;
        })
        document.querySelector('.changerText').textContent = "Light";
        currentTheme = "dark";
    }else{
        document.querySelector('body').style.background = theme[0].bodyBg;
        document.querySelector('.projectTitle').style.background = theme[0].projectBg;
        document.querySelector('.projectTitle').style.boxShadow = theme[0].projectBg;
        document.querySelector('.projectTitle').style.color = theme[0].text2;
        document.querySelector('.changerWrapper').style.color = theme[0].text;
        document.querySelector('.changerWrapper').style.background = theme[0].btnBg;
        document.querySelectorAll('.card').forEach(card => {
            card.style.background = theme[0].projectBg;
            card.style.color = theme[0].text2;
        })
        document.querySelector('.changerText').textContent = "Dark";
        currentTheme = "light";
    }
}