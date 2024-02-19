let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(lists) {
    let temp = []
    for(k = 1; k < lists.length; k++) {
        for(i = 0; i < lists[k].length; i++) {
            temp.push(lists[k[i]]);
        }
    }
    return lists[0].concat(temp)
}


// → [1, 2, 3, 4, 5, 6]