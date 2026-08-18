//complete this code
class Person {
	constructor(name:string,age:number)
	this.name=name;
	this.age=age;
	const person = new Person ("Harsha", 1);
	console.log(person.name);
	person.age=25;
	console.log(person.age);
}
get name(string:name) {
	return this.name;
}
set age(age:number){
	this.age=age;
	}
   console.log(Person);
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
