function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500); //指定500ms后调用函数
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
} // 在小于10的数字前加一个‘0’
function search() {
  let v = document.getElementById("obj");
  //location.href = "http://www.baidu.com/baidu?wd=" + v.value;
  window.open("http://www.baidu.com/baidu?wd=" + v.value);
}
