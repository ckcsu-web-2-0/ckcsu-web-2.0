function checkError(text) {
    document.getElementById("errText").innerHTML = text;
    return false;
}

function checkText(text) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] == '<'||text[i] == '>'||text[i] == '\\' || text[i] == '\'' || text[i] == '\"' || text[i] == '.' || text[i] == '$' || text[i] == '<' || text[i] == '>') {
            return '不允许出现字符 \'' + text[i] + '\'';
        }
    }
    return null;
}

function checkPhone(text) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] < '0' || text[i] > '9') {
            return '电话号码必须由阿拉伯数字构成！';
        }
    }
    if (text.length != 11) {
        return '电话号码必须是11位数！';
    }
    return null;
}

function checkFile(text) {
    if(!text)return null;
    let whiteList = new Array(".zip",".rar",".7z");
    s=text.slice(text.lastIndexOf("."))
    for(let x=0;x<whiteList.length;x++){
        if(whiteList[x]===s){
            return null;
        }
    }
    return '文件不合法: 上传文件扩展名必须为.zip/.rar/.7z'
}

function checkQQ(text) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] < '0' || text[i] > '9') {
            return 'QQ号必须由阿拉伯数字构成！';
        }
    }
    if (text.length > 12) {
        return 'QQ号不可能多于12位数！';
    }
    return null;
}

function checkDDL(date) {
    var time1 = new Date();
    var y2 = date.split("-")[0];
    var m2 = date.split("-")[1];
    var d2 = date.split("-")[2];
    var time2 = new Date(y2, m2 - 1, d2, 23, 59, 59);
    if (time1 - time2 > 0) return 'DDL不得早于下单时间！';
    else return null;
}

function checkPassword(pwd) {
    if (pwd.length < 8) {
        return '密码不得少于8位！';
    }
    haveNum = 0;
    haveLower = 0;
    haveUpper = 0;
    havePunc = 0;
    for (var i = 0; i < pwd.length; i++) {
        if (pwd[i] >= '0' && pwd[i] <= '9') {
            haveNum = 1;
        } else if (pwd[i] >= 'a' && pwd[i] <= 'z') {
            haveLower = 1;
        } else if (pwd[i] >= 'A' && pwd[i] <= 'Z') {
            haveUpper = 1;
        } else if (pwd[i] != '\\' && pwd[i] != '\'' && pwd[i] != '\"' && pwd[i] != '.' && pwd[i] == '$') {
            havePunc = 1;
        } else {
            return '密码只能由数字、英文字母、特殊符号（\\\'$.\"<>除外）组成！';
        }
    }
    all = haveNum + haveLower + haveUpper + havePunc;
    if (all < 2) {
        return '密码必须包含数字、小写字母、大写字母、特殊符号中的至少两种！';
    }
    return null;
}

function checkLogin() {
    if (loginform.login_username.value == "") {
        return checkError('用户名不能为空！');
    } else {
        errMsg = checkText(loginform.login_username.value);
        if (errMsg) {
            return checkError('用户名不合法: ' + errMsg);
        }
    }

    if (loginform.login_password.value == "") {
        return checkError('密码不能为空！');
    } else {
        errMsg = checkText(loginform.login_password.value);
        if (errMsg) {
            return checkError('密码不合法: ' + errMsg);
        }
    }

    loginClick();
    return true;
}

function checkRegister() {
    if (registerform.username.value == "") {
        return checkError('用户名不能为空！');
    } else {
        errMsg = checkText(registerform.username.value);
        if (errMsg) {
            return checkError('用户名不合法: ' + errMsg);
        }
    }

    errMsg = checkPassword(registerform.password.value);
    if (errMsg) {
        return checkError(errMsg);
    }

    if (registerform.password.value != registerform.pwd.value) {
        return checkError('两次输入的密码不一致！');
    }

    if (registerform.truename.value == "") {
        return checkError('真实姓名不能为空！');
    } else {
        errMsg = checkText(registerform.truename.value);
        if (errMsg) {
            return checkError('真实姓名不合法: ' + errMsg);
        }
    }

    if (registerform.phone.value == "") {
        return checkError('手机号码不能为空！');
    } else {
        errMsg = checkPhone(registerform.phone.value);
        if (errMsg) {
            return checkError('手机号码不合法: ' + errMsg);
        }
    }

    registerClick();
    return true;
}

function checkChange() {
    if (changeform.oldpwd.value == "") {
        return checkError('原密码不能为空！');
    } else {
        errMsg = checkText(changeform.oldpwd.value);
        if (errMsg) {
            return checkError('原密码不合法: ' + errMsg);
        }
    }

    errMsg = checkPassword(changeform.password.value);
    if (errMsg) {
        return checkError('新' + errMsg);
    }

    if (changeform.password.value != changeform.pwd.value) {
        return checkError('两次输入的密码不一致！');
    }

    changeClick();
    return true;
}


function checkPushpot() {
    if (pushform.name.value == "") {
        return checkError('活动名称不能为空！');
    } else {
        errMsg = checkText(pushform.name.value);
        if (errMsg) {
            return checkError('活动名称不合法: ' + errMsg);
        }
    }

    if (!document.getElementById("department").selectedIndex) {
        return checkError('请选择一个部门！');
    }

    if (!document.getElementById("potType").selectedIndex) {
        return checkError('请选择订单类型！');
    }

    if (pushform.contactPerson.value == "") {
        return checkError('对接人姓名不能为空！');
    } else {
        errMsg = checkText(pushform.contactPerson.value);
        if (errMsg) {
            return checkError('对接人姓名不合法: ' + errMsg);
        }
    }

    if (pushform.phone.value == "") {
        return checkError('对接人联系方式不能为空！');
    } else {
        errMsg = checkPhone(pushform.phone.value);
        if (errMsg) {
            return checkError('对接人手机号不合法: ' + errMsg);
        }
    }

    if (pushform.QQ.value == "") {
        return checkError('对接人QQ号不能为空！');
    } else {
        errMsg = checkQQ(pushform.phone.value);
        if (errMsg) {
            return checkError('对接人QQ号不合法: ' + errMsg);
        }
    }

    if (!pushform.ddl.value) {
        return checkError('DDL不能为空！');
    } else {
        errMsg = checkDDL(pushform.ddl.value);
        if (errMsg) {
            return checkError(errMsg);
        }
    }

    if (pushform.place.value == "" && pushform.potType.selectedIndex == 6) {
        return checkError('摄影单必须填写活动地点！')
    }

    if (pushform.comment.value == "" && pushform.potType.selectedIndex == 8) {
        return checkError('请在备注中说明订单类型！')
    }

    if (pushform.place.value != "") {
        errMsg = checkText(pushform.place.value);
        if (errMsg) {
            return checkError('活动地点不合法: ' + errMsg);
        }
    }

    if (pushform.requirement.value == "") {
        return checkError('订单要求不能为空！（若无订单要求，需写无）');
    } else {
        errMsg = checkText(pushform.requirement.value);
        if (errMsg) {
            return checkError('订单要求内容不合法: ' + errMsg);
        }
    }

    if (pushform.reviewPerson.value == "") {
        return checkError('审核人不能为空！（若无审核人，需写无）');
    } else {
        errMsg = checkText(pushform.reviewPerson.value);
        if (errMsg) {
            return checkError('审核人信息不合法: ' + errMsg);
        }
    }

    return true;
}

function checkFinish(){
    errMsg = checkFile(finishform.file.value);
    if(errMsg){
        return checkError(errMsg);
    }
    return true;
}