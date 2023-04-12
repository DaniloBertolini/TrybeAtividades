const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const tasksEmergency = document.getElementsByClassName('emergency-tasks')[0];
tasksEmergency.style.backgroundColor = 'rgb(255, 159, 132)';

const tasksEmergencyHeader = document.querySelectorAll('.emergency-tasks h3');
for (let i=0; i<tasksEmergencyHeader.length; i+= 1) {
    tasksEmergencyHeader[i].style.backgroundColor = 'rgb(165, 0, 243)'
}

const tasksNoEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
tasksNoEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

const tasksNoEmergencyHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let i=0; i<tasksNoEmergencyHeader.length; i+= 1) {
    tasksNoEmergencyHeader[i].style.backgroundColor = 'rgb(35, 37, 37)'
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';