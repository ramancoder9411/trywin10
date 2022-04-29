// toggle start menu on click 

startmenu = document.getElementById("startmenu");
taskbar = document.getElementById("taskbar");
taskbar.addEventListener("click", () => {
    if (startmenu.style.bottom == "5vh") {
        startmenu.style.bottom = "-150vh"
    }
    else {
        startmenu.style.bottom = "5vh"
    }
})
startmenu.addEventListener("click", () => {
    alert("It's just a demo of windows 10 you can't use windows application on browsers , may be you can in the future 😊")
})

// open notepad on click 
// Under construction
// click = document.getElementById("click_me")
// img = document.getElementById("img_center")
// click.addEventListener("click", () => {
//     console.log("ho")
//     if(img.style.display == "flex"){
//         console.log("hoooo")
//         img.style.display = "none";

//     }
//     else if (img.style.display =="none") {
//         img.style.display = "flex";
//         // img.style.justifyContent = "center";
//         // img.style.alignContent = "center";
//     }
    
// })


// alerting the user on click on the desktop 
desktop = document.getElementsByClassName("container")[0]
desktop.addEventListener("click" , ()=>{
    alert("This is just a demo , you can't access desktop in presert , may be later . (●'◡'●)")
})