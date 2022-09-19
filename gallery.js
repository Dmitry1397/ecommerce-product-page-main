const thumbnail = document.querySelectorAll('#main-gallery .thumbnail-img img');
const mainPic = document.querySelector('#main-gallery #main-pic');

const thumbnailFull = document.querySelectorAll('.full-size-gallery .thumbnail-img img');
const mainPicFull = document.querySelector('.full-size-gallery #main-pic');

const previousBtn = document.querySelector('#arrow-left');
const nextBtn = document.querySelector('#arrow-right');
const fullSizeGallery = document.querySelector('.full-size-gallery');
const closeGalleryBtn = document.querySelector('#close-gallery');

let path;
let fullSize;
let index = 0;

thumbnail.forEach((element) => {
    element.addEventListener('click', () => {
        const src = element.getAttribute('src');
        path = src.split('/');
        fullSize = path[1].split('-');
        fullSize.pop();
        fullSize = 'images/' + fullSize.join('-') + '.jpg';
        mainPic.setAttribute('src', fullSize); 
        thumbnail.forEach((element) => {
            element.parentElement.setAttribute('class', 'thumbnail-img');
            element.removeAttribute('class', 'active');
        });
        element.setAttribute('class', 'active');
        element.parentElement.setAttribute('class', 'thumbnail-img active');
    })
})

thumbnailFull.forEach((element, id) => {
    element.addEventListener('click', () => {
        const src = element.getAttribute('src');
        path = src.split('/');
        fullSize = path[1].split('-');
        fullSize.pop();
        fullSize = 'images/' + fullSize.join('-') + '.jpg';
        mainPicFull.setAttribute('src', fullSize); 
        thumbnailFull.forEach((element) => {
            element.parentElement.setAttribute('class', 'thumbnail-img');
            element.removeAttribute('class', 'active');
        });
        element.setAttribute('class', 'active');
        element.parentElement.setAttribute('class', 'thumbnail-img active');
        index = id;
    })
})

nextBtn.addEventListener('click', () => {
    index++;
    if (index > 3) {
        index = 0
    };
    path = thumbnailFull[index].getAttribute('src');
    path = path.split('/');
    fullSize = path[1].split('-');
    fullSize.pop();
    fullSize = 'images/' + fullSize.join('-') + '.jpg';
    mainPicFull.setAttribute('src', fullSize); 
    
    thumbnailFull.forEach((element) => {
        element.parentElement.setAttribute('class', 'thumbnail-img');
        element.removeAttribute('class', 'active');
    });
    thumbnailFull[index].className = 'active';
    thumbnailFull[index].parentElement.setAttribute('class', 'thumbnail-img active');
})

previousBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = 3;
    };
    path = thumbnailFull[index].getAttribute('src');
    path = path.split('/');
    fullSize = path[1].split('-');
    fullSize.pop();
    fullSize = 'images/' + fullSize.join('-') + '.jpg';
    mainPicFull.setAttribute('src', fullSize); 
    
    thumbnailFull.forEach((element) => {
        element.parentElement.setAttribute('class', 'thumbnail-img');
        element.removeAttribute('class', 'active');
    });
    thumbnailFull[index].className = 'active';
    thumbnailFull[index].parentElement.setAttribute('class', 'thumbnail-img active');
})

mainPic.addEventListener('click', () => {
    fullSizeGallery.style.display = 'block'
    mainPicFull.src = mainPic.src;
    thumbnail.forEach((element, id) => {
        if (element.className === 'active') {
            index = id;
        }
    });
    
    thumbnailFull.forEach((element) => {
        element.parentElement.setAttribute('class', 'thumbnail-img');
        element.removeAttribute('class', 'active');
    });
    thumbnailFull[index].className = 'active';
    thumbnailFull[index].parentElement.setAttribute('class', 'thumbnail-img active');
});

closeGalleryBtn.addEventListener('click', () => {
    fullSizeGallery.style.display = 'none'
    thumbnailFull.forEach((element, id) => {
        if (element.className === 'active') {
            index = id;
        }
    });
    thumbnail.forEach((element) => {
        element.parentElement.setAttribute('class', 'thumbnail-img');
        element.removeAttribute('class', 'active');
    });
    thumbnail[index].className = 'active';
    thumbnail[index].parentElement.setAttribute('class', 'thumbnail-img active')
    mainPic.src = mainPicFull.src;
});
