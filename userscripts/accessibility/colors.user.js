// ==UserScript==
// @name         accessibility - colors
// @namespace    https://rettungssimulator.online
// @version      0.1
// @description  Helle Map im DarkMode
// @author       DispoOhnePlan
// @match        https://rettungssimulator.online*
// @grant        GM_addStyle
// ==/UserScript==


GM_addStyle("body{filter: saturate(2) hue-rotate(-120deg) !important;-webkit-filter: saturate(2) hue-rotate(-120deg) !important;}");