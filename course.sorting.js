// Define the courses array
let courses = [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "HTML & CSS Fundamentals" },
    { id: 3, title: "Python for Beginners" },
    { id: 4, title: "React Crash Course" },
    { id: 5, title: "Node.js Essentials" }
  ];
  
  // Sort the courses array by course title
  courses.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
  
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });
  
  // Display the sorted list of courses
  console.log("Sorted Courses:");
  for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].title);
  }
  