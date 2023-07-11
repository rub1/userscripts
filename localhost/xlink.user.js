// ==UserScript==
// @name         videoxlink rx/tx background
// @description  sets background color of x8 xlinks and open sidebar
// @version      0.1
// @author       ruben
// @match        http://10.1.139.201/
// @match        http://10.1.139.202/
// @grant        none
// @updateURL    https://github.com/rubenleikarnes/userscripts/raw/master/localhost/xlink.user.js
// ==/UserScript==

(function() {
    'use strict'

    let nInterval
    let loopCounter = 0
    let maxLoops = 60

    function setBackgrounds() {
        let xlinks = document.querySelectorAll(".xlink_dash")
        let xhalflength = xlinks.length / 2

        for (let i = 0; i < xlinks.length; i++) {
            if (i < xhalflength) {
                xlinks[i].children[0].children[0].style.background = "#1a0d23"
                xlinks[i].children[0].children[2].style.background = "#1a0d23"
            } else {
                xlinks[i].children[0].children[0].style.background = "#0d2315"
                xlinks[i].children[0].children[2].style.background = "#0d2315"
            }
        }
    }

    function openSidepanel() {
        let openDrawerBtn = document.querySelector(".toolbar__side-icon")
        openDrawerBtn.click()

        setTimeout(() => {
            let localBtn = document.querySelector(".application--wrap > .navigation-drawer").children[1].children[0].children[0].children[1]
            let remoteBtn = document.querySelector(".application--wrap > .navigation-drawer").children[3].children[0].children[0].children[1]
            localBtn.click()
            remoteBtn.click()
        }, "500");
    }

    function checkStatus() {
        if (!nInterval) {
            nInterval = setInterval(isLoggedIn, 1000)
        }
    }

    function isLoggedIn() {
        if (document.querySelector("#xlink-login")) {
            if (loopCounter < maxLoops) {
                console.log("waiting to get logged in")
                loopCounter++
            } else {
                console.log("60 sec timeout, reload to load")
                clearInterval(nInterval)
            }
        } else {
            console.log("logged and background set")
            clearInterval(nInterval)
            setBackgrounds()
            openSidepanel()
        }
    }

    checkStatus()
})();