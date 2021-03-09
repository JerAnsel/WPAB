function storeData(elem) {
    data = {};
    sessionStorage.setItem('artist', elem.getElementsByClassName('artist')[0].innerText);
    sessionStorage.setItem('src', elem.getElementsByTagName('img')[0]['src']);
    sessionStorage.setItem('title', elem.getElementsByClassName('info')[0].textContent.split('.')[1]);
    sessionStorage.setItem('location', document.getElementsByClassName('location')[0].textContent); // Make sure this is useable
    sessionStorage.setItem('gallery-type', document.getElementsByClassName('location')[0].getElementsByClassName('loc-item')[0].textContent);
    
}