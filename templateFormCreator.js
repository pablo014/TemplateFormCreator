class Question {
    constructor() {
        this.question = '';
        this.type = '';
        this.options = [];
        this.hasConditional = false;
        this.conditonalQuestions = [];
    }
}


function showTemplate() {
    document.getElementById('questionList').innerHTML += '<div id="questionTemplate"><label for="question">What Would You Like To Ask?</label><input type="text" id="question"><br><br><label for="questionType">What Type of Question is it?</label><select name="questionType" id="questionType" onchange="selectDropdown()"><option value="text">Text</option><option value="dropdown">Dropdown List</option><option value="checkbox">Checkbox</option><option value="date">Date</option><option value="number">Number</option><option value="file">File Upload</option></select><br><div id="dropdown"></div></div>'
}

function selectDropdown() {
    alert(document.getElementById('questionType').value)
    var questionType = document.getElementById('questionType').value
    switch(questionType) {
        case 'text' :
            document.getElementById('dropdown').innerHTML = ''
            break;
        case 'dropdown' :
            document.getElementById('dropdown').innerHTML = ''
            break;
        case 'checkbox' :
            document.getElementById('dropdown').innerHTML = ''
            break;
        case 'date' :
            document.getElementById('dropdown').innerHTML = ''
            break;
        case 'number' :
            document.getElementById('dropdown').innerHTML = ''
            break;
        case 'file' :
            document.getElementById('dropdown').innerHTML = ''
            break;
    }
}