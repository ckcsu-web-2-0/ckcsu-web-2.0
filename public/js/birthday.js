var birthday_menubox = document.getElementById("birthday_area"); //area为菜单栏的id
var birthday_cli_on = document.getElementById("birthday_on"); //on为按钮
var birthday_flag = false, birthday_timer = null, birthday_initime = null, birthday_r_len = 0;

if(birthday_menubox.style.right=== 0){
 birthday_flag = true;
 }
else{
 birthday_flag = false;
 }
birthday_cli_on.onclick = function () {
 //为on按钮绑定click事件
 clearTimeout(birthday_initime);
 //根据状态birthday_flag执开展开收缩
 if (birthday_flag) {
  birthday_r_len = 0;
  birthday_timer = setInterval(birthday_slideright, 10);
 } else {
  birthday_r_len = -160;
  birthday_timer = setInterval(birthday_slideleft, 10);
 }
}

//展开
function birthday_slideright() {
 if (birthday_r_len <= -160) {
  clearInterval(birthday_timer);
  birthday_flag = !birthday_flag;
  return false;
 }else{
  birthday_r_len -= 5;
  birthday_menubox.style.right = birthday_r_len + 'px';
 }
}
//收缩
function birthday_slideleft() {
 if (birthday_r_len >= 0) {
  clearInterval(birthday_timer);
  birthday_flag = !birthday_flag;
  return false;
 } else {
  birthday_r_len += 5;
  birthday_menubox.style.right = birthday_r_len + 'px';
 }
} 