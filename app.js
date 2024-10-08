function calculatePercentage(marks) {
    var totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return (totalMarks / (marks.length * 100)) * 100;
}

function findGrade(percentage) {
    if (percentage >= 90) {
        return 'A+';
        } else if (percentage >= 80) {
            return 'A';
        } else if (percentage >= 70) {
            return 'B';
        } else if (percentage >= 60) {
            return 'C';
        } else if (percentage >= 50) {
            return 'D';
        } else {
            return 'F';
        }
    }
    
    function calculateScholarship(grade) {
        switch (grade) {
            case 'A+'  :
                return "80% Scholarship";
            case 'A':
                return "60% Scholarship";
            case 'B':
                return "40% Scholarship";
                case 'C':
                return "20% Scholarship";
                case 'D':
                    return "5% Scholarship";
                    default:
                        return "No Scholarship";
                    }
                }
                
                function enterStudentData() {
                    var userName = prompt("Please enter the student's name:");
                    var marks = [];
                    
         var subjects = ['Math', 'English', 'Urdu', 'Biology', 'Physics']; 

        for (var i = 0; i < subjects.length; i++) {
            var subjectMark = parseFloat(prompt('Enter marks for '+ subjects[i]+':'));
            marks.push(subjectMark);
        }

        var percentage = calculatePercentage(marks);
        var grade = findGrade(percentage);
        var scholarship = calculateScholarship(grade);

        displayResult(userName, Math.round(percentage), grade, scholarship);
    }

    function displayResult(userName, percentage, grade, scholarship) {
        var tableBody = document.querySelector('#resultTable tbody');
        
        var tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        
        var nameData = document.createElement('td');
        nameData.innerText = userName;
        tableRow.appendChild(nameData);

        var percentageData = document.createElement('td');
        percentageData.innerText = percentage+''+'%';
        tableRow.appendChild(percentageData);

        var gradeData = document.createElement('td');
        gradeData.innerText = grade;
        tableRow.appendChild(gradeData);

        var scholarshipData = document.createElement('td');
        scholarshipData.innerText = scholarship;
        tableRow.appendChild(scholarshipData);
    }

    document.getElementById('addStudentButton').addEventListener('click', function() {
        enterStudentData();
    });
    function toggleTheme(){
        var bodyElm = document.getElementsByTagName("body")[0];
        var bodyClass = bodyElm.getAttribute("class");
        var button = document.getElementById('theme');
    
        if(button.checked){
            bodyElm.setAttribute("class", "dark")
            button.innerText = "Light Theme";
        }
        else{
            bodyElm.setAttribute("class", "light");
            button.innerText = "Dark Theme";

        }
    }
    