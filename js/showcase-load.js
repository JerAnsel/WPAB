function showcase_load(){
    let artist = sessionStorage.getItem('artist');
    let src = sessionStorage.getItem('src');
    let title = sessionStorage.getItem('title');
    let location = sessionStorage.getItem('location');
    let gallery_type = sessionStorage.getItem('gallery-type'); 
    
    let thumb = document.getElementsByClassName('thumb-container')[0];
    let img = thumb.getElementsByTagName('img')[0];
    img.src = src;
    let artist_elem = thumb.getElementsByClassName('artist')[0];
    artist_elem.innerHTML = artist;
    title = document.createTextNode(title);
    artist_elem.parentElement.appendChild(title);
    console.log(location);
    
}