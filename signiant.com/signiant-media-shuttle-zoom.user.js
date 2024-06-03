// ==UserScript==
// @name        Signiant media shuttle zoom button
// @namespace   Violentmonkey Scripts
// @match       https://console.signiant.com/mediaShuttle/transfers*
// @grant       none
// @version     1.4
// @author      -
// @updateURL   https://github.com/rubenleikarnes/userscripts/raw/master/signiant.com/signiant-media-shuttle-zoom.user.js
// ==/UserScript==


(function() {
  'use strict';

  let delayInMilliseconds = 10000;

  setTimeout(function() {
    console.log("Running after %S ms delay"), delayInMilliseconds;

    let navTop = document.querySelector(".MuiPaper-root-133")
    let navLeft = document.querySelector(".MuiDrawer-root-237")
    let wrapper = document.querySelector(".jss300")
    let contentPanel = document.querySelector("#contentPanel")
    let btn = document.createElement("button")
    let isZoomed = false

    function mapZoom() {
      console.log("zoom")

      if (!isZoomed) {
        navTop.style.display = "none"
        navLeft.style.display = "none"
        navLeft.style.width = "0"
        contentPanel.style.height = "100vh"
        contentPanel.style.marginTop = "-56px"

        isZoomed = true
      } else if (isZoomed) {
        navTop.style.display = "flex"
        navLeft.style.display = "block"
        navLeft.style.width = "240px"
        contentPanel.style.height = "calc(100vh - 56px)"
        contentPanel.style.marginTop = "0"

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

    wrapper.appendChild(btn)

  }, delayInMilliseconds);
})();
