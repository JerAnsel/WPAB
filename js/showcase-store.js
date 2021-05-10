function storeData(elem) {
    data = {};
    sessionStorage.setItem('artist', elem.getElementsByClassName('artist')[0].innerText);
    sessionStorage.setItem('src', elem.getElementsByTagName('img')[0]['src']);
    sessionStorage.setItem('title', elem.getElementsByClassName('info')[0].getElementsByClassName('title')[0].innerText);
    sessionStorage.setItem('age', elem.getElementsByClassName('info')[0].getElementsByClassName('age')[0].innerText);
    sessionStorage.setItem('location', document.getElementsByClassName('location')[0].textContent); // Make sure this is useable
    sessionStorage.setItem('gallery-type', document.getElementsByClassName('location')[0].getElementsByClassName('loc-item')[0].textContent);
    
}