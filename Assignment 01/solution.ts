export { };


function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

function processInput(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return input? `Active` : `Inactive`;
}

function formatCoordinate(x: [number, number, string]): string {
    return `Location: ${x[0]} (${x[1]},${x[2]})`;
}

function concatenateArrays<T>(...arr: T[][]): T[] {
    let array: T[] = [];
    for (const currentArray of arr) {
        array.push(...currentArray);
    }
    return array;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
function getPopularCourses(course: Course[], minStudents: number): Course[] | string {
    let array = [];
    for (const c of course) {
        if (c.students >= minStudents && c.isPublished) {
            array.push(c);
        }
    }
    if(array.length === 0){
        return "No popular courses found.";
    }
    return array;
}

function pluckValues<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    let result: T[K][] = [];
    result.push(...arr.map(item => item[key]));
    return result;
}

class Employee {
    protected name: string
    private baseSalary: number
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

function validateAgeAsync(age : number): Promise<string> {
    return new Promise((resolve, reject) => {
        if(age < 18){
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
