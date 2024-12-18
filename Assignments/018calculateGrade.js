"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateGrade(writtenTest, labExams, assignments) {
    var grade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
    return grade;
}
function main() {
    rl.question('Enter the marks scored by the student\nWritten test: ', function (writtenTestInput) {
        var writtenTest = parseFloat(writtenTestInput);
        if (isNaN(writtenTest)) {
            console.log('Please enter a valid number for Written test.');
            rl.close();
            return;
        }
        rl.question('Lab exams: ', function (labExamsInput) {
            var labExams = parseFloat(labExamsInput);
            if (isNaN(labExams)) {
                console.log('Please enter a valid number for Lab exams.');
                rl.close();
                return;
            }
            rl.question('Assignments: ', function (assignmentsInput) {
                var assignments = parseFloat(assignmentsInput);
                if (isNaN(assignments)) {
                    console.log('Please enter a valid number for Assignments.');
                    rl.close();
                    return;
                }
                var grade = calculateGrade(writtenTest, labExams, assignments);
                console.log("Grade of the student is ".concat(grade.toFixed(1)));
                rl.close();
            });
        });
    });
}
main();
