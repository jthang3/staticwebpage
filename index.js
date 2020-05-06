window.addEventListener("scroll",()=>{
    //targeting elements from html.
    let x = document.getElementsByClassName("head").item(0);
    let pos = document.getElementsByClassName("free-trial")[0];
    
    //ternary if statements to see add and remove attribute base off on pageYoffset value.
    (window.pageYOffset == 0) ? x.classList.remove("sub-head"): x.classList.add("sub-head");
    if(window.pageYOffset >= 661){
        pos.setAttribute("id","free");
    }
    else{
        pos.removeAttribute("id","free");
    }
},false);

// if(window.pageYOffset >= 661 && !(x.classList.contains("free-trial"))){
    //     var freeTrial = document.createElement("div");
    //     var freeWord = document.createElement("h3");
    //     var node = document.createTextNode("START YOUR FREE TRIAL");
    //     freeWord.appendChild(node);
    //     freeTrial.appendChild(freeWord);
    //     freeTrial.classList.add("free-trial");
    //     console.log(freeTrial);
    //     let firstChild = x.firstElementChild;
    //     let secondChild = (firstChild.nextElementSibling);
    //     let finalNode = x.insertBefore(freeTrial,secondChild);
    //     console.log("It does not contain");
    // }