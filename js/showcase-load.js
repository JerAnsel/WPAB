function showcase_load(){
    let artist = sessionStorage.getItem('artist');
    let src = sessionStorage.getItem('src');
    let title = sessionStorage.getItem('title');
    let location = sessionStorage.getItem('location');
    let gallery_type = sessionStorage.getItem('gallery-type'); 
    
    let showcase_div = document.getElementsByClassName('showcase')[0];
    let img = showcase_div.getElementsByTagName('img')[0];
    img.src = src;
    let artist_elem = showcase_div.getElementsByClassName('artist')[0];
    artist_elem.innerHTML = artist;
    title = document.createTextNode(title);
    artist_elem.parentElement.appendChild(title);
    console.log(location);
    
}