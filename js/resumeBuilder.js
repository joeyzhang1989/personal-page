/*
This is empty on purpose! Your code to build the resume will go here.
 */



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
	"schools": [
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
		"classes": "Fornt-End Web developerment Nanodegree",
		"school":"Udacity",
		"title": "Fornt-End Web developerment",
		"dates": "2016",
		"onlineUrl":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
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
		"title": "Udacity-Front-End Nanodegree",
		"dates": "Sept,2016",
		"description":"<br>•Communicated with the client for the requirement of the website<br>•Structured the layout of the website <br>•Implemented website using HTML 5, CSS3, JS for content and web structure and the bootstrap for responsive design<br>•Deploy the website and test the visibility and stability of the website compatibility on multiple devices" ,
		"images":["images/Udacity-Front-End-400.png"] 
	},
	{
		"start":" " ,
		"title": "Tower Defense Game",
		"dates": "Sept,2014",
		"description":"•Used GitHub to communicate and monitor the development<br>•Applied and modified MVC structure <br>•Programmed and designed the Map function<br>•Constructed unit tests by exploiting the Junit frameworkAdopted design patterns (strategy, observer, singleton, etc.)",
		"images":["images/tower-defense-400.png"] 
	},
	{
		"start":" " ,
		"title": "File transfer System",
		"dates": "Sept,2014",
		"description":"<br>•Integrated winsocket to pack the data to transfer files between two Internet terminals <br>•Simulated the real-time communication by considering the loss and delay of the packets<br>•Deployed TCP and UDP protocol in different versions of program<br>•Validated the performance and stability of program by transferring various size and types of files ",
		"images":["images/file-transfer-program-400.png"] 
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
	$(".work-entry:last").append(work.experience[x].dates);
	$(".work-entry:last").append(work.experience[x].location);
	$(".work-entry:last").append(work.experience[x].description);
 } 
}

projects.display = function () {
	for (var x = 0; x < projects.project.length; x++) {
	// replace the data
	projects.project[x].start = HTMLprojectStart.replace("%data%",projects.project[x].start);
	projects.project[x].title= HTMLprojectTitle.replace("%data%",projects.project[x].title);
	projects.project[x].dates = HTMLprojectDates.replace("%data%",projects.project[x].dates);
	projects.project[x].description = HTMLprojectDescription.replace("%data%",projects.project[x].description);
	projects.project[x].images[0] = HTMLprojectImage.replace("%data%",projects.project[x].images[0]);
	// append in the HTML
	$("#projects").append(projects.project[x].start);
	$(".project-entry:last").append(projects.project[x].title);
	$(".project-entry:last").append(projects.project[x].dates);
	$(".project-entry:last").append(projects.project[x].description);
	$(".project-entry:last").append(projects.project[x].images[0]);
 } 	
}

education.display = function () {
	for (var x = 0; x < education.schools.length; x++) {
	// replace the data
	education.schools[x].start = HTMLschoolStart.replace("%data%",education.schools[x].start);
	education.schools[x].name = HTMLschoolName.replace("%data%",education.schools[x].name);
	education.schools[x].degree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
	education.schools[x].dates = HTMLschoolDates.replace("%data%",education.schools[x].dates);
	education.schools[x].location = HTMLschoolLocation.replace("%data%",education.schools[x].location);
	education.schools[x].major = HTMLschoolMajor.replace("%data%",education.schools[x].major);

	// append in the HTML
	$("#education").append(education.schools[x].start);
	$(".education-entry:last").append(education.schools[x].name);
	$(".education-entry:last").append(education.schools[x].degree);
	$(".education-entry:last").append(education.schools[x].dates);
	$(".education-entry:last").append(education.schools[x].location);
	$(".education-entry:last").append(education.schools[x].major);
 } 	
 	for (var x = 0; x < education.onlinecourse.length; x++) {
 	education.onlinecourse[x].classes = HTMLonlineClasses.replace("%data%",education.onlinecourse[x].classes);
	education.onlinecourse[x].title = HTMLonlineTitle.replace("%data%",education.onlinecourse[x].title);
	education.onlinecourse[x].school = HTMLonlineSchool.replace("%data%",education.onlinecourse[x].school);
	education.onlinecourse[x].dates = HTMLonlineDates.replace("%data%",education.onlinecourse[x].dates);
	education.onlinecourse[x].onlineUrl = HTMLonlineURL.replace("%data%",education.onlinecourse[x].onlineUrl);
	
	var formattedTitleSchool = education.onlinecourse[x].title +  education.onlinecourse[x].school;
	// append in the HTML
	$("#education").append(education.onlinecourse[x].classes);
	$("#education").append(formattedTitleSchool);
	$("#education").append(education.onlinecourse[x].dates);
	$("#education").append(education.onlinecourse[x].onlineUrl);
 }
}

displayBio();

displayWork();

projects.display();

education.display();

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
