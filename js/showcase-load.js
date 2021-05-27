function showcase_load_image(){
    let artist = sessionStorage.getItem('artist');
    let src = sessionStorage.getItem('src');
    let title = sessionStorage.getItem('title');
    let age = sessionStorage.getItem('age')
    
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
    
    let map = document.getElementsByClassName('map')[0];
    
    if (src.includes('Jerusalem')){
        map.setAttribute('src', '../outline-jerusalem.jpg')
    }
    else if (src.includes('Tel%20Aviv')){
        map.setAttribute('src', '../outline-tel-aviv.jpg')
    }
    else if (src.includes('Karmiel')){
        map.setAttribute('src', '../outline-Karmiel.jpg')
    }
    else if (src.includes('Otniel')){
        map.setAttribute('src', '../outline-otniel.jpg')
    }
    else if (src.includes('Shiloh')){
        map.setAttribute('src', '../outline-shiloh.jpg')
    }

    if (src.includes('Maus%20Art')){
        let link = document.createElement('a');
        link.setAttribute('href', 'https://www.aaciart.net/pen/');
        link.appendChild(document.createTextNode('Click here to see related essay.'));
        
        let info = document.getElementsByClassName('showcase-info')[0];
        info.appendChild(link);
    }
}

function showcase_load_essay(){

    let artist = sessionStorage.getItem('artist');
    let src = sessionStorage.getItem('src');
    console.log(src);

    function requestEssay(src) {
        var httpRequest;
        httpRequest = new XMLHttpRequest();      
        if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
        }
        httpRequest.onreadystatechange = function(){displayEssay(httpRequest);};
        httpRequest.open('GET', 'https://www.aaciart.net/pen/' + src, true);
		httpRequest.responseType = "document";
        httpRequest.send();
    }

    function displayEssay(httpRequest){

        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = httpRequest.responseXML;
				let content = response.getElementsByClassName('content')[0].innerHTML;
                document.getElementsByClassName('content')[0].innerHTML = content;
                        
            
            } 
            else {
                alert('There was a problem with the news request.');
            }
        }
    }

    requestEssay(src);

    let title = sessionStorage.getItem('title');
    let age = sessionStorage.getItem('age')
    
    let showcase_div = document.getElementsByClassName('showcase')[0];

    let artist_elem = showcase_div.getElementsByClassName('artist')[0];
    artist_elem.innerHTML = artist;
    let age_elem = showcase_div.getElementsByClassName('age')[0];
    age_elem.innerHTML = age;
    let title_elem = showcase_div.getElementsByClassName('title')[0];
    title_elem.innerHTML = title;

    
    let map = document.getElementsByClassName('map')[0];
    
    if (src.includes('Jerusalem')){
        map.setAttribute('src', '../outline-jerusalem.jpg')
    }
    else if (src.includes('Tel%20Aviv')){
        map.setAttribute('src', '../outline-tel-aviv.jpg')
    }
    
    if (title.includes('Maus Essay')){
        let link = document.createElement('a');
        link.setAttribute('href', 'https://www.aaciart.net/brush/galleryPaint_14_18.html');
        link.appendChild(document.createTextNode('Click here to see related essay.'));

        let info = document.getElementsByClassName('showcase-info')[0];
        info.appendChild(link);
    }
}