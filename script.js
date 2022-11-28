const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [80, 80, 80, 60, 80, 60];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

function Mail(){

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;

    Email.send({
        SecureToken : "575f27ce-479f-4b63-9f48-ed79387f7e77", 
        To : 'ss3225220@gmail.com',
        From : "ss3225220@gmail.com",
        Subject : "Mail From Sourav Portfolio Website",
        Body : "Name: " + name + "<br/> User Email: " + email + "<br/> User Message: " + message
        }).then(
        message => alert(message)
   );
};
