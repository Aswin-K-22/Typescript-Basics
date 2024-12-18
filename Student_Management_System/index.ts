

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

interface StudentRequest {
    name: string;
    age: number;
    course: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}

class StudentService {
    private students: Student[] = [];
    private currentId = 1; 

    private delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async getAllStudents(): Promise<ApiResponse<Student[]>> {
        await this.delay(500); 
        return {
            success: true,
            message: "Fetched all students successfully.",
            data: this.students,
        };
    }

    async addStudent(request: StudentRequest): Promise<ApiResponse<Student>> {
        await this.delay(500);
        if (!request.name || request.age <= 0 || !request.course) {
            throw {
                success: false,
                message: "Invalid student data provided.",
            };
        }

        const newStudent: Student = {
            id: this.currentId++,
            ...request,
        };
        
        this.students.push(newStudent);
        return {
            success: true,
            message: "Student added successfully.",
            data: newStudent,
        };
    }

    async updateStudent(
        id: number,
        request: StudentRequest
    ): Promise<ApiResponse<Student>> {
        await this.delay(500);
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
            throw {
                success: false,
                message: `Student with ID ${id} not found.`,
            };
        }

        const updatedStudent: Student = {
            ...this.students[studentIndex],
            ...request,
        };
        this.students[studentIndex] = updatedStudent;
        return {
            success: true,
            message: "Student updated successfully.",
            data: updatedStudent,
        };
    }

    async deleteStudent(id: number): Promise<ApiResponse<null>> {
        await this.delay(500); 
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
            throw {
                success: false,
                message: `Student with ID ${id} not found.`,
            };
        }

        this.students.splice(studentIndex, 1);
        return {
            success: true,
            message: "Student deleted successfully.",
        };
    }
}

class StudentManagementApp {
    constructor(private studentService: StudentService) {}

    async run() {
        try {
            console.log("Fetching all students...");
            const allStudentsResponse = await this.studentService.getAllStudents();
            console.log(allStudentsResponse);

            console.log("Adding a new student...");
            const newStudentResponse = await this.studentService.addStudent({
                name: "Aswin K",
                age: 22,
                course: "Computer Science",
            });
            console.log(newStudentResponse);

            console.log("Fetching all students again...");
            const updatedStudentsResponse =
                await this.studentService.getAllStudents();
            console.log(updatedStudentsResponse);

            console.log("Updating a student...");
            const updatedStudentResponse = await this.studentService.updateStudent(
                1,
                { name: "Aswin Kumar", age: 23, course: "Information Technology" }
            );
            console.log(updatedStudentResponse);

            console.log("Deleting a student...");
            const deleteResponse = await this.studentService.deleteStudent(1);
            console.log(deleteResponse);

            console.log("Fetching all students after deletion...");
            const finalStudentsResponse = await this.studentService.getAllStudents();
            console.log(finalStudentsResponse);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

const studentService = new StudentService();
const app = new StudentManagementApp(studentService);

app.run();

