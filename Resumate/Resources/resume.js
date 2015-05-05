var Resume = {

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