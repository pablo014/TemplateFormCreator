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

function downloadPdf() {
    var sTable = document.getElementById('contentTable').innerHTML;

var style = "<style>";
style = style + "table {border-collapse: collapse;width: 100%;}td {border: 1px solid #000000;text-align: left;padding: 8px;}";
style = style + "</style>";

var win = window.open('', '', 'height=700,width=700');

win.document.write('<html><head>');
win.document.write('<title>'+ 'Add a Driver Form: ' + client.name + '</title>'); 
win.document.write(style);      
win.document.write('</head>');
win.document.write('<body>');
win.document.write(sTable);         
win.document.write('</body></html>');

win.document.close(); 	

win.print();    
}
function convertDate(date) {
    var string = toString(date);
    var year = date.slice(0, 4)
    var month = date.slice(5, 7)
    var day = date.slice(8,10)
    var newDate = month + '/' + day + '/' + year;
    return newDate
}