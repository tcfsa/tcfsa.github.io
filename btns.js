var temp_semesterList = null;
var k=0;

function toggleSec(courseName) {
  const semesterList = document.getElementById(courseName);

  k=0;

  if(temp_semesterList!=null)
  {
    if(semesterList!=temp_semesterList||k==0)
    {
      temp_semesterList.style.display = "none";
     document.documentElement.style.setProperty('--course-item-hover-clr', '#3890f5');
      temp_semesterList=null;
    }
  }

  var def_color = (window.location.href=="https://tcfsa.github.io/") ? '#8A8A8A' : '#575757';

  // Toggle the visibility of the semester list
  if (semesterList.style.display === "none" || semesterList.style.display === "") {
    semesterList.style.display = "block"; // Show the semesters
     document.documentElement.style.setProperty('--course-item-hover-clr', def_color);
  } else {
    semesterList.style.display = "none"; // Hide the semesters
     document.documentElement.style.setProperty('--course-item-hover-clr', '#3890f5');
  }
  if(temp_semesterList!=null)
  {
      temp_semesterList.style.display = "block";
     document.documentElement.style.setProperty('--course-item-hover-clr', def_color);
    
  }
}

function keep(courseName) {
  const semesterList = document.getElementById(courseName);

  temp_semesterList=semesterList;
  k=1;

}



