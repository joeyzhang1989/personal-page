var bio = {
    "name": "Chenglong Zhang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "514-431-1188",
        "email": "chenglongzhang931@gmail.com",
        "github": "github.com/joeyzhang1989",
        "location": "Montreal, Canada"
    },
    "biopic": "images/me.jpeg",
    "welcomeMessage": "Thank your for your time reading my resume",
    "skills": ["Web Development", "Programming", "HTML", "CSS", "JavaScript", "Java",
        "GruntJS", "Gulp.js", "Node.js", "Agile Development", "C++", "Git", "Software Development", "JQuery"
    ]
};


var education = {
    "schools": [{
        "start": "Sept,2013",
        "name": "Concordia University",
        "degree": "Master of Engineering",
        "dates": "Sept,2013-June,2015",
        "location": "Montreal, Canada",
        "majors": "Software Engineering",
        "url": "http://www.concordia.ca"
    }, {
        "start": "Sept,2009",
        "name": "ChangChun Normal University",
        "degree": "Bachelor of Engineering",
        "dates": "Sept,2009-June,2013",
        "location": "ChangChun, China",
        "majors": "Computer Science",
        "url": "http://www.ccsfu.edu.cn"
    }],
    "onlinecourse": [{
        "classes": "Fornt-End Web developerment Nanodegree",
        "school": "Udacity",
        "title": "Fornt-End Web developerment",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [

        {
            "start": "February,2016",
            "employer": "The International Civil Aviation Organization",
            "title": "Statistical Data Analysis Intern",
            "dates": "February,2016-July,2016",
            "location": "Montreal, Canada",
            "description": "Design and implement the fornt-end web components. Colsely worked with the back-end developers to optimize web layout"
        }, {
            "start": "June,2012",
            "employer": "Datang Telecom Technology Co., Ltd",
            "title": "Online system developer Intern",
            "dates": "June,2012-September,2012",
            "location": "Beijing, China",
            "description": "Programmed the customer units of the system using C# in the .Net environment. Cooperated with the Scrum development team and coordinated the project progress. Implemented the unit tests as quality assurance implementation. Generated Persona, User Cases and domain model to design the structure and functions of system."
        }
    ]
};

var projects = {
    "projects": [{
        "start": "",
        "title": "Udacity-Front-End Nanodegree",
        "dates": "Sept,2016",
        "description": "<br>•Communicated with the client for the requirement of the website<br>•Structured the layout of the website <br>•Implemented website using HTML 5, CSS3, JS for content and web structure and the bootstrap for responsive design<br>•Deploy the website and test the visibility and stability of the website compatibility on multiple devices",
        "images": ["images/Udacity-Front-End-400.png"]
    }, {
        "start": " ",
        "title": "Tower Defense Game",
        "dates": "Sept,2014",
        "description": "•Used GitHub to communicate and monitor the development<br>•Applied and modified MVC structure <br>•Programmed and designed the Map function<br>•Constructed unit tests by exploiting the Junit frameworkAdopted design patterns (strategy, observer, singleton, etc.)",
        "images": ["images/tower-defense-400.png"]
    }, {
        "start": " ",
        "title": "File transfer System",
        "dates": "Sept,2014",
        "description": "<br>•Integrated winsocket to pack the data to transfer files between two Internet terminals <br>•Simulated the real-time communication by considering the loss and delay of the packets<br>•Deployed TCP and UDP protocol in different versions of program<br>•Validated the performance and stability of program by transferring various size and types of files ",
        "images": ["images/file-transfer-program-400.png"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedPicture, formattedMessage);
    $("#header").append(HTMLskillsStart);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };
};

work.display = function() {
    for (var x = 0; x < work.jobs.length; x++) {
        // replace the data
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
        var formatedEmployerTitle = formattedEmployer + formattedTitle;

        // append in the HTML
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formatedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    }
};

projects.display = function() {

    for (project in projects.projects) {
        // replace the data
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        // append in the HTML
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        var path = projects.projects[project];
        for (image in path.images) {
            var formattedImages = HTMLprojectImage.replace("%data%", path.images[0]);
            $(".project-entry:last").append(formattedImages);
        }
    }
};

education.display = function() {
    for (var x = 0; x < education.schools.length; x++) {
        // replace the data
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[x].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        formattedNameDegree = formattedNameDegree.replace("#", education.schools[x].url);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors);

        // append in the HTML
        $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajor);
    }
    for (var s = 0; s < education.onlinecourse.length; s++) {
        var formattedClasses = HTMLonlineClasses.replace("%data%", education.onlinecourse[s].classes);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourse[s].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourse[s].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourse[s].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlinecourse[s].url);

        var formattedTitleSchool = formattedTitle + formattedSchool;
        // append in the HTML
        $("#education").append(formattedClasses, formattedTitleSchool, formattedDates, formattedUrl);
    }
};


bio.display();

work.display();

projects.display();

education.display();

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);