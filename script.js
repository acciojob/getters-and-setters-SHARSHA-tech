//complete this code
class Person {
	constructor(name,age){
	this.name=name;
	this.age=age;
	
	}
get name() {
	return this.name;
}
set age(age){
	this.age=age;
	}}
const Person = new Person("Harsha" , 1);
 console.log(Person.name);
Person.age=25;
console.log(age);
class Student extends Person {

	const Student = new Student("Elyna",24);
	student.study();
	
	
}

class Teacher extends Person {
	const Teacher = new Teacher("Nisha",22);
	teacher.teach();
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
