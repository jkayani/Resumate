var App = {

	/**
	* Clears all input fields of any default values
	*/
	clear: function(){
		if(confirm("Reset Resume?")){ 

			// Clear the inputs
			$(".moduleInput").each(function(){
				$(this).val("");
			});

			// Reset Resume
			Resume = {
				contactInfo: {
					name: "",
					contactEmail: "",
					contactPhone: "",
					websiteURL: "",
					street: "",
					city: "",
					state: "",
					zip: ""
				},

				objective: "",

				education:[
						{
							name: "",
							startDate: "",
							endDate: "",
							location: "",
							degree: ""
						}
				],

				workExperience:[
						{
							name: "",
							startDate: "",
							endDate: "",
							role: "",
							location: ""
						}
				],

				volunteerExperience:[
						{
							name: "",
							startDate: "",
							endDate: "",
							role: "",
							location: ""
						}
				],

				certifications: [
						{
							name: "",
							yearEarned: "",
							organizationName: ""
						}
				],

				references:[
						{
							name: "",
							contactEmail: "",
							contactPhone: "",
							relationship: ""
						}
				],

				config: {
					objective: true,
					education: true,
					certifications: true,
					workExperience: true,
					volunteerExperience: true,
					references: true,
					street: true,
					websiteURL: true,
					contactEmail: true,
					contactPhone: true,
					name: true
				}
			}

			Render.renderHTML(Resume);
		}
	},

	/**
	* Updates an existing Resume object by updating values from
	* the form
	*/
	getInput: function(){
		var o = {};
		var alreadyPresent = false, isBlank = false;
		var index;
		var resumeProps = ["education", "certifications", "volunteerExperience", "workExperience", "references"];
		var idBase;
		var entry = 1;

		// Grab each piece from the form
		// and add to the Resume object
		Resume["contactInfo"] = {
			name:  		  $("input#personName").val(),
			contactEmail: $("input#contactEmail").val(),
			contactPhone: $("input#contactPhone").val(),
			websiteURL:   $("input#websiteURL").val(),
			street:       $("input#street").val(),
			city:         $("input#city").val(),
			state: 		  $("input#state").val(),
			zip: 		  $("input#zip").val()
		};
		Resume["objective"] = $("textarea#objective").val();

		/* Input gathering for enumerated sections  */

		for(var category in resumeProps){

			entry = 1;

			// Get the ID base, so we know how to identify
			// and get the proper values from the input boxes
			switch(resumeProps[category]){
				case "education":
					idBase = "school-";
					break;
				case "volunteerExperience":
					idBase = "volunteer-";
					break;
				case "workExperience":
					idBase = "work-";
					break;
				case "certifications":
					idBase = "certificate-";
					break;
				case "references":
					idBase = "reference-";
					break;
			}

			index = Resume[resumeProps[category]];

			do{

				isBlank = false;
				alreadyPresent = false;
				o = {};

				// Look for duplicates (values that are in the input boxes to be added,
				// but already exist in the Resume object)
				for(var elm in index[entry]){

					if(index[entry][elm] === $("input#" + idBase + elm).val()){
						alreadyPresent = true;
						console.log(elm + " is a duplicate");
					}
					else if(elm === "startDate" && index[entry][elm] === $("input#" + idBase + elm).val() + "&nbsp-&nbsp"){
						alreadyPresent = true;
					}
					else{  
						console.log(index[entry][elm] +  " // " + $("input#" + idBase + elm).val());
						alreadyPresent = false;

						// Once we know an entry has at least one distinct element,
						// it's cleared for being a non-duplicate
						break;
					}
				}

				// Look for blank values
				for(var elm in index[0]){

					// Once we know an entry has at least one blank element,
					// it's not allowed to be added
					if($("input#" + idBase + elm).val().trim() === ""){
						isBlank = true;
						break;
					}
					else{
						isBlank = false;
					}
				}

				// Only add to the Resume if the entry is neither a duplicate or a blank
				if(!(alreadyPresent || isBlank)){

					// Add each element into a new entry for the Resume
					// index[0] is a "template" entry for all the other entries
					for(var elm in index[0]){
						
						// Adds dash to the startDate
						o[elm] = (elm === "startDate") ? 
								$("input#" + idBase + elm).val().trim() + "&nbsp-&nbsp" :
								$("input#" + idBase + elm).val().trim();
											
						// Clear each input box as we add it's value
						// to the entry
						$("input#" + idBase + elm).val("");
					}

					// Push to the array of objects (add an entry)
					index.push(o);
				}
				entry++;
			} while(entry < index.length);
		}

		// Render an updated copy of the Resume
		Render.clear();
		Render.renderHTML(Resume);
		console.log(Resume);
	},

	/**
	* Deletes a part of the Resume 
	* @element	A jQuery object for the element to be removed
	* @doPrompt Whether the user should be prompted to delete
	*/
	deletePiece: function(element, doPrompt){
		var c = (doPrompt)? confirm("Delete the element from the Resume?") : true;
		var resumeProp = "";
		var found = false;
		var idBase = "";

		if(c){

			// Determine which Resume property needs to be 
			// modified
			resumeProp = element.parent("div").attr("class");

			// Loop through each object in the property,
			// if the property is full of arrays[]
			if(resumeProp  === "education" || 
				resumeProp === "volunteerExperience" ||
				resumeProp === "workExperience" ||
				resumeProp === "certifications" ||
				resumeProp === "references"){  

				// Get the ID base
				switch(resumeProp){
					case "education":
						idBase = "school-";
						break;
					case "volunteerExperience":
						idBase = "volunteer-";
						break;
					case "workExperience":
						idBase = "work-";
						break;
					case "certifications":
						idBase = "certificate-";
						break;
					case "references":
						idBase = "reference-";
						break;
				}

				// Start searching for the entry to delete from the
				// Resume object
				for(var entry = 1; entry < Resume[resumeProp].length; entry++){	

					// Loop through each element of each entry
					for(var elm in Resume[resumeProp][entry]){

						// Check if the values of each sub-property
						// match with those in the HTML to ensure
						// the right property is deleted
						if(Resume[resumeProp][entry][elm].trim() ===
						 element.find("." + idBase + elm).html().replace(/;/g, '').trim()){
							console.log(elm + " was found! ");
							found = true;
						}
						else {
							console.log(Resume[resumeProp][entry][elm].trim());
							console.log(element.find("." + idBase + elm).html().replace(/;/g, '').trim());
							console.log(elm + " was not found!");
							found = false;
							
							// Skip to the next entry if the current one
							// has at least one difference from the goal
							break;
							
						}

						console.log("Trying the next property");
					}

					// Delete if found, and re-render
					if(found){
						Resume[resumeProp].splice(entry, 1);

						// Exit the loop once we've done the deletion
						break;
					}

					console.log("Trying the next entry");
				}
			}

			// If the property being modified is an object{},
			// we reset each element to be blank
			else if(typeof(Resume[resumeProp]) === "object"){
				for(var elm in Resume[resumeProp]){

					if(Resume[resumeProp][elm] === 
						element.text()){
							Resume[resumeProp][elm] = "";
							break;
					}
				}
			}
			else{
				Resume["config"][resumeProp] = false;
			}

			// Re render
			Render.renderHTML(Resume);
			console.log(Resume);
		}
	},

	/**
	* Modifies an element of the Resume, using the value in 
	* <div class="modifyInput">
	* @element A jQuery object for the entry to be modified
	*/
	modifyPiece: function(element){

		// Determine the property that needs to be edited
		var resumeProp = element.parent("div").attr("class");
		console.log(resumeProp);
		var idBase;
		var s;

		// Get the ID base
		switch(resumeProp){
			case "education":
				idBase = "school-";
				break;
			case "volunteerExperience":
				idBase = "volunteer-";
				break;
			case "workExperience":
				idBase = "work-";
				break;
			case "certifications":
				idBase = "certificate-";
				break;
			case "references":
				idBase = "reference-";
				break;
		}

		// Populate the appropriate input fields
		for(var elm in Resume[resumeProp][0]){

			s = (elm === "startDate")? 
				element.find("." + idBase + elm).html().replace(/;/g, '').trim().replace("&nbsp-&nbsp", ""):
				element.find("." + idBase + elm).text().trim();

			$("input#" + idBase + elm).val(s);
		}	
	},

	/**
	* Updates the user's Resume preferences (what appears)
	* @checkboxElm  The checkbox that is checked/unchecked as a jQuery object
	*/
	updateResumePreferences: function(checkboxElm){

		// If the checkbox for each element of the Resume is checked,
		// we set it's config value to true; otherwise, false
		Resume["config"][checkboxElm.attr("value")] = checkboxElm.is(":checked");

		// Apply changes by re-rendering Resume
		Render.renderHTML(Resume);
	},

	/**
	* Applies a preset of configuration options for the Resume
	* such as showing and hiding certain sections
	* @optionValue	A string value from the <option> tag used to identify
	* the chosen option
	*/
	selectPreset: function(optionValue){

		optionValue = parseInt(optionValue);

		switch(optionValue){

			// Default
			case 0:
				Resume["config"]["certifications"] = true;
				Resume["config"]["references"] = true;
				Resume["config"]["websiteURL"] = true;
				$("select.fonts option[value='3']").is(":checked");
				break;
			case 1:
				Resume["config"]["certifications"] = false;
				Resume["config"]["references"] = false;
				Resume["config"]["websiteURL"] = false;
				$("select.fonts option[value='3']").attr("selected", "selected");
				App.changeFont(3);
				break;
			case 2:
				Resume["config"]["certifications"] = true;	
				Resume["config"]["websiteURL"] = true;
				Resume["config"]["references"] = false;
				$("select.fonts option[value='1']").attr("selected", "selected");
				App.changeFont(1);
				break;
			case 3:
				Resume["config"]["certifications"] = false;
				Resume["config"]["references"] = false;
				Resume["config"]["websiteURL"] = false;
				$("select.fonts option[value='0']").attr("selected", "selected");
				App.changeFont(0);
				break;
		}

		console.log("Preset changed!");
		Render.renderHTML(Resume);
	},

	/**
	* Changes the font used on the Resume
	* @fontOption 	The value from the selected <option> tag
	*/
	changeFont: function(fontOption) {
		fontOption = parseInt(fontOption);		
        switch(fontOption) {
            case 0:
                $(".resumeView").css("font-family", "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif");
                break;
            case 1:
                $(".resumeView").css("font-family", "'Helvetica Neue', Helvetica, Arial, sans-serif");
                break;
            case 2:
                $(".resumeView").css("font-family", "'Arial Narrow', Arial, sans-serif");
                break;
            case 3:
            	$(".resumeView").css("font-family", "'Times New Roman', serif");
            	break;
        	case 4:
        		$(".resumeView").css("font-family", "Cambria, sans-serif");
        }
    },

	/**
	* Sorts the Resume into chronological order
	* @category	The category in the Resume to sort (category, "workExperience" etc.)
	* @order 	The "order" to sort them:
		 "l->g" = ascending
		 "g->l" = descending
	* @basis	Whether the Resume should be sorted based on 
	*			the startDate or the endDate
	 */
	sortChronologically: function(category, order, basis){
		var years = [], entries = [];
		var index;

		//basis = (basis === "startDate")? "startDate" : "endDate";

		// Take each basis year from each entry into an array for sorting
		for(var entry = 1; entry < Resume[category].length; entry++){
			years.push(
				parseInt(Resume[category][entry][basis])
			);
		}

		// Sort the years chronologically
		years = years.sort(function(a, b){
			return (order === "l->g")? a - b : b - a;
		});

		console.log(years);

		// Add the template entry (Resume[resumeProp][0])
		entries.push(Resume[category][0]);

		// Place the entries in order, based off the order of years[] 
		for(var year in years){
			
			for(var elm = 1; elm < Resume[category].length; elm++){

				index = Resume[category][elm][basis];

				// If the years match up, add the entry into the array
				if(parseInt(index) === years[year]){
					entries.push(Resume[category][elm]);
				}
			}
		}

		// Add the entries into the category, 
		// overwriting the previous entries
		Resume[category] = entries;
		Render.renderHTML(Resume);
	},

	/**
	* Imports a JSON file to use as a Resume from <div class="json">
	*/	
	importJSON: function(){

		// Get the JSON file, and use it as the Resume
		var json = $(".json").val();
		var Resume = JSON.parse(json);

		// Render
		Render.renderHTML(Resume);
	},

	/**
	* Exports a JSON representation of a Resume to <div class="json">
	*/
	exportJSON: function(){

		// Grab the Resume and stringify it into JSON
		$(".json").val(
			JSON.stringify(Resume)
		);
	},

	/**
	* Exports the Resume into an external HTML file
	*/
	exportHTML: function(){
		var w = window.open("");
		w.document.write("<head><title>Resume</title><link rel='stylesheet' href='stylesheet.css' type='text/css'></style></head>");
		w.document.write("<body>" + $("div.resumeView").html() + "</body>");
	},

	/**
	* Runs a demo of the software
	*/
	demo: function(){
		$(".moduleInput").html("");

		$("#personName").val("John Doe");
		$("#contactEmail").val("jdoe@gmail.com");
		$("#contactPhone").val("919-444-4567");
        $("#websiteURL").val("http://www.jdoe.co.in/");

		$("#street").val("4282 My Address Ln.");
		$("#city").val("San Jose");
		$("#state").val("California");
		$("#zip").val("1337");

		$("#objective").val("Learning to live in a technical world.");

		$("#school-name").val("Pineville High School");
		$("#school-startDate").val("2011");
		$("#school-endDate").val("2015");
		$("#school-degree").val("HS Diploma");
		$("#school-location").val("Albuquerque, NM");
				$(".moduleSubmit").click();

		$("#school-name").val("Orange County Early College");
		$("#school-startDate").val("2015");
		$("#school-endDate").val("2019");
		$("#school-degree").val("Associates of Programming");
		$("#school-location").val("Orange, NM");
				$(".moduleSubmit").click();

		$("#school-name").val("TSA University");
		$("#school-startDate").val("2019");
		$("#school-endDate").val("2023");
		$("#school-degree").val("Master of Science - Computer Science");
		$("#school-location").val("Greensboro, NC");
				$(".moduleSubmit").click();

		$("#certificate-name").val("IT Technician");
		$("#certificate-organizationName").val("Cisco Systems");
		$("#certificate-yearEarned").val("2015");

		$("#work-name").val("Wells Fargo");
		$("#work-startDate").val("2026");
		$("#work-endDate").val("2032");
		$("#work-role").val("Junior Software Engineer");
		$("#work-location").val("Cary, NC");
				$(".moduleSubmit").click();

		$("#work-name").val("TSA Industries");
		$("#work-startDate").val("2032");
		$("#work-endDate").val("2042");
		$("#work-role").val("Senior Software Developer");
		$("#work-location").val("Greensboro, NC");
				$(".moduleSubmit").click();
         
		$("#volunteer-name").val("Habitat for Humanity");
		$("#volunteer-startDate").val("2020");
		$("#volunteer-endDate").val("2026");
		$("#volunteer-role").val("Project Leader");
		$("#volunteer-location").val("Raleigh, NC");
				$(".moduleSubmit").click();

		$("#reference-name").val("Jane Doe");
		$("#reference-relationship").val("Manager");
		$("#reference-contactEmail").val("jdoe@yahoo.com");
		$("#reference-contactPhone").val("+1 336-456-9876");
				$(".moduleSubmit").click();
	},

	/**
	* Runs a public or private sector job search in the Apply section
	* Makes a call to either the searchPublicSector() or searchPrivateSector() methods of the Web object
	*/
	findJobs: function(){

		var s = $("#searchQuery").val();

		$("div.listings").html("");

		// Run 
		if($("#publicSector").is(":checked")  &&
			$("#privateSector").is(":checked")){  

			Web.searchPublicSector(s);
			Web.searchPrivateSector(s);
		}

		else if($("#publicSector").is(":checked")){
			Web.searchPublicSector(s);
		}

		else if($("#privateSector").is(":checked")){
			Web.searchPrivateSector(s);
		}
	}
}