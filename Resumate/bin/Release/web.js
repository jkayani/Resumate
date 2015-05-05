var Web = {

	searchURL: {
		DigitalGov: "https://api.usa.gov/jobs/search.json",
		AuthenticJobs: "http://www.authenticjobs.com/api/",
	}, 

	searchPublicSector: function(query, append){
		$.ajax({
			url: Web.searchURL["DigitalGov"],
			data: {
				query: encodeURI(query)
			},
			dataType: "jsonp",
			success: function(data){
				Render.renderWebResults(
					Web.parse(data),
					append
				);
			},
			error: function(errorThrown){
				alert("Search is broken \n" + errorThrown);
			}
		});
	},

	searchPrivateSector: function(query, append){
		var data;
		 $.ajax({
			url: Web.searchURL["AuthenticJobs"],
			data:{
				api_key: "8d71706aa5f0fb099167d81296800cf9",
				method: "aj.jobs.search",
				format: "json",
				keywords: query
			},
			dataType: "jsonp",
			success: function(data){
				Render.renderWebResults(
					Web.parse(data),
					append
				);
			},
			error: function(errorThrown){
				alert("Search is broken \n" + errorThrown);
			}
		});
	},

	parse: function(data){
		var obj = [];
		var d; 

		// Private sector 
		if(data.length === undefined){

			d = data["listings"]["listing"];
			for(var elm in d){
				obj.push({
					organization_name : d[elm]["company"]["name"],
					position_title: d[elm]["title"],
					post_date: d[elm]["post_date"].substring(
						0,
						d[elm]["post_date"].indexOf(" ")),
					url: d[elm]["url"]
				});
			}
		}

		// Public sector
		else{
			for(var job in data){
				obj.push({
					organization_name : data[job]["organization_name"],
					position_title : data[job]["position_title"],
					post_date: data[job]["start_date"],
					url: data[job]["url"]
				});
			}
		}

		return obj;
	}
}