import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
    const grade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
    return grade;
}

function main() {
    rl.question('Enter the marks scored by the student\nWritten test: ', (writtenTestInput: string) => {
        const writtenTest = parseFloat(writtenTestInput);

        if (isNaN(writtenTest)) {
            console.log('Please enter a valid number for Written test.');
            rl.close();
            return;
        }

        rl.question('Lab exams: ', (labExamsInput: string) => {
            const labExams = parseFloat(labExamsInput);

            if (isNaN(labExams)) {
                console.log('Please enter a valid number for Lab exams.');
                rl.close();
                return;
            }

            rl.question('Assignments: ', (assignmentsInput: string) => {
                const assignments = parseFloat(assignmentsInput);

                if (isNaN(assignments)) {
                    console.log('Please enter a valid number for Assignments.');
                    rl.close();
                    return;
                }

                const grade = calculateGrade(writtenTest, labExams, assignments);

                console.log(`Grade of the student is ${grade.toFixed(1)}`);

                rl.close();
            });
        });
    });
}

main();
