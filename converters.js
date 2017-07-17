'use strict';

export function valueToPosition(value, valuesArray, sliderLength) {
  var arrLength;
  var index = valuesArray.indexOf(value);

  if (index === -1) {
    //console.log('Invalid value, array does not contain: ', value);
    return null;
  } else {
    arrLength = valuesArray.length - 1;
    return sliderLength * index / arrLength;
  }
}

export function positionToValue(position, valuesArray, sliderLength) {
  var arrLength;
  var index;

  if (position < 0 || sliderLength < position) {
    //console.log('invalid position: ', position);
    return null;
  } else {
    arrLength = valuesArray.length - 1;
    index = arrLength * position / sliderLength;
    return valuesArray[Math.round(index)];
  }
}

export function createArray(start, end, step) {
  var i;
  var length;
  var direction = start - end > 0 ? -1 : 1;
  var result = [];
  if (!step) {
    //console.log('invalid step: ', step);
    return result;
  } else {
    // position will be between 0 and step
    var minp = 0;
    var maxp = step;

    // The result should be between start an end
    var minv = Math.log(start <= 0 ? 1 : start);
    var maxv = Math.log(end);

    // calculate adjustment factor
    var scale = (maxv - minv) / (maxp - minp);
    
    for (i = 0; i < step; ++i) {
      result.push(Math.round(Math.exp(minv + scale * (i - minp))));
    }
    result.unshift(start);
    result.push(end);
    
    return result;
  }
}
