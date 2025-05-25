// Data for departments and faculties
const facultyData = {
    "CSE": ["Dr. A. Rahman", "Dr. N. Islam", "Dr. S. Haque"],
    "EEE": ["Dr. J. Karim", "Dr. M. Alam"],
    "BBA": ["Dr. T. Khatun", "Dr. H. Sarker"],
    "LAW": ["Dr. F. Ahmed"],
    "Economics": ["Dr. Z. Hassan"],
    "English": ["Dr. L. Chowdhury"],
    "Political Science": ["Dr. P. Das"]
};
const departmentFullNames = {
    "CSE": "Computer Science & Engineering",
    "EEE": "Electrical & Electronic Engineering",
    "BBA": "Business Administration",
    "LAW": "Law",
    "Economics": "Economics",
    "English": "English",
    "Political Science": "Political Science"
};

// DOM elements
const departmentSelect = document.getElementById('department');
const submittedToSelect = document.getElementById('submittedTo');
const customFacultyInput = document.getElementById('customFaculty');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const coverPage = document.getElementById('coverPage');

// Form display elements
const reportTypeDisplay = document.getElementById('reportTypeDisplay');
const reportTitleDisplay = document.getElementById('reportTitleDisplay');
const courseTitleDisplay = document.getElementById('courseTitleDisplay');
const courseCodeDisplay = document.getElementById('courseCodeDisplay');
const submittedToDisplay = document.getElementById('submittedToDisplay');
const facultyDeptDisplay = document.getElementById('facultyDeptDisplay');
const studentNameDisplay = document.getElementById('studentNameDisplay');
const studentIdDisplay = document.getElementById('studentIdDisplay');
const batchDisplay = document.getElementById('batchDisplay');
const studentDeptDisplay = document.getElementById('studentDeptDisplay');
const submissionDateDisplay = document.getElementById('submissionDateDisplay');

// Initialize date picker with today's date
document.getElementById('submissionDate').valueAsDate = new Date();

// Department change event
departmentSelect.addEventListener('change', function() {
    const selectedDept = this.value;
    submittedToSelect.innerHTML = '';
    submittedToSelect.disabled = !selectedDept;
    customFacultyInput.style.display = 'none';
    
    if (selectedDept) {
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select Faculty';
        submittedToSelect.appendChild(defaultOption);
        
        // Add faculty options
        facultyData[selectedDept].forEach(faculty => {
            const option = document.createElement('option');
            option.value = faculty;
            option.textContent = faculty;
            submittedToSelect.appendChild(option);
        });
        
        // Add custom option
        const customOption = document.createElement('option');
        customOption.value = 'custom';
        customOption.textContent = 'Custom Faculty';
        submittedToSelect.appendChild(customOption);
    }
});

// Submitted To change event
submittedToSelect.addEventListener('change', function() {
    if (this.value === 'custom') {
        customFacultyInput.style.display = 'block';
        customFacultyInput.value = '';
    } else {
        customFacultyInput.style.display = 'none';
    }
});

// Generate cover page
generateBtn.addEventListener('click', function() {
    // Get form values
    const reportType = document.getElementById('reportType').value;
    const reportTitle = document.getElementById('reportTitle').value;
    const courseTitle = document.getElementById('courseTitle').value;
    const courseCode = document.getElementById('courseCode').value;
    const department = document.getElementById('department').value;
    const submittedTo = submittedToSelect.value === 'custom' ? customFacultyInput.value : submittedToSelect.value;
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const batch = document.getElementById('batch').value;
    const studentDept = document.getElementById('studentDept').value;
    const submissionDate = document.getElementById('submissionDate').value;
    
    // Validate required fields
    if (!reportTitle || !courseTitle || !courseCode || !department || !submittedTo || !studentName || !studentId || !batch || !submissionDate) {
        alert('Please fill all required fields!');
        return;
    }
    
    // Format date
    const dateObj = new Date(submissionDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update cover page
    reportTypeDisplay.textContent = reportType;
    reportTitleDisplay.textContent = reportTitle;
    courseTitleDisplay.textContent = `Course Title: ${courseTitle}`;
    courseCodeDisplay.textContent = `Course Code: ${courseCode}`;
    submittedToDisplay.textContent = submittedTo;
    facultyDeptDisplay.textContent = `Department of ${departmentFullNames[department]}, SFMU`;
    studentNameDisplay.textContent = `Name: ${studentName}`;
    studentIdDisplay.textContent = `ID: ${studentId}`;
    batchDisplay.textContent = `Batch: ${batch}`;
    studentDeptDisplay.textContent = `Department of ${departmentFullNames[studentDept]}`;
    submissionDateDisplay.textContent = `Date: ${formattedDate}`;
    
    // Enable download button
    downloadBtn.disabled = false;
    
    // Scroll to preview
    coverPage.scrollIntoView({ behavior: 'smooth' });
});

// Download as PDF (wait for logo to load and DOM to update!)
downloadBtn.addEventListener('click', function() {
    const logo = document.getElementById('universityLogo');
    if (!logo.complete) {
        logo.onload = () => setTimeout(generatePDF, 200);
        logo.onerror = () => alert("Logo image failed to load! PDF may be blank.");
    } else {
        // Wait for DOM updates
        setTimeout(generatePDF, 200);
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

        html2canvas(coverPage, {
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            doc.save('SFMU_Cover_Page.pdf');
        }).catch(error => {
            console.error("Error generating PDF:", error);
            alert("Failed to generate PDF. This often happens if an image (like your logo) cannot be loaded. Please check the browser console (F12) for network errors related to sfmu.png and ensure it's in the correct location.");
        });
    }
});

// Animation on scroll (optional)
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.form-group, .cover-page, footer');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initial animation trigger
window.dispatchEvent(new Event('scroll'));
