//Define the resume objects: work, pro, bio, education
var work = {
	"jobs" : [
	{
		"title" : "Research Assistant",
		"employer" : "University of South Florida",
		"location" : "Tampa, FL, US",
		"dates" : "January, 2012 - Present",
		"description" : "Investigated ground deformation associated with fluid injection and extraction at an Enhanced Oil Recovery Site in Texas using satellite images and numerical models. Wrote Fortran and Matlab programs for data analysis and numerical modeling."
	},
	{
		"title" : "Research Assistant",
		"employer" : "University of Miami",
		"location" : "Miami, FL, US",
		"dates" : "August, 2010 - December, 2012",
		"description" : "Wrote shell scripts to implement online data collecting and offline data processing.  Wrote Matlab programs for data analysis including outlier detection, linear regression and Kalman filtering. "
	}
	]
}

var pro = {
	"projects" : [
	{
		"title" : "Portfolio",
		"dates" : 2015,
		"description" : "This website is written in HTML and CSS to mimic a given desgin mockup. The website is buildup on the Twitter's Bootstrap framework.  It is designed responsively to display images, descriptions and links to each of the portfolio projects I complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images" : ["./images/pro1_snapshot.jpg"]
	},
	{
		"title" : "Interactive Resume",
		"dates" : 2015,
		"description" : "Project description is coming",
		"images" : ["./images/placeholder.jpg"]
	},
	{
		"title" : "Classic Arcade Game",
		"dates" : 2015,
		"description" : "Project description is coming",
        "images" : ["./images/placeholder.jpg"]
	},
	{
		"title" : "Website optimization",
		"dates" : 2015, 
		"description" : "Project description is coming",
		"images" : ["./images/placeholder.jpg"]
	
	},
	{
		"title" : "Neighborhood Map",
		"dates" : 2015, 
		"description" : "Project description is coming",
		"images" : ["./images/placeholder.jpg"]
	
	},
	{
		"title" : "Feed Reader Testing",
		"dates" : 2015, 
		"description" : "Project description is coming",
		"images" : ["./images/placeholder.jpg"]
	
	}]
}

var bio = {
	"name" : "Qian Yang",
	"role" : "Web Developer",
	"welcomeMessage" : "Hi! I'm Qian. I love to learn, especially about writing programs to solve challenging problems.",
	"images" : "./images/me.JPG",
	"skills" : ["Python","HTML&CSS","JavaScript","jQuery","SQL","Fortran","Matlab"],
	"contacts" : 
	{
		"mobile" : "305-989-1908",
		"email" : "qianyang@mail.usf.edu",
		"github" : "qqyoungqq",
		"location" : "Tampa, FL"
	}
}


var education = {
	"schools" : [
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
		"title" : "Introduction to Computer Science",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/cs101"
	},
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud304"
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
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud804"
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

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[subjobs].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[subjobs].location);
    var formattedDatesLocation = formattedDates + formattedLocation;
    var formattedDesciption = HTMLworkDescription.replace("%data%",work.jobs[subjobs].description);
    
	$(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDatesLocation);
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
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		
		if (pro.projects[subproject].images.length > 0) {
			for (image in pro.projects[subproject].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%",pro.projects[subproject].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}	
	}
}

//Function to display education information 
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		var formattedClassTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedClassSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedClassDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedClassUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedClassTitle + formattedClassSchool);
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
$("#main").append(internationalizeButton);


//Display a map showing live and work place
$("#mapDiv").append(googleMap);


