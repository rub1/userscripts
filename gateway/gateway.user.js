// ==UserScript==
// @name         Gateway norwegian football
// @namespace    https://gateway.mediabank.me/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://gateway.mediabank.me/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    console.log("running gateway userscript");

    // ["league name", "recorder name", "live player name", "recording profile name"]
    var myLeagues = [["Norwegian", "EVS MCR", "Discovery","FM-General Ingest"],["UEFA", "EVS MCR", "UEFA", "UEFA-General Ingest no proxy"]];

    // If script runs, make the navbar green to verify our script is active
    document.querySelectorAll(".navbar")[0].setAttribute('style', 'background: #28a745 !important');

    function securityCheck(leagueName, recorderName, livePlayerName, recordingProfileName) {
        if (document.querySelectorAll("#app .col .row .col p a")[0].innerText.includes(leagueName)) {
            var liveplayer = document.getElementById("livePlayerChannel");
            var scheduleRecorderId = document.getElementById("scheduleRecorderId")
            var scheduleRecordingProfile = document.getElementById("scheduleRecordingProfile")


            // log what league we are in
            console.log("league: " + leagueName);


            /*
             *
             * Check if there any options already is selected
             *
             */


            var selectedPlayer = liveplayer.options.selectedIndex;
            var selectedRecorder = scheduleRecorderId.options.selectedIndex;
            var selectedRecordingProfile = scheduleRecordingProfile.options.selectedIndex;

            if (selectedPlayer > 0) {
                if (liveplayer.options[liveplayer.options.selectedIndex].innerText.includes(livePlayerName)) {
                    liveplayer.style.background = "lightgreen";
                } else {
                    liveplayer.style.background = "red";
                }
            }

            if (selectedRecorder > 0) {
                if (scheduleRecorderId.options[scheduleRecorderId.options.selectedIndex].innerText.includes(recorderName)) {
                    scheduleRecorderId.style.background = "lightgreen";
                } else {
                    scheduleRecorderId.style.background = "red";
                }
            }

            if (selectedRecordingProfile > 0) {
                if (scheduleRecordingProfile.options[scheduleRecordingProfile.options.selectedIndex].innerText.includes(recordingProfileName)) {
                    scheduleRecordingProfile.style.background = "lightgreen";
                } else {
                    scheduleRecordingProfile.style.background = "red";
                }
            }


            /*
             *
             * Add event listeners to check if the selected option is the on in our league array
             *
             */


            liveplayer.addEventListener('change', function (e) {
                if (e.target.options[e.target.options.selectedIndex].text.includes(livePlayerName)) {
                    liveplayer.style.background = "lightgreen";
                } else {
                    liveplayer.style.background = "red";
                }
            });

            scheduleRecorderId.addEventListener('change', function (e) {
                if (e.target.options[e.target.options.selectedIndex].text.includes(recorderName)) {
                    scheduleRecorderId.style.background = "lightgreen";
                } else {
                    scheduleRecorderId.style.background = "red";
                }
            });

            scheduleRecordingProfile.addEventListener('change', function (e) {
                if (e.target.options[e.target.options.selectedIndex].text.includes(recordingProfileName)) {
                    scheduleRecordingProfile.style.background = "lightgreen";
                } else {
                    scheduleRecordingProfile.style.background = "red";
                }
            });
        }
    }


    /*
     *
     * Wait some extra time to let the webpage finish loading content and then go through our league array and run the script
     *
     */


    const delay = ms => new Promise(res => setTimeout(res, ms));

    const init = async () => {
        await delay(1000);
        console.log("Waited 1s");

        myLeagues.forEach(function(val,index) {
            securityCheck(val[0],val[1],val[2],val[3]);
        })
    };

    if ( /#\/setupschedule.*/.test(location.hash) ) {
        init();
    }


    /*
     *
     * Check if we have navigated to a new url and check if taht url is what we are after, if so load init
     *
     */


    var oldLocation = location.href;
    setInterval(function() {
        if(location.href != oldLocation) {
            // do your action
            console.log("url has changed");
            if ( /#\/setupschedule.*/.test(location.hash) ) {
                init();
            }

            oldLocation = location.href
        }
    }, 1000); // check every second

})();
