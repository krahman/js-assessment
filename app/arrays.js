
exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf : function(arr, item) {

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  sum: function(arr) {
    var sum = 0;
    
    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },
  remove: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++ ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },
  removeWithoutCopy: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++ ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  }

};