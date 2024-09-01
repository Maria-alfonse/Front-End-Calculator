function add(x){
    let y = document.getElementById("display").value += x;
    y.value =+ x;

}
function ac(){
    document.getElementById('display').value = '';
}
function de(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
}
function eq(){
    console.log( eval(document.getElementById('display').value));
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

let darkMode = false;

function mode() {
    const body = document.body;
    const header = document.getElementById("header");
    const container = document.getElementsByClassName("container")[0];
    const calc= document.getElementsByClassName("calc")[0]; 
    const modeButton = document.getElementById("mode");
    

    if (!darkMode) {
        body.style.background = "rgb(30, 25, 25)";
        header.style.background = "rgb(45, 45, 45)";
        container.style.background = "rgb(45, 45, 45)";
        calc.style.background = "#0c1a2f";
        modeButton.style.background = "#bbb1b1";
        modeButton.style.color = "rgb(30, 25, 25)";
        modeButton.textContent = "Light Mode";
        const darkicon = document.getElementById("dark_icon");
        darkicon.style.display = "none";

        const lighticon = document.getElementById("light_icon");
        lighticon.style.display = "flex";
    } else {
        body.style.background = "#fff";
        header.style.background = "var(--background)";
        container.style.background = "var(--background)";
        calc.style.background = "#426497";
        modeButton.style.background = "rgb(30, 25, 25)";
        modeButton.style.color = "#bab4b4";
        modeButton.textContent = "Dark Mode";
        const lighticon = document.getElementById("light_icon");
        lighticon.style.display = "none";
        
        const darkicon = document.getElementById("dark_icon");
        darkicon.style.display = "flex";
    }

    darkMode = !darkMode;
}
