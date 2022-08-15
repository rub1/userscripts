// ==UserScript==
// @name        TM allways display all tasks - dvbook.no
// @namespace   Violentmonkey Scripts
// @match       https://dvbook.no/dvb3/tm_editor.asp
// @grant       none
// @version     1.0
// @author      -
// @description 8/15/2022, 4:03:50 PM
// @updateURL   https://raw.githubusercontent.com/rubenleikarnes/userscripts/master/dvbook.no/dvbook.no.userscript.js
// ==/UserScript==

(function() {
  'use strict';

  console.log("Starting Violentmonkey script");

  var delayInMilliseconds = 2000,
      groupId,
      profileId;

  setTimeout(function() {
    console.log("Running after 2 sec delay");
    console.log("If group and profile id is not set to default, this will do it automatically and reload the page");

    groupId = document.getElementById('PR_GroupID');
    profileId = document.getElementById('ProfileID');

    if (profileId.value != "-1" || groupId.value != "0") {
      profileId.value=-1
      groupId.value=0

      go()
    }

  }, delayInMilliseconds);
})();
