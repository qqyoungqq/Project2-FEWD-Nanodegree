//Define the resume objects: work, pro, bio, education
var work = {
	"jobs" : [
	{
		"title" : "Research Assistant",
		"employer" : "University of South Florida",
		"location" : "Tampa, FL, US",
		"dates" : "January, 2012 - Present",
		"description" : ["●	Built a website for the Geodesy Lab of University of South Florida",
		"●	Maintained and updated the website to ensure new research projects and new published papers were posted in time",
		"●	Wrote computer programs to effectively collect, analyze and visualize research related data"]
	},
	{
		"title" : "Research Assistant",
		"employer" : "University of Miami",
		"location" : "Miami, FL, US",
		"dates" : "August, 2010 - December, 2011",
		"description" : ["●	Wrote shell scripts to batch process high volumes of data without manual intervention",
		"●	Presented research results clearly and logically in written and oral form"]
	}
	]
}

var pro = {
	"projects" : [
	{
		"title" : "Feed Reader Testing",
		"dates" : 2015,
		"description" : "JavaScript Testing Framework - Jasmine",
        "images" : ["./images/p6.png"]
	},
	{
		"title" : "Neighborhood Map",
		"dates" : 2015,
		"description" : "Knockout.js   |   JavaScript   |   AJAX",
        "images" : ["./images/p5.png"]
	},
	{
		"title" : "Website Optimization",
		"dates" : 2015,
		"description" : "Chrome Dev Tools   |   Critical Rendering Path   |   Gulp",
        "images" : ["./images/p4.png"]
	},
	{
		"title" : "Classic Arcade Game Clone",
		"dates" : 2015,
		"description" : "Object-Oriented Programming   |   JavaScript   |   HTML5 Canvas",
        "images" : ["./images/p3.png"]
	}	
	]
}

var bio = {
	"name" : "Qian Yang",
	"role" : "Web Developer",
	"welcomeMessage" : "Hi! I'm Qian. I love to learn, especially about writing programs to solve challenging problems.",
	"images" : "./images/me.JPG",
	"skills" : ["JavaScript","Python","HTML&CSS","jQuery","Knockout.js","Jasmine","Bootstrap","Gulp","SQL","Git/GitHub","Matlab","Shell"],
	"contacts" : 
	{
		"mobile" : "305-989-1908",
		"email" : "yang.q2006@gmail.com",
		"github" : "qqyoungqq",
		"location" : "Tampa, FL"
	}
}


var education = {
	"schools" : [
	{
		"name" : "Udacity",
		"location" : "Online",
		"degree" : "Nanodegree",
		"majors" : ["Front-End Web Developer"], 
		"dates" : 2015,
		"url" : "http://hennarot.forest.usf.edu/main/depts/geosci/"
	},	
	{
		"name" : "University of South Florida",
		"location" : "Tampa, FL, US",
		"degree" : "PhD",
		"majors" : ["Geosciences"], 
		"dates" : 2015,
		"url" : "http://hennarot.forest.usf.edu/main/depts/geosci/"
	},
	{
		"name" : "Wuhan University",
		"location" : "Wuhan, CN", 
		"degree" : "Bachelor",
		"majors" : ["Geodesy and Geomatics"], 
		"dates" : 2010,
		"url" : "http://en.sgg.whu.edu.cn/"
	}
	],
	"onlineCourses" : [
	{
		"title" : "JavaScript Testing",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud549"
	},	
	{
		"title" : "JavaScript Design Patterns",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud989"
	},
	{
		"title" : "Object-Oriented JavaScript",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud015"
	},
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud804"
	},
	{
		"title" : "Browser Rendering Optimization",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud860"
	},
	{
		"title" : "Website Performance Optimization",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud884"
	},	
	{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud245"
	},
	{
		"title" : "Intro to AJAX",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud110"
	},			
	{
		"title" : "HTML5 Canvas",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud292"
	},	
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud304"
	},
	{
		"title" : "Introduction to Computer Science",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/cs101"
	},
	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud893"
	},
	{
		"title" : "How to Use Git and GitHub",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud775"
	},
	{
		"title" : "Databases",
		"school" : "Standord OnlineCourses",
		"dates" : 2015,
		"url" : "https://class.stanford.edu/courses/DB/2014/SelfPaced/about"
	}
	]
}


//Define display functions
//Function to display bio information 
bio.display = function() {
	//Display Name and Role 
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	//Display contact information
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);	
	var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
	$(formattedContact).appendTo("#topContacts, #footerContacts");
	//Display profile picture
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.images);
	var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedBioPic+formattedWelcomMsg);
	//Display skills
	$('#header').append(HTMLskillsStart);	
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}	
}

//Function to display work information 
work.display = function() { 
	for (subjobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[subjobs].employer);
    	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[subjobs].title);
    	var formattedEmployerTitle = formattedEmployer + formattedTitle
    	var formattedDatesLocation = HTMLworkLocationDates.replace("%location%",work.jobs[subjobs].location).replace("%date%",work.jobs[subjobs].dates);
    
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDatesLocation);
		var formattedDesciption='';
    	for (jobdesp in work.jobs[subjobs].description) {
    		var temp = HTMLworkDescription.replace("%data%",work.jobs[subjobs].description[jobdesp]);
    		formattedDesciption = formattedDesciption + temp;
    	}
    	$(".work-entry:last").append(formattedDesciption);
	}	
}

//Function to display project information 
pro.display = function() {
	for (subproject in pro.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",pro.projects[subproject].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",pro.projects[subproject].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",pro.projects[subproject].description);
		$(".project-entry:last").append(formattedProjectTitle);
		//$(".project-entry:last").append(formattedProjectDescription);
		
		if (pro.projects[subproject].images.length > 0) {
			for (image in pro.projects[subproject].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%",pro.projects[subproject].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
		$(".project-entry:last").append(formattedProjectDescription);	
	}
}

//Function to display education information 
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolLocationDates = HTMLschoolLocationDates.replace("%location%",education.schools[school].location).replace("%date%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolLocationDates);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedClassTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("%url%",education.onlineCourses[course].url);
			var formattedClassSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedClassTitle + formattedClassSchool);
		}
	}

}

//Call display functions
bio.display();
work.display();
pro.display();
education.display();

//Display x,y position of clicks to Console
$(document).click(function(loc) {
// use the following code to collect x and y click values and pass them to logClicks(x,y);
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


//Internationalize Name 
//Define a function to change a name string to international style [For example: Qian YANG]
function inName(namestring) {
	var firstname = namestring.split(" ")[0];
	var lastname = namestring.split(" ")[1];
	var firstnamenew = firstname.slice(0,1).toUpperCase() + firstname.slice(1).toLowerCase();
	var lastnamenew = lastname.toUpperCase();
	return firstnamenew + " " + lastnamenew;
}
//add a button at the bottom of page 
$("#home").append(internationalizeButton);


//Display a map showing live and work place
$("#mapDiv").append(googleMap);


