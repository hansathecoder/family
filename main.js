var images=[
"WhatsApp Image 2021-07-17 at 11.37.49 PM.jpeg",
"WhatsApp Image 2021-07-17 at 11.37.55 PM.jpeg",
"WhatsApp Image 2021-07-17 at 11.36.41 PM.jpeg",
"WhatsApp Image 2021-07-17 at 11.49.36 PM.jpeg",
"WhatsApp Image 2021-07-17 at 11.46.12 PM.jpeg"];

var names=[
"Vijayalakshmi",
"Balaji",
"Hansa",
"Baby Photo",
"Family pic"];
var i=0;
function update()
{

    i++;
    var number_of_family_member_in_array=5;
    if(i >number_of_family_member_in_array)


{
    i=0;
}
var updatedImage=images[i];
var updatedName=names[i];
document.getElementById("family_member_image").src=updatedImage;
document.getElementById("family_member_name").innerHTML=updatedName;

}

