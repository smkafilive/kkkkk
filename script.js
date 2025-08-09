const departmentSelect = document.getElementById('department');
const submittedToSelect = document.getElementById('submittedTo');
const customDeptGroup = document.getElementById('customDepartmentGroup');
const customFacultyGroup = document.getElementById('customFacultyGroup');
const customDeptInput = document.getElementById('customDepartment');
const customFacultyInput = document.getElementById('customFaculty');

const facultyList = {
    cse: ['Dr. M. A. H. Khan', 'Prof. S. Ahmed', 'Mr. J. Rahman', 'Custom Faculty'],
    eee: ['Dr. R. Karim', 'Prof. L. Chowdhury', 'Mr. M. Hossain', 'Custom Faculty']
};

departmentSelect.addEventListener('change', function() {
    submittedToSelect.innerHTML = '<option value="">Select Faculty</option>';
    if (this.value === 'custom') {
        customDeptGroup.style.display = 'block';
    } else {
        customDeptGroup.style.display = 'none';
        customDeptInput.value = '';
    }
    if (facultyList[this.value]) {
        facultyList[this.value].forEach(name => {
            const option = document.createElement('option');
            option.value = name.toLowerCase().replace(/\s+/g, '-');
            option.textContent = name;
            submittedToSelect.appendChild(option);
        });
    }
});

submittedToSelect.addEventListener('change', function() {
    if (this.value === 'custom-faculty') {
        customFacultyGroup.style.display = 'block';
        customFacultyInput.value = '';
    } else {
        customFacultyGroup.style.display = 'none';
        customFacultyInput.value = '';
    }
});

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => { popup.style.display = 'none'; }, 2500);
}

function generateCoverPage() {
    const reportTitle = document.getElementById('reportTitle').value.trim();
    const courseTitle = document.getElementById('courseTitle').value.trim();
    const courseCode = document.getElementById('courseCode').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const studentId = document.getElementById('studentId').value.trim();
    const batch = document.getElementById('batch').value.trim();
    const department = departmentSelect.value === 'custom'
        ? customDeptInput.value.trim()
        : departmentSelect.options[departmentSelect.selectedIndex].text;
    let submittedTo = submittedToSelect.value === 'custom-faculty'
        ? customFacultyInput.value.trim()
        : submittedToSelect.options[submittedToSelect.selectedIndex]?.text || '';

    if (!reportTitle || !courseTitle || !courseCode || !studentName || !studentId || !batch || !department || !submittedTo) {
        showPopup("⚠️ অনুগ্রহ করে সব ঘর পূরণ করুন");
        return;
    }

    document.getElementById('reportTitleDisplay').textContent = reportTitle;
    document.getElementById('courseTitleDisplay').textContent = courseTitle;
    document.getElementById('courseCodeDisplay').textContent = `Course Code: ${courseCode}`;
    document.getElementById('studentNameDisplay').textContent = `Name: ${studentName}`;
    document.getElementById('studentIdDisplay').textContent = `ID: ${studentId}`;
    document.getElementById('batchDisplay').textContent = `Batch: ${batch}`;
    document.getElementById('departmentDisplay').textContent = `Department: ${department}`;
    document.getElementById('submittedToDisplay').textContent = `Submitted To: ${submittedTo}`;
}

document.querySelectorAll('#reportTitle, #courseTitle, #courseCode, #studentName, #studentId, #batch')
.forEach(input => input.addEventListener('input', generateCoverPage));

document.getElementById('generateBtn').addEventListener('click', generateCoverPage);
document.getElementById('downloadBtn').addEventListener('click', () => {
    generateCoverPage();
    html2pdf().set({
        margin: 0,
        filename: 'cover-page.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(document.getElementById('coverPage')).save();
});
