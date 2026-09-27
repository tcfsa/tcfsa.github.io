var temp_semesterList = null;
var k=0;
var op=0;
var opcicada=0;

function toggleThing(courseName) {
  const semesterList = document.getElementById(courseName);

  if (semesterList.style.display === "none" || semesterList.style.display === "") {
    semesterList.style.display = "block"; // Show the semesters
  } else {
    semesterList.style.display = "none"; // Hide the semesters
  }
}

function toggleSec(courseName) {
  const semesterList = document.getElementById(courseName);

  k=0;

  if(temp_semesterList!=null)
  {
    if(semesterList!=temp_semesterList||k==0)
    {
      temp_semesterList.style.display = "none";
    op-=1;
      temp_semesterList=null;
    }
  }

  var def_color = null;


  // if(semesterList.previousElementSibling.textContent=="Recources by CiCADA")
  // {
  //   def_color = (window.location.href=="https://www.smpfsa.com/") ? '#2d2d2d' : '#eb1545';

  // }
  // else
  // {
  def_color = (window.location.href=="https://www.smpfsa.com/") ? '#8A8A8A' : '#575757';

  // }



  // Toggle the visibility of the semester list
  if (semesterList.style.display === "none" || semesterList.style.display === "") {
    semesterList.style.display = "block"; // Show the semesters
     document.documentElement.style.setProperty('--course-item-hover-clr', def_color);
    if(courseName=="sec5")
    {
      opcicada+=1;
    }
    else
    {

    op+=1;
    }
  } else {
    semesterList.style.display = "none"; // Hide the semesters
    if(courseName=="sec5")
    {
      opcicada-=1;
    }
    else
    {
    op-=1;

    }
  }
  if(temp_semesterList!=null)
  {
      temp_semesterList.style.display = "block";
     document.documentElement.style.setProperty('--course-item-hover-clr', def_color);

    if(courseName=="sec5")
    {
      opcicada+=1;
    }
    else
    {
    op+=1;
      
    }
    
  }
  if(op==0)
  {
     document.documentElement.style.setProperty('--course-item-hover-clr', '#3890f5');
    
  }
}

function keep(courseName) {
  const semesterList = document.getElementById(courseName);

  temp_semesterList=semesterList;
  k=1;

}






const loop = setInterval(() => {
  
    const element = document.getElementById("sec5").parentElement;

    // Vérifie si l'élément est actuellement survolé (renvoie true ou false)
    if (element.matches(':hover')&&opcicada==0) {
      // console.log("L'élément est survolé !");
         document.documentElement.style.setProperty('--cicada-hover-clr', '#eb1545');
    } else {
         document.documentElement.style.setProperty('--cicada-hover-clr', '#2d2d2d');
    }

}, 100);