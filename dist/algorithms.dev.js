"use strict";

var linear_search = function linear_search(list, target) {
  // Returns the index of the target in the list if found else returns none
  for (var i = 0; i < list.length; i++) {
    if (list[i].target === target) {
      return i;
    } else {
      return null;
    }
  }

  var verify = index = function (_index) {
    function index() {
      return _index.apply(this, arguments);
    }

    index.toString = function () {
      return _index.toString();
    };

    return index;
  }(function () {
    if (index != null) {
      console.log("Target found at ".concat(index, " "), index);
    } else {
      console.log("Target not at list ");
    }
  });

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = linear_search(numbers, 12);
  verify(result);
};