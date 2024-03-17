let project = document.getElementsByClassName("project");
let projectIndex = 1;

showProject(projectIndex);

function showProject(n) {
    // To go to 1st slide after clicking forward arrow on last slide
    if (n > project.length) {
        projectIndex = 1;
    }
    // To go to last slide after clicking backward arrow on last slide
    if (n < 1) {
        projectIndex = project.length;
    }
    // Hide all slides with for loop
    for (let i = 0; i < project.length; i++) {
        project[i].style.display = "none";
    }
    project[projectIndex - 1].style.display = "flex";
}

function navigateProject(n) {
    // Change the slide index if forward or backward arrow is clicked
    showProject(projectIndex += n);
}