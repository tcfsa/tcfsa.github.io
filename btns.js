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
      temp_semesterList=null;
    }
  }

  // Toggle the visibility of the semester list
  if (semesterList.style.display === "none" || semesterList.style.display === "") {
    semesterList.style.display = "block"; // Show the semesters
  } else {
    semesterList.style.display = "none"; // Hide the semesters
  }
  if(temp_semesterList!=null)
  {
      temp_semesterList.style.display = "block";
     temp_semesterList.parentNode.style.backgroundColor = "#575757";
    
  }
}

function keep(courseName) {
  const semesterList = document.getElementById(courseName);

  temp_semesterList=semesterList;
  k=1;

}
