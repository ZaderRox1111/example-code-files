const express = require('express');
let app = express();
const port = 8080;

var listening = (portNum) => {
    console.log(`Currently listening on port: ${portNum}. Access it here: http://localhost:${portNum}`);

    let index = 0;
    let answerArr = [];
    const localObject = {
        first: {
            number: 17
        },
        second: {
            number: -35.8
        }
    }

    Object.values(localObject).forEach(value => {
        answerArr[index] = (value.number + 1.0) / (Math.random() * value.number);
        index++;
    });

    bubbleSort(answerArr, 2);
}

const swap = (arr, firstIndex, secondIndex) => {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

const bubbleSort = (arr, size) => {
    for (var outIndex = 0; outIndex < size - 1; outIndex++) {
        for (var inIndex = 0; inIndex < size - outIndex - 1; inIndex++) {
            if (arr[inIndex] > arr[inIndex + 1]) swap(arr, inIndex, inIndex + 1);
        }
    }
}

app.listen(port, listening(port));