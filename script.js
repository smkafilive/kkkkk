// Faculty data
const facultyData = {
    "CSE": [
        "Fazle Rabby, Assistant Professor & Head",
        "Fazle Rabbi Rushu, Assistant Professor",
        "Afrin Jahan Chowdhury, Lecturer",
        "Md. Rafiuzzaman, Lecturer",
        "Afia Farzana, Lecturer",
        "MD. Abdul Hye, Professor & Dean, Engineering Faculty"
    ],
    "EEE": [
        "Junaid Bin Fakhrul Islam, Assistant Professor & Head",
        "Md. Hasanuzzaman, Assistant Professor",
        "Md. Al-Arman Chowdhury Asif, Lecturer",
        "Sheikh Md. Shafiqul Islam, Lecturer"
    ],
    "BBA": [
        "Rashel Sheikh, Associate Professor & Dean",
        "Md. Maksodul Haque Sawrov, Assistant Professor & Head",
        "Md. Tareq Hasan, Assistant Professor",
        "Md. Mirajul Islam, Assistant Professor",
        "Bithi Rani Debnath, Lecturer"
    ],
    "LAW": [
        "G.M. Ikramul Kabir, Assistant Professor & Head",
        "Hadiuzzaman, Assistant Professor",
        "Md. Taibur Rahman, Lecturer",
        "Tangila Yasmeen, Lecturer",
        "Happy Akter, Lecturer",
        "Mubtasim Alam Musavee, Lecturer"
    ],
    "English": [
        "Md. Amirul Mumeneen, Associate Professor & Head",
        "Md. Shaon Akter, Assistant Professor",
        "Mst. Tanna Khatun, Assistant Professor",
        "Md. Naymul Islam, Lecturer"
    ],
    "Economics": [
        "Md. Minhaz Uddin, Assistant Professor & Head",
        "Md. Hasanur Rahman, Lecturer"
    ],
    "Political Science": [
        "Sidratul Montaha, Assistant Professor & Head",
        "Afroza Yasmin Mitu, Lecturer",
        "Dil Noshina Jannat, Lecturer",
        "Md. Mehabub Hasan, Lecturer"
    ]
};

// Department full names
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

// Function to display a custom message box
function showMessageBox(message, type = 'error') {
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${type === 'error' ? '#ffdddd' : '#d4edda'};
        border: 1px solid ${type === 'error' ? '#ff0000' : '#28a745'};
        color: ${type === 'error' ? '#721c24' : '#155724'};
        padding: 20px;
        border-radius: 8px;
        z-index: 1000;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        text-align: center;
    `;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);
    setTimeout(() => messageBox.remove(), 5000); // Remove after 5 seconds
}


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
        showMessageBox('অনুগ্রহ করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন!', 'error'); // Please fill all required fields!
        console.error('Validation Error: Please fill all required fields!');
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
    showMessageBox('কভার পেজ তৈরি হয়েছে! এখন ডাউনলোড করতে পারেন।', 'success'); // Cover page generated! You can download now.
});

// Download as PDF
downloadBtn.addEventListener('click', function() {
    console.log('Download button clicked.');
    // Define the options for html2pdf
    const options = {
        margin: 10, // Margins in mm
        filename: 'SFMU_Cover_Page.pdf',
        image: {
            type: 'png', // Changed image type to PNG for lossless quality
            quality: 1.0 // Quality setting is less relevant for PNG but kept for consistency
        },
        html2canvas: {
            scale: 10, // High scale for maximum resolution
            useCORS: true, // Enable CORS for images
            allowTaint: true // Allow images to taint the canvas (for cross-origin images)
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    // Get the element to be converted
    const element = document.getElementById('coverPage');
    console.log('Element to convert:', element);

    if (!element) {
        showMessageBox('পিডিএফ তৈরি করার জন্য কভার পেজ খুঁজে পাওয়া যায়নি!', 'error'); // Cover page element not found for PDF generation!
        console.error('Error: Cover page element not found.');
        return;
    }

    try {
        console.log('Attempting to generate PDF...');
        html2pdf().set(options).from(element).save()
            .then(() => {
                console.log('PDF generation successful!');
                showMessageBox('পিডিএফ সফলভাবে ডাউনলোড হয়েছে!', 'success'); // PDF downloaded successfully!
            })
            .catch(error => {
                console.error('PDF generation failed:', error);
                showMessageBox(`পিডিএফ তৈরি করতে সমস্যা হয়েছে: ${error.message}`, 'error'); // Problem generating PDF:
            });
    } catch (e) {
        console.error('Unexpected error during PDF generation initiation:', e);
        showMessageBox(`একটি অপ্রত্যাশিত ত্রুটি হয়েছে: ${e.message}`, 'error'); // An unexpected error occurred:
    }
});

// Animation on scroll
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
