var Render = {

	/**
	* Clears the current Resume view
	*/
	clear: function(){
		$(".resumeView").html("");
	},

	/**
	* Attaches a click event to each entry added to the resume. The click event allows entries to be deleted from the Resume object,
	* and then re-renders the Resume.
	*/
	attachDelete: function(){
		var notFound = true;

		$(".resumeView div > div[class*='container']").each(function(){

			// Append the delete icon to each entry
			$(this).append(
				"<img class='delete' src='trash.png' style='vertical-align: bottom;' />"
			);

			// Attaches the hover event to show/hide the delete icon
			// Use $(this).find() to ensure only the child delete icon appears, and 
			// not all of them
			$(this).hover(
				function(){
					$(this).find("img.delete").css("visibility", "visible");
				},
				function(){
					$(this).find("img.delete").css("visibility", "hidden");
				}
			);

			// Attach click event for modification
			$(this).click(function(){
				App.modifyPiece($(this));
			});
		});

		// Add the click event for the delete icon
		$("img.delete").click(function(){
			App.deletePiece($(this).parent("div"), true);
		});
	},

	/**
	* Renders a Resume object into the .resumeView <div> element
	* @Resume 	A JavaScript object representing a resume
	**/
	renderHTML: function(Resume){

		// The box we're putting the pieces of the resume in 
		var box = $(".resumeView");

		var objective, 
			contactInfo = "",
			education = "",
			certifications = "",
			volunteerExp = "",
			workExp = "",
			references = "";

		var lineBreak = false;
		var index;

		// Clear the box
		Render.clear();

		// Grab the contactInfo data (name, email, etc.)
		contactInfo = "<div class='contactInfo container'>";

		// Add the name
		contactInfo += (Resume["config"]["name"])? 
				"<h2 class='name'>" + Resume["contactInfo"].name + "</h2>" : "";
                
        // Add street address
    	contactInfo += (Resume["config"]["street"])?
				"<span class='streetAddress'>" + Resume["contactInfo"]["street"] + "</span><br/>" + 
				"<span class='city'>" + Resume["contactInfo"]["city"] + ", " + Resume["contactInfo"]["state"] + " " + Resume["contactInfo"]["zip"] + "</span>" 
				: "";
		
        // Add the phone
    	contactInfo += (Resume["config"]["contactPhone"])?
				"<br /><span class='contactPhone'>" + Resume["contactInfo"].contactPhone + "</span> | " : "";
                
		// Add the email
		contactInfo += (Resume["config"]["contactEmail"])?
				"<span class='contactEmail'>" + Resume["contactInfo"].contactEmail + "</span>" : "";		

		// Add the website
		contactInfo += (Resume["config"]["websiteURL"])?
				"<br /><span class='websiteURL'>" + Resume["contactInfo"]["websiteURL"] + "</span>" : "<br />";
		
		// Add a line break
        contactInfo += "<br /><hr />";
		
		// Grab the objective
		objective = "<div class='objective'>" + 
						"<h3>Objective</h3>" +
						"<div class='objective container'>" + Resume.objective + "</div>";
	
		// Grab the data for the education fields
		education = "<div class='education'>" + 
						"<h3>Education</h3>";

		// Add a <div class="school"> for each entry in the Resume
		for(var entry = 1; entry < Resume["education"].length; entry++){

			education += "<div class='school container'>";
			index = Resume["education"][entry];

			education += "<span class='school-name'>" + index["name"] + "</span>" + 
						 "<div class='dates'><span class='school-startDate'>" + index["startDate"] + "</span>" + 
						 "<span class='school-endDate'>" + index["endDate"] + "</span></div>" +
						 "<br /><span class='school-location'>" + index["location"] + "</span>" + 
						 "<br /><span class='school-degree'>" + index["degree"] + "</span>";



			education += "</div><br />";
		}

		// Grab the data for the certifications fields
		certifications = "<div class='certifications'>" + 
							"<h3>Certifications</h3>";

		// Add a <div class="certificate"> for each entry
		for(var entry = 1; entry < Resume["certifications"].length; entry++){

			certifications += "<div class='certificate container'>";
			index = Resume["certifications"][entry];

			certifications += "<span class='certificate-name'>" + index["name"] + "</span>" +  
							  "<div class='dates'><span class='certificate-yearEarned'>" + index["yearEarned"] + "</span></div>" + 
	   						  "<br /><span class='certificate-organizationName'>" + index["organizationName"] + " </span>";

			certifications += "</div><br />";

		}

		// Grab the data for volunteer experience
		volunteerExp = "<div class='volunteerExperience'>" +
							"<h3>Volunteer Experience</h3>";


		// Add a <div class="volunteerPlace"> for each entry in the Resume
		for(var entry = 1; entry < Resume["volunteerExperience"].length; entry++){

			volunteerExp += "<div class='volunteerPlace container'>";
			index = Resume["volunteerExperience"][entry];

			volunteerExp += "<span class='volunteer-name'>" + index["name"] + "</span>" + 
                         "<div class='dates'><span class='volunteer-startDate'>" + index["startDate"] + "</span>" + 
						 "<span class='volunteer-endDate'>" + index["endDate"] + "</span></div>" + 
						 "<br /><span class='volunteer-location'>" + index["location"] + "</span>" + 
						 "<br /><span class='volunteer-role'>" + index["role"] + "</span>";

			volunteerExp += "</div><br />";
		}

		// Grab the data for work experience
		workExp = "<div class='workExperience'>" + 
						"<h3>Work Experience</h3>";

		// Add a <div class="workPlace"> for each entry in the Resume
		for(var entry = 1; entry < Resume["workExperience"].length; entry++){

			workExp += "<div class='workPlace container'>";
			index = Resume["workExperience"][entry];

			workExp += "<span class='work-name'>" + index["name"] + "</span>" + 
                     "<div class='dates'><span class='work-startDate'>" + index["startDate"] + "</span>" +
					 "<span class='work-endDate'>" + index["endDate"] + " </span></div>" + 
					 "<br /><span class='work-location'>" + index["location"] + "</span>" + 
					 "<br /><span class='work-role'>" + index["role"] + "</span>";

			workExp += "</div><br />";
		}

		// Grab the data for references
		references = "<div class='references'>" + 
						"<h3>References</h3>";

		// Add a <div class="referencePerson"> for each entry in the Resume
		for(var entry = 1; entry < Resume["references"].length; entry++){

			references += "<div class='referencePerson container'>";
			index = Resume["references"][entry];

			references += "<span class='reference-name'>" + index["name"] + "</span>" + 
					 "<br /><span class='reference-relationship'>" + index["relationship"] + "</span>" + 
					 "<br /><span class='reference-contactEmail'>" + index["contactEmail"] + "</span>" + 
					 "<br /><span class='reference-contactPhone'>" + index["contactPhone"] + "</span>";

			references += "</div><br />";
		}	

		// Output to HTML the enabled pieces of the Resume
		box.append(contactInfo + "</div><br />" + 
				((Resume["config"]["objective"])? objective + "</div><br/>" : "") +
				((Resume["config"]["education"])? education + "</div><br />" : "") + 
				((Resume["config"]["certifications"])? certifications + "</div><br />" : "") + 
				((Resume["config"]["workExperience"])? workExp + "</div><br />" : "") +
				((Resume["config"]["volunteerExperience"])? volunteerExp + "</div><br />" : "") + 
				((Resume["config"]["references"]? references + "</div>" : "")));
		
		Render.attachDelete();
	},

	/**
	* Renders the Resume as PDF using the jsPDF library
	* PDF opens in a new window
	*/
	renderPDF: function(){
		var doc = new jsPDF('p', 'in', 'letter');
        var specialElementHandlers = {
             '#bypassme': function(element, renderer) {
                 return true;
             }
        };

		doc.fromHTML(
			$(".resumeView")[0],
			0.5,
			0.5,
			{
				'width': 1000,
				'elementHandlers': specialElementHandlers
			}
		);

		doc.output('dataurlnewwindow');
	},

	/**
	* Renders the return JSON from the DigitalGov API
	* Rendered in the "Apply" tab
	* @data  	The JavaScript object response from the GET request
	* @append 	True if subsequent searches should be appended to the previous ones
	*/
	renderWebResults: function(data){
		var outputListings = "";

		console.log(data);

		// Clear previous listings only if required

		// Loop through each result
		for(var job in data){
			outputListings += "<p class = 'job'>" +
								"<strong>" + data[job]["organization_name"] + "</strong><br />" +
								"Position: " + data[job]["position_title"] + "<br />" + 
								"Post Date: " + data[job]["post_date"] + "<br />" + 
								"<a href = '" + data[job]["url"] + "'>" + "Learn more" + "</a>" +
							"</p><br />";

		}

		outputListings = (data.length === 0)? "No search results" : outputListings;

		$("div.listings").append(outputListings);
	},

	/**
	* Re-renders the Resume without any <img> tags or unnecessary elements to be copied and 
	* pasted into a Word document or other application, with formatting
	*/
	exportForClipboard: function(){

		// Delete each <img> bound to each Resume entry
		$("img.delete").each(function(){
			$(this).remove();
		});
	}
}