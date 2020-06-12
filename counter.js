let counterWidgetEl = findWidgetElement();
let counterValueEl = findValueElement();
bindClickListener(counterWidgetEl, counterValueEl);
restorePreviousValue(counterValueEl);



function findWidgetElement() {
    return document.querySelector('.js-counter');
};

function findValueElement() {
    return document.querySelector('.js-counter-value');
};

function bindClickListener(counterWidgetEl, counterValueEl) {
    counterWidgetEl.addEventListener('click', () => {
        // increment counter and display new value       
        var currentValue = counterValueEl.innerHTML;
        currentValue++;
        // save to local storage
        localStorage.setItem("counter-value", currentValue);
        counterValueEl.innerHTML = currentValue;
    });
};

function restorePreviousValue(counterValueEl) {
    var savedCounterValue = localStorage.getItem("counter-value");
    if (!!savedCounterValue) {
        counterValueEl.innerHTML = savedCounterValue;
    };
};