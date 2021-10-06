// ==UserScript==
// @name        BYR domain substitute
// @namespace   Violentmonkey Scripts
// @match       *://byr.pt/*
// @grant       none
// @version     1.0
// @author      William
// @description 2021/10/6 下午1:55:18
// ==/UserScript==


const regex = /https?:\/\/(bt\.byr\.cn)/gm;
const str = $("body").html();
const subst = `https://byr.pt`;

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

$("body").html(result)
