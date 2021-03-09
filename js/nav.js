function toggleNav() {
    let links = document.getElementsByClassName("links")[0];
    let display = links.style.display;
    // console.log(display);
    if(display == "block"){
        links.style.display = "none";
    }

    else {
        links.style.display = "block";
    }
}