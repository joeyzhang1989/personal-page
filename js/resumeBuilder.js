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
			  "GruntJS", "Gulp.js", "Node.js", "Agile Development", "C++", "Git", "Software Development","JQuery"]
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
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.location);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedPicture);
	$("#header").append(formattedMessage);
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
	var formattedStart = HTMLworkStart.replace("%data%",work.experience[x].start);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.experience[x].employer);
	var formattedTitle= HTMLworkTitle.replace("%data%",work.experience[x].title);
	var formattedDates = HTMLworkDates.replace("%data%",work.experience[x].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.experience[x].location);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.experience[x].description);
	var formatedEmployerTitle = formattedEmployer + formattedTitle;

	// append in the HTML
	$("#workExperience").append(formattedStart);
	$(".work-entry:last").append(formatedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
 }
}

projects.display = function () {
	for (var x = 0; x < projects.project.length; x++) {
	// replace the data
	var formattedStart = HTMLprojectStart.replace("%data%",projects.project[x].start);
	var formattedTitle= HTMLprojectTitle.replace("%data%",projects.project[x].title);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.project[x].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[x].description);
	projects.project[x].images[0] = HTMLprojectImage.replace("%data%",projects.project[x].images[0]);
	// append in the HTML
	$("#projects").append(formattedStart);
	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
	$(".project-entry:last").append(projects.project[x].images[0]);
 }
}

education.display = function () {
	for (var x = 0; x < education.schools.length; x++) {
	// replace the data
	var formattedStart = HTMLschoolStart.replace("%data%",education.schools[x].start);
	var formattedName = HTMLschoolName.replace("%data%",education.schools[x].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
	var formattedDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);
	var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[x].location);
	var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[x].major);

	// append in the HTML
	$("#education").append(formattedStart);
	$(".education-entry:last").append(formattedName);
	$(".education-entry:last").append(formattedDegree);
	$(".education-entry:last").append(formattedDates);
	$(".education-entry:last").append(formattedLocation);
	$(".education-entry:last").append(formattedMajor);
 }
 	for (var x = 0; x < education.onlinecourse.length; x++) {
 	var formattedClasses = HTMLonlineClasses.replace("%data%",education.onlinecourse[x].classes);
	var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourse[x].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourse[x].school);
	var formattedDates = HTMLonlineDates.replace("%data%",education.onlinecourse[x].dates);
	var formattedUrl = HTMLonlineURL.replace("%data%",education.onlinecourse[x].onlineUrl);

	var formattedTitleSchool = formattedTitle +  formattedSchool;
	// append in the HTML
	$("#education").append(formattedClasses);
	$("#education").append(formattedTitleSchool);
	$("#education").append(formattedDates);
	$("#education").append(formattedUrl);
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
