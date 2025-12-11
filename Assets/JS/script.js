const Symptom = {
    checkBoxes: document.querySelectorAll('input[checkbox]'),
    sympSubmit: document.querySelector('.symCheckResult'),
    result: document.querySelector('#result')
}


// Group the Symptom into three, Mild, Moderate, Severe

// if the user Includes a Symptom that is Mild = Result will appear as Mild

// If one or more severe symptom were checked it will appear as Urgent Attention

// If one or more moderate symptom were checked it will appear as Medical Consultation

// If one or more mild symptom were checked it will appear as Monitor your Symptom