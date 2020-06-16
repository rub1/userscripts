// ==UserScript==
// @name         Gateway security
// @namespace    https://gateway.mediabank.me/
// @version      1.1.6
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
	var myLeagues = [["Norwegian", "EVS MCR", "Fotball Media","FM-General Ingest"],["UEFA", "EVS MCR", "UEFA", "UEFA-General Ingest no proxy"],["European", "EVS MCR", "UEFA", "UEFA-General Ingest no proxy"],["Friendly", "EVS MCR", "UEFA", "UEFA-General Ingest no proxy"]];

	// If script runs, make the navbar green to verify our script is active
	document.querySelectorAll(".navbar")[0].setAttribute('style', 'background: #28a745 !important');


	/*
	 *
	 * Function for recursive stuff
	 *
	 */


	function selectedFormItemCorrect(formElement, correctName) {
		if (formElement.options.selectedIndex === 0 && formElement.options[formElement.options.selectedIndex].innerText.includes("Multilateral")) {
			formElement.style.background = "lightgreen";
		} else if (formElement.options.selectedIndex === 0 || formElement.options.selectedIndex == -1) {
			formElement.style.background = "lightskyblue";
		} else if (formElement.options[formElement.options.selectedIndex].innerText.includes(correctName)) {
			formElement.style.background = "lightgreen";
		} else {
			formElement.style.background = "red";
		}
	}


	/*
	 *
	 * Function used in eventlisteners to check if selected option is correct
	 *
	 */


	function checksFormOptionName(formElement, correctName) {
		formElement.addEventListener('change', function (e) {
			if (e.target.options[e.target.options.selectedIndex].text.includes(correctName)) {
				formElement.style.background = "lightgreen";
			} else if (formElement.options.selectedIndex == 0 || formElement.options.selectedIndex == -1 ) {
				formElement.style.background = "lightskyblue";
				console.log("go blue 2");
			} else {
				formElement.style.background = "red";
			}
		});
	}


	/*
	 *
	 * Main schedule function
	 *
	 */


	function scheduleCheck(leagueName, recorderName, livePlayerName, recordingProfileName) {
		if (document.querySelectorAll("#app .col .row .col p a")[0].innerText.includes(leagueName)) {
			// log what league we are in
			console.log("Schedule with league: " + leagueName);

			var liveplayer = document.getElementById("livePlayerChannel");
			var scheduleRecorderId = document.getElementById("scheduleRecorderId")
			var scheduleRecordingProfile = document.getElementById("scheduleRecordingProfile")
			var feedSource = document.getElementById("feedSource")

			var selectedPlayer = liveplayer.options.selectedIndex;
			var selectedRecorder = scheduleRecorderId.options.selectedIndex;
			var selectedRecordingProfile = scheduleRecordingProfile.options.selectedIndex;


			/*
			 *
			 * Check if there any options already is selected
			 *
			 */


			selectedFormItemCorrect(liveplayer, livePlayerName)
			selectedFormItemCorrect(scheduleRecorderId, recorderName)
			selectedFormItemCorrect(scheduleRecordingProfile, recordingProfileName)
			selectedFormItemCorrect(feedSource, "Multilateral")


			/*
			 *
			 * Add event listeners to check if the selected option is the on in our league array
			 *
			 */


			checksFormOptionName(liveplayer, livePlayerName)
			checksFormOptionName(scheduleRecorderId, recorderName)
			checksFormOptionName(scheduleRecordingProfile, recordingProfileName)
			checksFormOptionName(feedSource, "Multilateral")
		}
	}


	/*
	 *
	 * Subschedule function
	 *
	 */


	function subScheduleCheck() {
		// log what league we are in
		console.log("Subschedule");

		var scheduleRecorderId = document.getElementById("scheduleRecorderId")
		var scheduleRecordingProfile = document.getElementById("scheduleRecordingProfile")
		var subFeedSource = document.getElementById("feedSource")
		var sourceType = document.getElementById("sourceType")

		var selectedRecorder = scheduleRecorderId.options.selectedIndex;
		var selectedRecordingProfile = scheduleRecordingProfile.options.selectedIndex;
		var selectedSubFeedSource = subFeedSource.options.selectedIndex;
		var selectedSourceType = sourceType.options.selectedIndex;

		var recorderName = "EVS MCR"
		var recorderName360 = "NEP IP"
		var recordingProfileName = "Ingest no proxy"
		var subFeedSource360Name = "Low behind goal"
		var sourceType360Name = "360"

		var is360 = false;

		if (scheduleRecorderId.options[scheduleRecorderId.options.selectedIndex].innerText.includes(recorderName360)) {
			is360 = true;
		}

		/*
		 *
		 * Check if there any options already is selected
		 *
		 */


        if (is360) {
            selectedFormItemCorrect(scheduleRecorderId, recorderName360)
            selectedFormItemCorrect(subFeedSource, subFeedSource360Name)
			selectedFormItemCorrect(sourceType, sourceType360Name)
        } else {
            selectedFormItemCorrect(scheduleRecorderId, recorderName)
        }

        selectedFormItemCorrect(scheduleRecordingProfile, recordingProfileName)


		/*
		 *
		 * Add event listeners to check if the selected option is the on in our league array
		 *
		 */

		scheduleRecorderId.addEventListener('change', function (e) {
			var selectedElement = e.target.options[e.target.options.selectedIndex].text;

			if (selectedElement.includes(recorderName360)) {
				is360 = true;
				scheduleRecorderId.style.background = "lightgreen";

				selectedFormItemCorrect(sourceType, sourceType360Name)

				checksFormOptionName(sourceType, sourceType360Name)
				checksFormOptionName(subFeedSource, subFeedSource360Name)
			} else if (selectedElement.includes(recorderName)) {
				is360 = false;
				scheduleRecorderId.style.background = "lightgreen";
				sourceType.style.background = "inherit";
				subFeedSource.style.background = "inherit";
			} else {
				scheduleRecorderId.style.background = "red";
			}
		});


		checksFormOptionName(scheduleRecordingProfile, recordingProfileName)
	}


	/*
	 *
	 * Wait some extra time to let the webpage finish loading content and then go through our league array and run the script
	 *
	 */


	const delay = ms => new Promise(res => setTimeout(res, ms));

	const initSchedule = async () => {
		await delay(1000);
		console.log("Waited 1s");

		myLeagues.forEach(function(val,index) {
			scheduleCheck(val[0],val[1],val[2],val[3]);
		})
	};

	const initSubSchedule = async () => {
		await delay(1000);
		console.log("Waited 1s");

		subScheduleCheck();
	};


	/*
	 *
	 * Checks if current page on (re)load is what we are looking for
	 *
	 */


	if ( /#\/setupschedule.*/.test(location.hash) ) {
		initSchedule();
		console.log("init main")
	}

	if ( /#\/setupsubschedule.*/.test(location.hash) ) {
		initSubSchedule();
		console.log("init sub")
	}


	/*
	 *
	 * Check if we have navigated to a new url and check if taht url is what we are after, if so load initSchedule
	 *
	 */


	var oldLocation = location.href;
	setInterval(function() {
		if(location.href != oldLocation) {
			// do your action
			console.log("url has changed");
			if ( /#\/setupschedule.*/.test(location.hash) ) {
				initSchedule();
				console.log("init loop main")
			} else if ( /#\/setupsubschedule.*/.test(location.hash) ) {
				subScheduleCheck();
				console.log("init loop sub")
			}

			oldLocation = location.href
		}
	}, 1000); // check every second
})();
