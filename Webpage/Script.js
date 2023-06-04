let LightMode = false;
let BackgroundDiv = document.getElementsByClassName("bg-image");

function OnClick()
{
    if(LightMode)
    {
        LightMode = false;

        BackgroundDiv[0].style.backgroundImage='url("Images/background-night.jpg")';
    }
    else
    {
        LightMode = true;

        BackgroundDiv[0].style.backgroundImage='url("Images/background-day.jpg")';
    }
}