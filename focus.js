c = new URL(window.location.href).search.replace("?f=", "")

if(c != "")
{
toggleSec('sec'+c.replace("elem", "")[0]);
toggleThing(c); 
toggleSec('subsec'+c.replace("elem", ""));

document.getElementById(c).previousElementSibling.scrollIntoView({
  behavior: "smooth", // smooth animation
  block: "start"      // aligns to top of viewport
});
}