
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
          <h3>${subjects[i]}</h3>
  
          <!-- Grade as radio buttons -->
          <label>Grades:</label>
          <div>
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
          subjects = ['discreate maths', 'dpco', 'ai', 'ds', 'oops','ess', 'lab1', 'lab2', 'lab3']
          credits = [4, 3, 3, 3, 3, 2, 1, 1, 1]
          addSubjects(subjects);

          break;
        case 'csbs':
          console.log("Department Selected: Computer Science and Business Systems");
          // Perform your actions for CSBS here
          break;
        case 'cce':
          console.log("Department Selected:  CCE");
          // Perform your actions for CCE here
          break;
        case 'aids':
          console.log("Department Selected: Artificial Intelligence and Data Science");
          // Perform your actions for AIDS here
          break;
        case 'aiml':
          console.log("Department Selected: Artificial Intelligence and Machine Learning");
          // Perform your actions for AIML here
          break;
        case 'ece':
          console.log("Department Selected: Electronics and Communication Engineering");
          // Perform your actions for ECE here
          break;
        case 'vlsi':
          console.log("Department Selected: VLSI Design");
          // Perform your actions for VLSI here
          break;
        case 'mech':
          console.log("Department Selected: Mechanical Engineering");
          // Perform your actions for MECH here
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
            alert(`Please select a grade for subject ${i + 1}`);
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


