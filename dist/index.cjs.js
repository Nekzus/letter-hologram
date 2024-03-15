'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\n  --card-size: 450px;\n  --font-size: 0.8rem;\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_defaultColor__Trv-B,\n.LetterHologram-module_card-gradient__pe-YJ {\n  background: radial-gradient(\n    rgb(30, 41, 59) 20%,\n    rgb(41, 121, 255) 50%,\n    rgb(56, 182, 255),\n    rgb(42, 252, 152)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_blueColor__BqbN4 {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(30, 41, 255) 50%,\n    rgb(30, 41, 255),\n    rgb(30, 41, 255)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_greenColor__uRnyp {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(30, 255, 59) 50%,\n    rgb(30, 255, 59),\n    rgb(30, 255, 59)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_pinkColor__mFvO5 {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(255, 105, 180) 50%,\n    rgb(255, 182, 193),\n    rgb(255, 20, 147)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_orangeColor__fcyPI {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(255, 165, 0) 50%,\n    rgb(255, 140, 0),\n    rgb(255, 99, 71)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_darkColor__VPJhw {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(105, 105, 105) 50%,\n    rgb(128, 128, 128),\n    rgb(169, 169, 169)\n  );\n}\n\n.LetterHologram-module_card-gradient__pe-YJ.LetterHologram-module_lightColor__CVicO {\n  background: radial-gradient(\n    rgb(30, 41, 59),\n    rgb(255, 255, 240) 50%,\n    rgb(255, 250, 240),\n    rgb(255, 255, 255)\n  );\n}\n.LetterHologram-module_card__CoZJu {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  aspect-ratio: 1;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.LetterHologram-module_card-letters__G-oVu {\n  --x: 0px;\n  --y: 0px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  color: white;\n  font-size: var(--font-size);\n  font-weight: 500;\n  word-wrap: break-word;\n  opacity: 0;\n  transition: opacity 0.3s ease, opacity 200ms;\n  -webkit-mask-image: radial-gradient(\n    calc(var(--card-size) * 0.8) circle at var(--x) var(--y),\n    rgb(255 255 255) 20%,\n    rgb(255 255 255 / 25%),\n    transparent\n  );\n  mask-image: radial-gradient(\n    calc(var(--card-size) * 0.8) circle at var(--x) var(--y),\n    rgb(255 255 255) 20%,\n    rgb(255 255 255 / 25%)\n  );\n  scale: 1.03;\n}\n\n.LetterHologram-module_card-wrap-child__CZOcX {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 4;\n}\n\n.LetterHologram-module_card-gradient__pe-YJ {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  mix-blend-mode: darken;\n  pointer-events: none;\n  z-index: 3;\n}\n\n.LetterHologram-module_card__CoZJu:hover .LetterHologram-module_card-letters__G-oVu {\n  opacity: 1;\n}\n\n.LetterHologram-module_card__CoZJu:hover .LetterHologram-module_card-gradient__pe-YJ {\n  opacity: 1;\n}\n";
var styles = {"card-gradient":"LetterHologram-module_card-gradient__pe-YJ","defaultColor":"LetterHologram-module_defaultColor__Trv-B","blueColor":"LetterHologram-module_blueColor__BqbN4","greenColor":"LetterHologram-module_greenColor__uRnyp","pinkColor":"LetterHologram-module_pinkColor__mFvO5","orangeColor":"LetterHologram-module_orangeColor__fcyPI","darkColor":"LetterHologram-module_darkColor__VPJhw","lightColor":"LetterHologram-module_lightColor__CVicO","card":"LetterHologram-module_card__CoZJu","card-letters":"LetterHologram-module_card-letters__G-oVu","card-wrap-child":"LetterHologram-module_card-wrap-child__CZOcX"};
styleInject(css_248z);

var ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var generateRandomString = function (length) {
    return Array.from({ length: length }, function () { return ALPHABET[Math.floor(Math.random() * ALPHABET.length)]; }).join("");
};
var HoloBg = function (_a) {
    var _b, _c, _d;
    var children = _a.children, _e = _a.className, className = _e === void 0 ? "" : _e, _f = _a.colorClassName, colorClassName = _f === void 0 ? "defaultColor" : _f, style = _a.style;
    var cardRef = React.useRef(null);
    var handleMouseMove = function (e, card) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var letters = card.querySelector(".".concat(styles["card-letters"]));
        if (letters && x !== undefined && y !== undefined) {
            letters.style.setProperty("--x", "".concat(x, "px"));
            letters.style.setProperty("--y", "".concat(y, "px"));
            letters.innerText = generateRandomString(50000);
        }
    };
    var handleTouchMove = function (e, card) {
        e.preventDefault();
        var rect = card.getBoundingClientRect();
        var x = e.touches[0].clientX - rect.left;
        var y = e.touches[0].clientY - rect.top;
        var letters = card.querySelector(".".concat(styles["card-letters"]));
        if (letters && x !== undefined && y !== undefined) {
            letters.style.setProperty("--x", "".concat(x, "px"));
            letters.style.setProperty("--y", "".concat(y, "px"));
            letters.innerText = generateRandomString(50000);
        }
    };
    React.useEffect(function () {
        var card = cardRef.current;
        if (!card)
            return;
        var onMoveMouse = function (e) { return handleMouseMove(e, card); };
        var onTouchMove = function (e) { return handleTouchMove(e, card); };
        card.addEventListener("mousemove", onMoveMouse);
        card.addEventListener("touchmove", onTouchMove);
        return function () {
            card.removeEventListener("mousemove", onMoveMouse);
            card.removeEventListener("touchmove", onTouchMove);
        };
    }, []);
    var widthTw = (_b = RegExp(/w-\[(\d+px)\]/).exec(className)) === null || _b === void 0 ? void 0 : _b[1];
    var width = (_d = (_c = style === null || style === void 0 ? void 0 : style.width) !== null && _c !== void 0 ? _c : widthTw) !== null && _d !== void 0 ? _d : "600px";
    var cardSize = "calc(".concat(width, " * 0.8)");
    var fontSize = "calc(".concat(width, " / 45)");
    var cardStyles = __assign(__assign({}, style), { "--card-size": cardSize, "--font-size": fontSize });
    return (React.createElement("div", { className: "".concat(styles.card, " ").concat(className), ref: cardRef, style: cardStyles },
        React.createElement("div", { className: styles["card-wrap-child"] }, children),
        React.createElement("div", { className: "".concat(styles["card-gradient"], " ").concat(styles[colorClassName]) }),
        React.createElement("div", { className: "".concat(styles["card-letters"], " ").concat(styles[colorClassName]) })));
};

exports.HoloBg = HoloBg;
//# sourceMappingURL=index.cjs.js.map
