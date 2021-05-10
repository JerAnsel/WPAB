function showcase_load(){
    let artist = sessionStorage.getItem('artist');
    let src = sessionStorage.getItem('src');
    let title = sessionStorage.getItem('title');
    let age = sessionStorage.getItem('age')
    let location = sessionStorage.getItem('location');
    let gallery_type = sessionStorage.getItem('gallery-type'); 
    
    let showcase_div = document.getElementsByClassName('showcase')[0];
    let img = showcase_div.getElementsByTagName('img')[0];
    img.src = src;
    let split_src = src.split('-')
    if (split_src[split_src.length - 1].split('.')[0] == '%20v'){
        img.classList.add('showcase-img-v')
    }

    else {
        img.classList.add('showcase-img-h')
    }
    let artist_elem = showcase_div.getElementsByClassName('artist')[0];
    artist_elem.innerHTML = artist;
    let age_elem = showcase_div.getElementsByClassName('age')[0];
    age_elem.innerHTML = age;
    let title_elem = showcase_div.getElementsByClassName('title')[0];
    title_elem.innerHTML = title;
}