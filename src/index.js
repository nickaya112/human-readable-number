module.exports = function toReadable (number) {

  if (number === 0) {
    return 'zero';
  }
  let arr = String(number).split('').map((item) => +item);

  let strRes = '';
  if (arr[arr.length - 1] !== 0) {
    strRes = numToStr(arr[arr.length - 1]);
  }

  if (arr[arr.length - 2] === 1) {
    strRes = tenToStr(arr[arr.length - 1])
  }
  if (arr[arr.length - 2] > 1) {
    if (strRes !== '')  {
      strRes = `${dozensToStr(arr[arr.length - 2])} ${strRes}`;
    }
    else {
      strRes = dozensToStr(arr[arr.length - 2]);
    }
  }

  if (arr[arr.length - 3] > 0) {
    if (strRes === '') {
      strRes = `${numToStr(arr[arr.length - 3])} hundred`;
    } else {
      strRes = `${numToStr(arr[arr.length - 3])} hundred ${strRes}`;
    }
  }

  function numToStr(num) {
    const arrNums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return arrNums[num];
  }

  function tenToStr(num) {
    const arrNums = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return arrNums[num]
  }

  function dozensToStr(num) {
    const arrNums = [null ,null ,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return arrNums[num];
  }
  return strRes;
}

