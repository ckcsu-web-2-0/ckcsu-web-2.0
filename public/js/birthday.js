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
  birthday_r_len = -260;
  birthday_timer = setInterval(birthday_slideleft, 10);
 }
}

var curDate = new Date();

const getDaysDif = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

function ckcPerson(name, depart, birthMonth, birthDay){
    this.name = name;
    this.depart = depart;
    this.birthday = new Date(curDate.getFullYear().toString() + "-" + birthMonth + "-" + birthDay);
}

var allPerson = new Array(145);
allPerson[0] = new ckcPerson("马昕", "秘书处", 11, 30);
allPerson[1] = new ckcPerson("龚梓傲", "秘书处", 11, 4);
allPerson[2] = new ckcPerson("杨以恒", "秘书处", 8, 26);
allPerson[3] = new ckcPerson("张乃月", "秘书处", 12, 23);
allPerson[4] = new ckcPerson("鲁莹", "秘书处", 5, 8);
allPerson[5] = new ckcPerson("廖楚阳", "秘书处", 1, 15);
allPerson[6] = new ckcPerson("徐宇航", "秘书处", 3, 21);
allPerson[7] = new ckcPerson("周逸飞", "秘书处", 9, 28);
allPerson[8] = new ckcPerson("王子奇", "秘书处", 12, 24);
allPerson[9] = new ckcPerson("卫高祺", "秘书处", 6, 6);
allPerson[10] = new ckcPerson("陈淦豪", "秘书处", 5, 9);
allPerson[11] = new ckcPerson("薄上一", "秘书处", 9, 23);
allPerson[12] = new ckcPerson("吴湘潆", "宣网", 10, 13);
allPerson[13] = new ckcPerson("马子懿", "宣网", 11, 29);
allPerson[14] = new ckcPerson("钟浚豪", "宣网", 7, 16);
allPerson[15] = new ckcPerson("王遗琪", "宣网", 8, 11);
allPerson[16] = new ckcPerson("陈弘泽", "宣网", 12, 21);
allPerson[17] = new ckcPerson("张慧至", "宣网", 8, 11);
allPerson[18] = new ckcPerson("薛婧", "宣网", 3, 13);
allPerson[19] = new ckcPerson("许嘉禾", "宣网", 3, 4);
allPerson[20] = new ckcPerson("吴林林", "宣网", 6, 14);
allPerson[21] = new ckcPerson("尚嘉伊", "宣网", 9, 8);
allPerson[22] = new ckcPerson("胡启瑞", "宣网", 2, 21);
allPerson[23] = new ckcPerson("关博仁", "宣网", 5, 30);
allPerson[24] = new ckcPerson("王非凡", "宣网", 10, 26);
allPerson[25] = new ckcPerson("王钰凯", "宣网", 2, 19);
allPerson[26] = new ckcPerson("潘嘉骏", "宣网", 4, 6);
allPerson[27] = new ckcPerson("廖楚阳", "宣网", 1, 15);
allPerson[28] = new ckcPerson("刘宇骄", "宣网", 9, 11);
allPerson[29] = new ckcPerson("余童", "宣网", 5, 18);
allPerson[30] = new ckcPerson("朱柏玉", "宣网", 1, 16);
allPerson[31] = new ckcPerson("王继麟", "宣网", 3, 26);
allPerson[32] = new ckcPerson("黄文翀", "宣网", 5, 17);
allPerson[33] = new ckcPerson("赵安可", "宣网", 4, 16);
allPerson[34] = new ckcPerson("孙思颖", "发创", 7, 30);
allPerson[35] = new ckcPerson("雷沁昕", "发创", 12, 20);
allPerson[36] = new ckcPerson("廖栩烽", "发创", 4, 14);
allPerson[37] = new ckcPerson("邹乐怡", "发创", 4, 15);
allPerson[38] = new ckcPerson("胡祺睿", "发创", 3, 18);
allPerson[39] = new ckcPerson("朱文青", "发创", 1, 27);
allPerson[40] = new ckcPerson("王悦飞", "发创", 12, 26);
allPerson[41] = new ckcPerson("刘小康", "发创", 5, 10);
allPerson[42] = new ckcPerson("鲁莹", "发创", 5, 8);
allPerson[43] = new ckcPerson("朱珈慧", "发创", 11, 21);
allPerson[44] = new ckcPerson("孙潇", "发创", 2, 9);
allPerson[45] = new ckcPerson("刘家耕", "发创", 3, 1);
allPerson[46] = new ckcPerson("曾逸", "发创", 5, 20);
allPerson[47] = new ckcPerson("洪浩荣", "发创", 2, 1);
allPerson[48] = new ckcPerson("郑惜匀", "发创", 9, 26);
allPerson[49] = new ckcPerson("曹田雨", "发创", 4, 17);
allPerson[50] = new ckcPerson("缪可嘉", "发创", 5, 28);
allPerson[51] = new ckcPerson("王嘉豪", "权服", 11, 21);
allPerson[52] = new ckcPerson("王敬锴", "权服", 7, 28);
allPerson[53] = new ckcPerson("向泽", "权服", 6, 27);
allPerson[54] = new ckcPerson("王海敏", "权服", 2, 2);
allPerson[55] = new ckcPerson("孟舒涵", "权服", 1, 9);
allPerson[56] = new ckcPerson("郑宁宁", "权服", 12, 2);
allPerson[57] = new ckcPerson("朱哲彦", "权服", 12, 6);
allPerson[58] = new ckcPerson("袁鸣昊", "权服", 12, 24);
allPerson[59] = new ckcPerson("李欣悦", "权服", 2, 21);
allPerson[60] = new ckcPerson("宋佳铮", "权服", 2, 27);
allPerson[61] = new ckcPerson("邓千寻", "权服", 4, 16);
allPerson[62] = new ckcPerson("黄思成", "权服", 8, 1);
allPerson[63] = new ckcPerson("李金天", "权服", 8, 16);
allPerson[64] = new ckcPerson("张文", "权服", 10, 7);
allPerson[65] = new ckcPerson("任卓芸", "权服", 10, 19);
allPerson[66] = new ckcPerson("胡婧怡", "权服", 1, 7);
allPerson[67] = new ckcPerson("李傲雪", "权服", 1, 30);
allPerson[68] = new ckcPerson("陈淦豪", "权服", 5, 9);
allPerson[69] = new ckcPerson("张思琪", "文艺", 4, 27);
allPerson[70] = new ckcPerson("王嘉豪", "文艺", 11, 21);
allPerson[71] = new ckcPerson("缪东来", "文艺", 8, 16);
allPerson[72] = new ckcPerson("张道泽", "文艺", 12, 4);
allPerson[73] = new ckcPerson("周一方", "文艺", 12, 11);
allPerson[74] = new ckcPerson("叶弘颖", "文艺", 4, 1);
allPerson[75] = new ckcPerson("高泽瑞", "文艺", 1, 12);
allPerson[76] = new ckcPerson("钱意纯", "文艺", 8, 7);
allPerson[77] = new ckcPerson("杨柳思", "文艺", 4, 10);
allPerson[78] = new ckcPerson("朱思睿", "文艺", 1, 22);
allPerson[79] = new ckcPerson("侯逸琳", "文艺", 9, 17);
allPerson[80] = new ckcPerson("李玥颖", "文艺", 11, 16);
allPerson[81] = new ckcPerson("钱欣", "文艺", 2, 16);
allPerson[82] = new ckcPerson("朱泳霏", "文艺", 10, 24);
allPerson[83] = new ckcPerson("李嘉仪", "文艺", 8, 1);
allPerson[84] = new ckcPerson("许若言", "文艺", 8, 22);
allPerson[85] = new ckcPerson("周逸杰", "文艺", 4, 3);
allPerson[86] = new ckcPerson("范耘溥", "文艺", 8, 1);
allPerson[87] = new ckcPerson("马靖凯", "文艺", 12, 26);
allPerson[88] = new ckcPerson("徐子轶", "文艺", 2, 19);
allPerson[89] = new ckcPerson("陈昊旻", "文艺", 1, 4);
allPerson[90] = new ckcPerson("侯子航", "文艺", 10, 1);
allPerson[91] = new ckcPerson("宗亦铭", "文艺", 5, 16);
allPerson[92] = new ckcPerson("楼傅亦成", "体育", 7, 14);
allPerson[93] = new ckcPerson("王嘉豪", "体育", 11, 21);
allPerson[94] = new ckcPerson("田磊原", "体育", 6, 28);
allPerson[95] = new ckcPerson("诸林瑜", "体育", 8, 28);
allPerson[96] = new ckcPerson("张璇", "体育", 5, 13);
allPerson[97] = new ckcPerson("陆颖杰", "体育", 8, 5);
allPerson[98] = new ckcPerson("蔡依琪", "体育", 6, 2);
allPerson[99] = new ckcPerson("刘俊麟", "体育", 5, 13);
allPerson[100] = new ckcPerson("徐若栩", "体育", 5, 20);
allPerson[101] = new ckcPerson("刘浩博", "体育", 10, 5);
allPerson[102] = new ckcPerson("黄倪远", "体育", 3, 13);
allPerson[103] = new ckcPerson("杨吉男", "体育", 10, 26);
allPerson[104] = new ckcPerson("陈治宪", "体育", 2, 21);
allPerson[105] = new ckcPerson("欧阳舒婷", "体育", 3, 29);
allPerson[106] = new ckcPerson("吕一夫", "体育", 4, 25);
allPerson[107] = new ckcPerson("卫高祺", "体育", 6, 6);
allPerson[108] = new ckcPerson("王迪萱", "学术", 11, 23);
allPerson[109] = new ckcPerson("张之昀", "学术", 5, 12);
allPerson[110] = new ckcPerson("崔栋禹", "学术", 9, 26);
allPerson[111] = new ckcPerson("李龙飞", "学术", 1, 14);
allPerson[112] = new ckcPerson("陈虹宇", "学术", 10, 18);
allPerson[113] = new ckcPerson("李奕", "学术", 2, 12);
allPerson[114] = new ckcPerson("陈可越", "学术", 12, 9);
allPerson[115] = new ckcPerson("邓宇真", "学术", 4, 3);
allPerson[116] = new ckcPerson("张皓祥", "学术", 10, 27);
allPerson[117] = new ckcPerson("叶之凡", "学术", 6, 4);
allPerson[118] = new ckcPerson("王书畅", "学术", 8, 4);
allPerson[119] = new ckcPerson("丛箫言", "学术", 4, 10);
allPerson[120] = new ckcPerson("顾小雨", "学术", 9, 27);
allPerson[121] = new ckcPerson("叶雨琪", "学术", 3, 20);
allPerson[122] = new ckcPerson("留誉", "学术", 4, 3);
allPerson[123] = new ckcPerson("付伟康", "学术", 1, 20);
allPerson[124] = new ckcPerson("王修远", "学术", 7, 2);
allPerson[125] = new ckcPerson("徐宇航", "学术", 3, 21);
allPerson[126] = new ckcPerson("戴蕙鲡", "外交", 2, 3);
allPerson[127] = new ckcPerson("倪小涵", "外交", 7, 26);
allPerson[128] = new ckcPerson("邓昀韵", "外交", 11, 17);
allPerson[129] = new ckcPerson("柴珧", "外交", 9, 8);
allPerson[130] = new ckcPerson("国奥", "外交", 5, 29);
allPerson[131] = new ckcPerson("姜一诺", "外交", 4, 29);
allPerson[132] = new ckcPerson("蓝钧溢", "外交", 7, 21);
allPerson[133] = new ckcPerson("楼亦涵", "外交", 11, 11);
allPerson[134] = new ckcPerson("翁心悦", "外交", 10, 19);
allPerson[135] = new ckcPerson("肖智尹", "外交", 11, 22);
allPerson[136] = new ckcPerson("袁泽清", "外交", 1, 11);
allPerson[137] = new ckcPerson("张嘉颢", "外交", 8, 24);
allPerson[138] = new ckcPerson("张明月", "外交", 3, 15);
allPerson[139] = new ckcPerson("张瑞妍", "外交", 7, 14);
allPerson[140] = new ckcPerson("张瑞影", "外交", 4, 20);
allPerson[141] = new ckcPerson("张镇坤", "外交", 10, 13);
allPerson[142] = new ckcPerson("郑思危", "外交", 4, 9);
allPerson[143] = new ckcPerson("周陈昊", "外交", 3, 14);
allPerson[144] = new ckcPerson("王子奇", "外交", 12, 24);

for(var i = 0; i < allPerson.length; i++){
    var restDay = getDaysDif(curDate, allPerson[i].birthday);
    if(restDay >= 0 && restDay < 15){
        outputBirth("距 " + allPerson[i].depart + " " + allPerson[i].name + " 的生日还有 " + parseInt(restDay) + "天！");
    }
}

function outputBirth(birthText){
    var frameLi = document.createElement("li");
    frameLi.innerHTML = birthText;
    var bodyFa = document.getElementById("birthday_menu_ul");
    bodyFa .appendChild(frameLi);
}

//展开
function birthday_slideright() {
 if (birthday_r_len <= -260) {
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