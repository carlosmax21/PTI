function toggleMenu()
{
    let display = document.getElementById("show");
    if(display.style.display ==="none")
    {
        display.style.display = "block";    
    }
    else
    {
        display.style.display = "none";
    }
    togglepopup();
}
function togglepopup()
{
    document.getElementById("welcomeMenu").classList.toggle("active");
}

var counter = 0;
            function counterColour()
            {
                if (counter < 0 && counter >=-5) { 
                    document.getElementById("counter").style.backgroundColor = "rgb(255, 255, 51)";
                }
                if (counter >= 0 && counter <= 5) { 
                    document.getElementById("counter").style.backgroundColor = "lightgrey";
                }
                if (counter > 5) { 
                    document.getElementById("counter").style.backgroundColor = "lightgreen";
                }
                if (counter < -5) { 
                    document.getElementById("counter").style.backgroundColor = "rgb(140, 26, 255)";
                }
            }
            function counterUp()
            {
                counter += 1;
                document.getElementById("counter").innerHTML = counter;
                counterColour();
            }
            function counterDown() {
                counter -= 1;
                document.getElementById("counter").innerHTML = counter;
                counterColour();
                if(counter === -10) {
                    setTimeout(() => {
                    alert('Back to home again!');
                    window.location='home.html';  
                    }, 10);
                }
            };

function newColour()
{
    let button = document.getElementById('change');
    let text = document.getElementById('colour')
    let generator = function()
    {
        colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        console.log(newColour.length);
        if(colour.length < 7)
        {
            generator();
        }
    }
    generator()
    document.body.style.background = colour;
    button.style.color = colour;
    text.innerText = colour;
}

function goToHome()
{
    alert('Back to home again!');
    setTimeout(function(){window.location='home.html';},10);
}

function goToInstagram()
{
    location.href = "https://www.instagram.com/carlosmax21/"
}

function goToFacebook()
{
    location.href = "https://www.facebook.com/carlos.maximiliano.7773/"
}