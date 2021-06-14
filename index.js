function useDebounce(func, wait, immediate) {
  var timeout;
  return function () {
    var that = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(that, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(that, args);
    }
  };
}

export { useDebounce };