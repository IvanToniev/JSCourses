var domModule = (function() {
    var buffer = document.createDocumentFragment();

    function appendChild(element, selector) {
        var collection = document.querySelectorAll(selector);
        for (var count = 0; count < collection.length; count++) {
            collection[count].appendChild(element);
        }
    }


function removeChild(selector, elementSelector) {
    var collection = document.querySelectorAll(selector);
    for (var count = 0; count < collection.length; count++) {
        var elementCollection = collection[count].querySelectorAll(elementSelector);
        for (var position = 0; position < elementCollection.length; position++) {
            collection[count].removeChild(elementCollection[position]);
        }
    }
}

function addHandler(selector, ev, func) {
    var collection = document.querySelectorAll(selector);
    for (var count = 0; count < collection.length; count++) {
        collection[count]['on' + ev] = func;
    }
}

function appendToBuffer(selector, element) {
    buffer.appendChild(element);
    var collection = buffer.querySelectorAll(selector);
    if (collection.length === 100) {
        for (var count = 0; count < 100; count++) {
            document.body.appendChild(collection[count]);
            buffer.removeChild(collection[count]);
        }
    }
}

function getElement(selector) {
    var collection = document.querySelectorAll(selector);
    return collection;
}

return {
    appendChild: appendChild,
    removeChild: removeChild,
    addHandler: addHandler,
    appendToBuffer: appendToBuffer,
    getElement: getElement
};
})();