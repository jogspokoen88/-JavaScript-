//  find all stars
var stars = findAllStars();
// bind click listeners to stars
bindClickListener(stars);
// restore previous value
restorePreviousValue(stars);



function findAllStars() {
    let stars = document.querySelectorAll('.js-stars img');
    return stars;
};

function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            // remove all active classes
            let activeStars = document.querySelectorAll('.js-stars img.active');
            activeStars.forEach(star => star.classList.remove('active'));
            // add active class to clicked img and to prev img
            var clickedStar = e.currentTarget;
            var clickedImageIndex = 0;
            for (let i = 0; i < stars.length; i++) {
                var star = stars[i];
                star.classList.add('active');
                if (star === clickedStar) {
                    clickedImageIndex = i;
                    break;
                };
            };
            // saved clicked image order number
            localStorage.setItem('rating-value', clickedImageIndex);
        });
    });
};

function restorePreviousValue(stars) {
    var savedValue = localStorage.getItem('rating-value');
    if (!!savedValue) {
        savedValue = +savedValue
        for (let i = 0; i < stars.length; i++) {
            var star = stars[i];
            star.classList.add('active');
            if (i === savedValue) {
                break;
            };
        };
    };
};