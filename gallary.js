let photoInputEl = findInputElement();
let photosContainerEl = findPhotosContainer();
var imagesUrls = []
bindEnterClick(photoInputEl, photosContainerEl, imagesUrls);
restorePhotos(photosContainerEl, imagesUrls);


function findInputElement () {
    return document.querySelector('.js-new-photo');
};

function findPhotosContainer () {
    return document.querySelector('.js-photos');
};

function bindEnterClick(photoInputEl, photosContainerEl, imagesUrls) {
    photoInputEl.addEventListener('keyup', (e) => {
        if (e.code == "Enter") {
            // get url
            var src = photoInputEl.value;
            // create img with this url as src
            // create li wuth this img inside
            var li = document.createElement('li');
            li.innerHTML = `<img src="${src}"/>`;
            // append this li to ul
            photosContainerEl.append(li);
            // push url to array
            imagesUrls.push(src);
            // save to localStorage
            localStorage.setItem('gallery', JSON.stringify(imagesUrls));
        };
    });
};

function restorePhotos(photosContainerEl, imagesUrls) {
    let photosStr = localStorage.getItem('gallery');
    if(!!photosStr) {
        let photos = JSON.parse(photosStr);
        photos.forEach(src => {
            imagesUrls.push(src);
            var li = document.createElement('li');
            li.innerHTML = `<img src="${src}"/>`;
            photosContainerEl.append(li);
        });
    };
};