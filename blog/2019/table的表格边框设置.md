---
title: table的表格边框设置
date: 2019-01-08 22:28:08
tags: [css]
---

## table的表格边框设置, 完美解决边框的问题

```
td {
    border:solid #ddd;
    border-width:0px 1px 1px 0px;
    padding: 0px;
    min-width: 75px;
    height: 50px;
}
table {
    border:solid #ddd;
    border-width:1px 0px 0px 1px;
    font-size: 13px;
    text-align: center;
    cellspacing: 0;
    cellpadding: 0;
}

```
