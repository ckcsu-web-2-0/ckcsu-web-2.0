---
title: 下单指北
top: true
summary: 来看看新的下单方法吧
categories: 指北
tag: 指北
date: 2021-02-03 19:00:00
---

首先，建立一个文件夹，以单号命名

在文件夹中放一个压缩包，内含材料和文案等内容

在文件夹中放下单表，文件名为`pot.txt`，内容如下（建议直接复制）：

```
---
title: Hello Pot
categories: pot
tag: pot
type: "pot"
layout: "pot"
date: 2021-02-03 13:30:00
pot:
  name: 活动名称
  department: 下单部门
  type: 订单类型
  id: 订单号
  contactPerson: 对接人姓名
  phone: 对接人手机号
  QQ: 对接人QQ号
  time: 下单时间
  ddl: DDL
  place: 活动地点
  requirement: 需求
  reviewPerson: 审核人姓名
---
```

以下是一个例子

```
---
title: Hello Pot
categories: pot
tag: pot
type: "pot"
layout: "pot"
date: 2021-02-03 13:30:00
pot:
  name: 重建会网
  department: 宣传与网络中心
  type: 网站设计
  id: XW00000001
  contactPerson: 艾野
  phone: 12312341234
  QQ: 123123123
  time: 2021/02/14
  ddl: 2021/02/16
  place: 无
  requirement: 能实现在线下单、网盘存储、门户展示等功能
  reviewPerson: 栋哥
---
```

打开Filezilla，登录部门网盘账号，将整个文件夹上传到账号的根目录中

每天12:00、18:00、22:00会定时更新，在下单完成之后的最近更新时间点，会在网站生成下单页面

页面生成后可以及时关注进度，一旦宣网有人接单，接单人会在对应页面的评论区中留下联系方式

祝各位下单愉快！