/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var bio = {
// 	"name" : "Chenglong Zhang",
// 	"role" : "Web Developer",
// 	"mobile" : "5144311188",
// 	"email" : "chenglongzhang931@gmail.com",
// 	"github" : "github.com/joeyzhang1989",
// 	"location" : "Montreal, Canada",
// 	"picture" : "images/me.jpeg",
// 	"message" : "Thank your for your time reading my resume",
// 	"skills" : ["Web Development", "Programming", "HTML", "CSS", "JavaScript", "Java",
// 			  "GruntJS", "Gulp.js" ]
// };


// bio.name = HTMLheaderName.replace("%data%",bio.name);
// bio.role = HTMLheaderRole.replace("%data%",bio.role);
// bio.mobile = HTMLmobile.replace("%data%",bio.mobile);
// bio.email = HTMLemail.replace("%data%",bio.email);
// bio.github = HTMLgithub.replace("%data%",bio.github);
// bio.location = HTMLlocation.replace("%data%",bio.location);
// bio.picture = HTMLbioPic.replace("%data%",bio.picture);
// bio.message = HTMLwelcomeMsg.replace("%data%",bio.message);

// $("#header").prepend(bio.role);
// $("#header").prepend(bio.name);
// $("#topContacts").append(bio.mobile);
// $("#topContacts").append(bio.email);
// $("#topContacts").append(bio.github);
// $("#topContacts").append(bio.location);
// $("#header").append(bio.picture);
// $("#header").append(bio.message);
// $("#header").append(HTMLskillsStart);

// for (var i = 0; i< bio.skills.length; i++) {
// 	var id = bio.skills[i];
// 	id = HTMLskills.replace("%data%",id);
// 	$("#skills").append(id);
// }


// var work = {};
// // var education = {};

// // // workExperience
// work["start"] = "February,2016";
// work["employer"] = "The International Civil Aviation Organization";
// work["title"] = "Statistical Data Analysis Intern";
// work["dates"] = "February,2016-July,2016";
// work["location"] = "Montreal, Canada";
// work["description"] =   "Design and implement the fornt-end web components. Colsely worked with the back-end developers to optimize web layout";

// work["start"] = HTMLworkStart.replace("%data%",work["start"]);
// work["employer"] = HTMLworkEmployer.replace("%data%",work["employer"]);
// work["title"] = HTMLworkTitle.replace("%data%",work["title"]);
// work["dates"] = HTMLworkDates.replace("%data%",work["dates"]);
// work["location"] = HTMLworkLocation.replace("%data%",work["location"]);
// work["description"] = HTMLworkDescription.replace("%data%",work["description"]);


// $("#workExperience").append(work["start"]);
// $("#workExperience").append(work["employer"]);
// $("#workExperience").append(work["title"]);
// $("#workExperience").append(work["dates"]);
// $("#workExperience").append(work["location"]);
// $("#workExperience").append(work["description"]);

// // education master
// education.start = "Sept,2013";
// education.name = "Concordia University";
// education.degree = "Master of Engineering";
// education.dates = "Sept,2013-June,2015";
// education.location = "Montreal, Canada";
// education.major = "Software Engineering";

// education.start = HTMLschoolStart.replace("%data%",education.start);
// education.name = HTMLschoolName.replace("%data%",education.name);
// education.degree = HTMLschoolDegree.replace("%data%",education.degree);
// education.dates = HTMLschoolDates.replace("%data%",education.dates);
// education.location = HTMLschoolLocation.replace("%data%",education.location);
// education.major = HTMLschoolMajor.replace("%data%",education.major);

// $("#education").append(education.start);
// $("#education").append(education.name);
// $("#education").append(education.degree);
// $("#education").append(education.dates);
// $("#education").append(education.location);
// $("#education").append(education.major);

// // education bachelor
// education.start = "Sept,2009";
// education.name = "ChangChun Normal University";
// education.degree = "Bachelor of Engineering";
// education.dates = "Sept,2009-June,2013";
// education.location = "ChangChun, China";
// education.major = "Computer Science";

// education.start = HTMLschoolStart.replace("%data%",education.start);
// education.name = HTMLschoolName.replace("%data%",education.name);
// education.degree = HTMLschoolDegree.replace("%data%",education.degree);
// education.dates = HTMLschoolDates.replace("%data%",education.dates);
// education.location = HTMLschoolLocation.replace("%data%",education.location);
// education.major = HTMLschoolMajor.replace("%data%",education.major);

// $("#education").append(education.start);
// $("#education").append(education.name);
// $("#education").append(education.degree);
// $("#education").append(education.dates);
// $("#education").append(education.location);
// $("#education").append(education.major);


var bio = {
	"name" : "Chenglong Zhang",
	"role" : "Web Developer",
	"mobile" : "514-431-1188",
	"email" : "chenglongzhang931@gmail.com",
	"github" : "github.com/joeyzhang1989",
	"location" : "Montreal, Canada",
	"picture" : "images/me.jpeg",
	"message" : "Thank your for your time reading my resume",
	"skills" : ["Web Development", "Programming", "HTML", "CSS", "JavaScript", "Java",
			  "GruntJS", "Gulp.js" ]
}


var education = {
	"school": [
	{
		"start": "Sept,2013",
		"name": "Concordia University",
		"degree": "Master of Engineering",
		"dates": "Sept,2013-June,2015",
		"location": "Montreal, Canada",
		"major": "Software Engineering"
	},
	{
		 "start": "Sept,2009",
		 "name": "ChangChun Normal University",
		 "degree": "Bachelor of Engineering",
		 "dates": "Sept,2009-June,2013",
		 "location": "ChangChun, China",
		 "major": "Computer Science"
	}
 ],		
	"onlinecourse": [
	{
		"title": "Udacity Fornt-End Web developerment Nanodegree",
		"school":"Udacity",
		"dates": "2016"
	}
  ]
}

var work = {
	"experience": [

	{
		"start":"February,2016",
		"employer": "The International Civil Aviation Organization",
		"title":  "Statistical Data Analysis Intern",
		"dates": "February,2016-July,2016",
		"location": "Montreal, Canada",
		"description":  "Design and implement the fornt-end web components. Colsely worked with the back-end developers to optimize web layout"
	},
	{
		"start":"June,2012",
		"employer": "Datang Telecom Technology Co., Ltd",
		"title":  "Online system developer Intern",
		"dates": "June,2012-September,2012",
		"location": "Beijing, China",
		"description":  "Programmed the customer units of the system using C# in the .Net environment. Cooperated with the Scrum development team and coordinated the project progress. Implemented the unit tests as quality assurance implementation. Generated Persona, User Cases and domain model to design the structure and functions of system."
	}
	]
}

var projects = {
	"project": [
	{
		"start":"" ,
		"title": "",
		"dates": "",
		"description":"" ,
		"images":[""] 
	},
	{
		"start":"" ,
		"title": "",
		"dates": "",
		"description":"" ,
		"images": [""]
	}
	]
}

var displayBio = function () 
{
	bio.name = HTMLheaderName.replace("%data%",bio.name);
	bio.role = HTMLheaderRole.replace("%data%",bio.role);
	bio.mobile = HTMLmobile.replace("%data%",bio.mobile);
	bio.email = HTMLemail.replace("%data%",bio.email);
	bio.github = HTMLgithub.replace("%data%",bio.github);
	bio.location = HTMLlocation.replace("%data%",bio.location);
	bio.picture = HTMLbioPic.replace("%data%",bio.picture);
	bio.message = HTMLwelcomeMsg.replace("%data%",bio.message);

	$("#header").prepend(bio.role);
	$("#header").prepend(bio.name);
	$("#topContacts").append(bio.mobile);
	$("#topContacts").append(bio.email);
	$("#topContacts").append(bio.github);
	$("#topContacts").append(bio.location);
	$("#header").append(bio.picture);
	$("#header").append(bio.message);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i< bio.skills.length; i++) {
		var formattedSkills = bio.skills[i];
		formattedSkills = HTMLskills.replace("%data%",formattedSkills);
		$("#skills").append(formattedSkills);
		}
	 }
}

var displayWork = function()
{
	for (var x = 0; x < work.experience.length; x++) {
	// replace the data
	work.experience[x].start = HTMLworkStart.replace("%data%",work.experience[x].start);
	work.experience[x].employer = HTMLworkEmployer.replace("%data%",work.experience[x].employer);
	work.experience[x].title= HTMLworkTitle.replace("%data%",work.experience[x].title);
	work.experience[x].dates = HTMLworkDates.replace("%data%",work.experience[x].dates);
	work.experience[x].location = HTMLworkLocation.replace("%data%",work.experience[x].location);
	work.experience[x].description = HTMLworkDescription.replace("%data%",work.experience[x].description);
	var formatedEmployerTitle = work.experience[x].employer + work.experience[x].title;

	// append in the HTML
	$("#workExperience").append(work.experience[x].start);
	$(".work-entry:last").append(formatedEmployerTitle);
	$("#workExperience").append(work.experience[x].dates);
	$("#workExperience").append(work.experience[x].location);
	$("#workExperience").append(work.experience[x].description);
 } 
}

displayBio();

displayWork();

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
