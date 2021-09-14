function myEach(collection, callback) {
    const array = Object.values(collection);
    for (let i = 0; i < array.length; i ++) {
        callback(array[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const array = Object.values(collection);
    const newArray = [];
    for (let i = 0; i < array.length; i ++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const array = Object.values(collection);
    if (acc) {
        let value = acc;
        for (let i = 0; i < array.length; i ++) {
            value = callback(value, array[i]);
        }
        return value;
    } else {
        let value = array[0];
        for (let i = 1; i < array.length; i ++) {
            value = callback(value, array[i])
        }
        return value;
    }
}

function myFind(collection, predicate) {
    const array = Object.values(collection);
    for (let i = 0; i < array.length; i ++ ) {
        if (predicate(array[i])) { return array[i]};
    }

}

function myFilter(collection, predicate) {
    const array = Object.values(collection);
    const newArray = [];
    for (let i = 0; i < array.length; i ++) {
        if (predicate(array[i])) { newArray.push(array[i]) };
    }
    return newArray;
}

function mySize(collection) {
    const array = Object.values(collection);
    return array.length;
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    } else {
        return array[0];
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    } else {
        return array[array.length - 1];
    }
}

function myKeys(object) {
    const keys = [];
    for (const key in object) {
        keys.push(key);
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (const key in object) {
        values.push(object[key])
    }
    return values;
}