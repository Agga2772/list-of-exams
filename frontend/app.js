document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/api/exams')
      .then(response => response.json())
      .then(data => {
        const examList = document.getElementById('exam-list');
        data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        
   
        window.examsData = data;
  
      
        data.forEach(exam => {
          const li = document.createElement('li');
          li.textContent = `${exam.Title}-${exam.Date}-${exam.LocationName} Candidate-${exam.CandidateName}`;  
          examList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });


  const titleInput = document.getElementById('title-filter');
  const locationInput = document.getElementById('location-filter');
  const candidateInput = document.getElementById('candidate-filter');
  
  titleInput.addEventListener('input', filterExams);
  locationInput.addEventListener('input', filterExams);
  candidateInput.addEventListener('input', filterExams);

  
  function filterExams() {
    const titleText = titleInput.value.toLowerCase();
    const locationText = locationInput.value.toLowerCase();
    const candidateText = candidateInput.value.toLowerCase();
   
    const filteredExams = window.examsData.filter(exam => {
      const examDate = new Date(exam.Date);
      const isTitleMatch = exam.Title.toLowerCase().includes(titleText);
      const isLocationMatch = exam.LocationName.toLowerCase().includes(locationText);
      const isCandidateMatch = exam.CandidateName.toLowerCase().includes(candidateText);

      return isTitleMatch && isLocationMatch && isCandidateMatch;
    });
    
    displayExams(filteredExams);
  }
  
  function displayExams(exams) {
    const examList = document.getElementById('exam-list');
    examList.innerHTML = ''; 
  
    exams.forEach(exam => {
      const li = document.createElement('li');
      li.textContent = `${exam.Title}-${exam.Date}-${exam.LocationName} Candidate-${exam.CandidateName}`;
      examList.appendChild(li);
    });
  }
  
  



    