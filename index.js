
var subjects = [];
var credits = [];
var department = $("#department")


function addSubjects(subjects) {
    console.log("function triggered ");
  
    // Clear existing content in the container
    $('.subjects-container').empty();
  
    // Dynamically generate subjects without credits
    for (let i = 0; i < subjects.length; i++) {
      let subjectContent = `
        <div class="subject">
          <h3>${i+1 +'. ' + subjects[i]}</h3>
  
          <!-- Grade as radio buttons -->
          <label>Grades:</label>
          <div class='grade-options'>
            <label><input type="radio" name="subject${i}-grade" value="10"> O</label>
            <label><input type="radio" name="subject${i}-grade" value="9"> A+</label>
            <label><input type="radio" name="subject${i}-grade" value="8"> A</label>
            <label><input type="radio" name="subject${i}-grade" value="7"> B+</label>
            <label><input type="radio" name="subject${i}-grade" value="6"> B</label>
            <label><input type="radio" name="subject${i}-grade" value="5"> C</label>
            <label><input type="radio" name="subject${i}-grade" value="0"> U</label>
          </div>
        </div>
        <br>
      `;
  
      // Append dynamically created subject to the container
      $('.subjects-container').append(subjectContent);
    }
  }


  
// based on changes in the department generate the no.of subjects and their credits
function showSubjects(dept){
    switch(dept) {
        case 'cse':
          console.log("Department Selected: Computer Science and Engineering");
          subjects = ['Discrete Mathematics', 'Digital Principles and Computer Organization', 'Artificial Intellegence', 'Data Structures', 'Object Oriented Programmings','Environmental Science and Sustainability', 'OOPS Lab', 'Design Thinking Lab', 'DS Lab']
          credits = [4, 4, 3, 3, 3, 2, 1, 1, 1]
          addSubjects(subjects);
          break;
        case 'csbs':
          console.log("Department Selected: Computer Science and Business Systems");
          subjects = ['Discrete Mathematics', 'Object Oriented Programming', 'Data Structures and Algorithms', 'Fundamentals of Economics and Financial Accounting', 'Digital Principles and Computer Organization', 'OOPS Lab', 'DSA Lab', 'Design Thinking lab'];
          credits = [4, 3, 3, 4, 5, 2, 2, 1];
          addSubjects(subjects);
          break;
        case 'cce':
          console.log("Department Selected:  CCE");
          // Perform your actions for CCE here
          subjects = ['Signals and System', 'Datastructures and Algorithms', 'Digital Processing and Computer Organisation', 'Object Oriented Programming', 'Discrete Mathematics','DSA Lab', 'OOPS Lab', 'One Credit course'];
          credits = [4, 3, 3, 3, 4, 1, 1, 1];
          addSubjects(subjects);
          break;
        case 'aids':
          console.log("Department Selected: Artificial Intelligence and Data Science");
          // Perform your actions for AIDS here
          subjects = ['Discrete Mathematics', 'Artificial Intelligence', 'Database Management system', 'Object oriented Programming', 'Digital Principles and Computer Organization', 'AI Lab', 'DBMS Lab', 'OOPS Lab', 'One Credit Course'];
          credits = [4,3,3,3,4,1,1,1,1];
          addSubjects(subjects);
          break;
        case 'aiml':
          console.log("Department Selected: Artificial Intelligence and Machine Learning");
          // Perform your actions for AIML here
          
          subjects = [];
          credits = [];
          addSubjects(subjects);
          break;
        case 'ece':
          console.log("Department Selected: Electronics and Communication Engineering");
          // Perform your actions for ECE here
          subjects = ['Digital System Design', 'Control System', 'Signals and System', 'Environmental Science and Sustainability', 'Object Oriented Programming', 'OOPS Lab', 'DSD Lab', 'PCB Design'];
          credits = [3, 3, 4, 2, 3, 1, 1, 1];
          addSubjects(subjects);
          break;
        case 'vlsi':
          console.log("Department Selected: VLSI Design");
          // Perform your actions for VLSI here
          subjects=['ESS', 'Signals and System', 'Digital System Design', 'OOPS', 'Wide Bandgap Devices', 'DSD Lab', 'OOPS Lab']
          credits = [2, 4, 3, 3, 3, 1, 1, 1];
          addSubjects(subjects);
          break;
        case 'mech':
          console.log("Department Selected: Mechanical Engineering");
          // Perform your actions for MECH here
          subjects = ['Transforms and Partial Differential Equations', 'Engineering Mechanics', ' Engineering Thermodynamics', ' Fluid Mechanics and Machinery', 'Manufacturing Processes', ' Object Oriented Programming', 'Computer Aided Machine Drawing Laboratory', 'OOPS Lab'];
          credits = [4, 3, 4, 4, 3, 3, 1, 1];
          addSubjects(subjects);
          break;
        default:
          console.log("No department selected.");
          break;
      }
  }



  function fetchGrades(numSubjects) {
    console.log("fetch function triggered");

    let gradesArray = [];

    for (let i = 0; i < numSubjects; i++) {
        // Get the selected grade for each subject
        const selectedGrade = $(`input[name="subject${i}-grade"]:checked`).val();

        if (selectedGrade) {
            gradesArray.push(parseInt(selectedGrade)); // Add to grades array
        } else {
            // If no grade is selected, show an alert
            alert(`Please select a grade for  ${subjects[i]}`);
            return;
        }
    }

    // Print the grades array
    console.log("Grades array:", gradesArray);
    return gradesArray;

    // Display the grades below the button
}

// Button click to calculate grades
$('#calculate-btn').click(function () {
    var scored_credits = fetchGrades(subjects.length);
    let total_credits = credits.reduce((a, b) => a + b, 0);
    var total_credits_points = 0;
    console.log('scored credits'+scored_credits)
    for(var i=0;i<subjects.length;i++){
        total_credits_points += scored_credits[i] * credits[i]
    }
    var gpa = (total_credits_points/total_credits).toFixed(2);
    console.log(gpa)
    $('#result').html(`<h4>GPA: ${gpa}</h4>`);


});


department.on('change', function() {
  // Get the selected value
  var selectedValue = $(this).val();
  console.log(selectedValue)
  showSubjects(selectedValue)
});
document.addEventListener('DOMContentLoaded', function () {
  // Get the stored view count from localStorage
  let viewCount = localStorage.getItem('viewCount');

  // If viewCount is null, initialize it to 0
  if (viewCount === null) {
      viewCount = 0;
  } else {
      viewCount = parseInt(viewCount);
  }

  // Increment the view count
  viewCount++;

  // Update the view count in localStorage
  localStorage.setItem('viewCount', viewCount);

  // Display the updated view count in the span element
  document.getElementById('view-count').textContent = viewCount;
});




