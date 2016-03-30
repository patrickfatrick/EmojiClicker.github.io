//Store.js
/* Copyright (c) 2010-2016 Marcus Westin */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n="undefined"!=typeof window?window:global,i=n.document,o="localStorage",a="script";if(r.disabled=!1,r.version="1.3.20",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement("div")}catch(l){t=i.createElement("div"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior("#default#userData"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),s=function(e){return e.replace(/^d/,"___$&").replace(d,"___")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v="__storejs__";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
//End of store.js

//Setup Variables

//Likes Variable, Like Cookies In Cookie Clicker
var likes = 0;
//Variable For Clicks Per Second To Show A Counter
var cps = 0;
// Variable For How Many Babies You Have
var babies = 0;
//Launched variable
var launched = 0;
//Set babyspeed
var babycps = 1;
// Set babymodifier (for upgrades)
var babymodifier = 0.5;


//Check storage
function init() {
  if(!store.enabled) {
    alert('Your browser does not support storage, if you would like to keep your game saves please turn off private mode or get a modern browser');
  }
  launched = 0;
  launch();
}

window.onload = init;

//First laucnh
function launch() {
  if(launched == 0){
    store.set('launch', 1)
    var likes = store.get('likesl')
    var likesl = store.get('likesl')
    if(likesl >= 1) {
      gload();
    } else {
      store.set('likesl', 0)
      store.set('babiesl', 0)
      store.set('babycps', 1)
    }
    store.set('launch', 1)
    gload();
  } else {
    gload();
  }
}

//Auto Save function.
function agsave(){
  store.set('likesl', likes);
  store.set('babiesl', babies);
  store.set('cpsl', cps);
  store.set('nextCostbl', nextCostb);
  store.set('babycpsl', babycps);
  store.set('babymodifierl', babymodifier)
}

//Save function
function gsave(){
  store.set('likesl', likes);
  store.set('babiesl', babies);
  store.set('cpsl', cps);
  store.set('nextCostbl', nextCostb);
  store.set('babycpsl', babycps);
  store.set('babymodifierl', babymodifier)
}

//Load function
function gload(){
  likes = store.get('likesl')
  babies = store.get('babiesl')
  cps = store.get('cpsl')
  var nextCostb = store.get('nextCostlb')
  babycps = store.get('babycps')
  babymodifier = store.get('babymodifierl')
  refStats()
}

//Reset function
function greset(){
  store.set('likesl', 0);
  store.set('babiesl', 0);
  store.set('cpsl', 0);
  store.set('nextCostbl', 0);
  store.set('babycps', 0);
  gload();
  refStats();
//  location.reload();
}

//Refresh Stats
function refStats() {
    setTimeout(function(){ document.getElementById("count").innerHTML = likes;document.getElementById('babies').innerHTML = babies;document.getElementById('count').innerHTML = likes;document.getElementById('cps').innerHTML = cps; }, 250);
}

gload()

//clickEmoji function
function clickEmoji(number){ //define function
  likes = likes + number; //added number (from click) to likes.
  document.getElementById("count").innerHTML = likes; //show new amount of likes in a html element
};

//buyBaby function
function buyBaby(){ //define function
  var babyCost = Math.floor(10 * Math.pow(1.2, babies)); //Works out cost of the baby
  if(likes >= babyCost){ //can the player afford it?
    babies = babies + 1; //increases number of babies
    likes = likes - babyCost; //takes away like cost of baby.
    babycps = 1 * babymodifier;
    cps = cps + babycps;
    document.getElementById('babies').innerHTML = babies;
    document.getElementById('count').innerHTML = likes;
    document.getElementById('cps').innerHTML = cps;
    refStats();
  }
  var nextCostb = Math.floor(10 * Math.pow(1.2, babies));
  document.getElementById('babycost').innerHTML = nextCostb;
}

window.setInterval(function(){
  clickEmoji(babycps);
}, 1000);

window.setInterval(function(){
  agsave();
}, 10000);