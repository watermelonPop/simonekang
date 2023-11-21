
function open(filename){ //use to switch pages in the on click events below
        window.location= filename;
}

//on click events to switch pages on div click
document.getElementById('aboutLink').addEventListener('click', function() {
        open("about.html");
});

document.getElementById('qualLink').addEventListener('click', function() {
        open("qualifications.html");
});

document.getElementsByClassName("box")[0].addEventListener('click', function() {
        open("qualifications.htlml");
});

document.getElementById('portLink').addEventListener('click', function() {
        open("portfolio.html");
});

document.getElementById('serviceLink').addEventListener('click', function() {
        open("service.html");
});


function toggleStyleSheet(){//called every time the toggle button is clicked
        // get style link element
        let styleLinks = document.getElementsByClassName("styleSheet");
        //if the current href on the style sheet is style1, switch to style 2
        if(styleLinks[0].getAttribute("href") == "style1.css"){
                styleLinks[0].setAttribute("href", "style2.css");//change the href of the style link
                localStorage.setItem("href", "style2.css");//commit the stylesheet to local storage for persistence in page switch and refresh
        }else{//if the current href is style2, switch back to style1
                styleLinks[0].setAttribute("href", "style1.css");
                localStorage.setItem("href", "style1.css");
        }
}

function loadStyle(){//is called onload of every page(on page load and switch)
        //checks if user has been to the page already before
        if(localStorage.getItem("href") != null){//if been here before, set it to the theme last chosen on the page using local storage
                document.getElementsByClassName("styleSheet")[0].setAttribute("href", localStorage.getItem("href"));
                if(localStorage.getItem("href") == "style2.css"){
                        document.getElementById("themeChange").checked = true;//makes sure that the current toggle direction matches with the theme(left = purple, right = pink)
                }
        }else{//if never been to page before the initial style is style1
                document.getElementsByClassName("styleSheet")[0].setAttribute("href", "style1.css");
        }
}

