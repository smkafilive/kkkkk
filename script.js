/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    padding: 20px;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

header {
    text-align: center;
    margin-bottom: 30px;
    animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
}

.title {
    font-size: 2.5rem;
    color: #4a6baf;
    margin-bottom: 5px;
    background: linear-gradient(to right, #4a6baf, #6a11cb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}

.subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 300;
}

.form-container {
    display: flex;
    gap: 30px;
    animation: fadeIn 0.7s ease-in-out;
}

.input-section {
    flex: 1;
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.preview-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.form-group {
    margin-bottom: 20px;
    animation: fadeIn 0.5s ease-in-out;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #555;
}

.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s;
    background-color: #fff;
}

.form-control:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.1);
}

.btn {
    background: linear-gradient(to right, #4a6baf, #6a11cb);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s;
    width: 100%;
    margin-top: 10px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
}

.btn:active {
    transform: translateY(0);
}

.download-btn {
    background: linear-gradient(to right, #2c7744, #5cb85c);
}

.download-btn:hover {
    box-shadow: 0 5px 15px rgba(44, 119, 68, 0.3);
}

/* Cover Page Styles */
.cover-page {
    width: 210mm;
    height: 297mm;
    background-color: white;
    padding: 25mm;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
    animation: zoomIn 0.5s ease-in-out;
}

@keyframes zoomIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

.logo-container {
    text-align: center;
    margin-bottom: 20px;
}

.logo-container img {
    max-height: 80px;
    max-width: 100%;
}

.university-name {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #4a6baf;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.report-info {
    text-align: center;
    margin-bottom: 60px;
}

.report-type {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #333;
}

.report-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #222;
    text-decoration: underline;
}

.course-info {
    font-size: 18px;
    color: #555;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
    flex-wrap: wrap; /* Added for responsiveness */
}

.faculty-info, .student-info {
    margin-bottom: 40px;
}

.section-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
    color: #4a6baf;
}

.faculty-name {
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
}

.faculty-dept {
    font-size: 16px;
    text-align: center;
    color: #555;
}

.student-info {
    align-self: flex-start;
    margin-left: 20px;
    /* Removed fixed margin-left for better responsiveness */
    width: 100%; /* Ensure it takes full width for centering */
    text-align: left; /* Default alignment */
}

.student-name, .student-id, .student-batch, .student-dept {
    font-size: 16px;
    margin-bottom: 8px;
}

.submission-date {
    position: absolute;
    bottom: 25mm;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 16px;
    color: #555;
}

footer {
    text-align: center;
    margin-top: 30px;
    color: #666;
    font-size: 14px;
    animation: fadeIn 1s ease-in-out;
}

/* Responsive Design */
@media (max-width: 992px) {
    .form-container {
        flex-direction: column;
    }
    
    .cover-page {
        width: 100%;
        height: auto; /* Allow height to adjust */
        aspect-ratio: 210 / 297; /* Maintain A4 aspect ratio */
        max-width: 210mm; /* Ensure it doesn't get excessively wide on larger screens */
        margin: 0 auto; /* Center the cover page */
    }

    .university-name {
        font-size: 4vw; /* Responsive font size */
    }

    .report-title {
        font-size: 4.5vw; /* Responsive font size */
    }

    .report-type {
        font-size: 3.5vw; /* Responsive font size */
    }

    .course-info, .section-title, .faculty-name, .faculty-dept, 
    .student-name, .student-id, .student-batch, .student-dept, .submission-date {
        font-size: 3vw; /* Responsive font size */
    }

    .logo-container img {
        max-height: 10vw; /* Responsive logo height */
    }
}

@media (max-width: 768px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 20px;
    }
    
    .title {
        font-size: 1.8rem;
    }
    
    .subtitle {
        font-size: 0.9rem;
    }
    
    .input-section {
        padding: 20px;
    }
    
    .cover-page {
        padding: 10mm; /* Reduced padding for smaller screens */
    }

    .student-info {
        margin-left: 0; /* Remove margin for smaller screens */
        text-align: center; /* Center student info */
    }

    .student-name, .student-id, .student-batch, .student-dept {
        text-align: center; /* Center text within student info */
    }
}

@media (max-width: 576px) {
    .container {
        padding: 10px;
    }

    .title {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 0.8rem;
    }

    .input-section {
        padding: 15px;
    }

    .form-control {
        font-size: 14px;
        padding: 10px 12px;
    }

    .btn {
        font-size: 14px;
        padding: 10px 20px;
    }

    .cover-page {
        padding: 8mm; /* Further reduced padding */
    }

    .university-name {
        font-size: 4.5vw; /* Slightly larger for readability on very small screens */
    }

    .report-title {
        font-size: 5vw; /* Slightly larger */
    }

    .report-type {
        font-size: 4vw; /* Slightly larger */
    }

    .course-info, .section-title, .faculty-name, .faculty-dept, 
    .student-name, .student-id, .student-batch, .student-dept, .submission-date {
        font-size: 3.5vw; /* Slightly larger */
    }
}

/* Animation for form elements */
.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.2s; }
.form-group:nth-child(3) { animation-delay: 0.3s; }
.form-group:nth-child(4) { animation-delay: 0.4s; }
.form-group:nth-child(5) { animation-delay: 0.5s; }
.form-group:nth-child(6) { animation-delay: 0.6s; }
.form-group:nth-child(7) { animation-delay: 0.7s; }
.form-group:nth-child(8) { animation-delay: 0.8s; }
.form-group:nth-child(9) { animation-delay: 0.9s; }
.form-group:nth-child(10) { animation-delay: 1.0s; }
