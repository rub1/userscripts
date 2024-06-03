// ==UserScript==
// @name        Signiant media shuttle zoom button
// @namespace   Violentmonkey Scripts
// @match       https://console.signiant.com/mediaShuttle/transfers*
// @grant       none
// @version     1.1
// @author      -
// @updateURL   https://github.com/rubenleikarnes/userscripts/raw/master/signiant.com/signiant-media-shuttle-zoom.user.js
// ==/UserScript==


(function() {
  'use strict';

  let delayInMilliseconds = 10000;

  setTimeout(function() {
    console.log("Running after %S ms delay"), delayInMilliseconds;

    /*
    nav top = MuiPaper-root-133
      display: flex -> none
    nav left = Muiroot-237
      width: 240px -> 0
      display: block -> none
    nav top behind = jss298
      height: 56px -> 0
    */

    let navTop = document.querySelector(".MuiPaper-root-133")
    let navLeft = document.querySelector(".MuiDrawer-root-237")
    let controlPanel = document.querySelector("#controlpanel")
    let btn = document.createElement("button")
    let isZoomed = false

    function mapZoom() {
      console.log("zoom")

      if (!isZoomed) {
        navTop.style.display = "none"
        navLeft.style.display = "none"
        navLeft.style.width = "0"
        controlPanel.style.height = "100vh"
        controlPanel.style.marginTop = "-56px"

        isZoomed = true
      } else if (isZoomed) {
        navTop.style.display = "flex"
        navLeft.style.display = "block"
        navLeft.style.width = "240px"
        controlPanel.style.height = "calc(100vh - 56px)"
        controlPanel.style.marginTop = "0"

        isZoomed = false
      }
    }

    btn.style.position = "absolute"
    btn.style.zIndex = "9999"
    btn.style.right = "50px"
    btn.style.bottom = "50px"
    btn.style.background = "#eee"
    btn.style.color = "#000"
    btn.style.cursor = "nesw-resize"
    btn.innerHTML = "<->"


    btn.addEventListener("click", function() {
      console.log("zooming")
      mapZoom()
    });

    controlPanel.appendChild(btn)

  }, delayInMilliseconds);
})();
