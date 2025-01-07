function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function () {
      console.log(`${this.name} is studying.`);
    };
    this.getGrade = function () {
      return `${this.name} grade is: ${this.grade}`;
    };
  }
  const student1 = new Student("Alice", "A");
  const student2 = new Student("Bob", "B");
  const student3 = new Student("Charlie", "C");
  student1.study(); 
  console.log(student1.getGrade());
  
  student2.study(); 
  console.log(student2.getGrade()); 
  
  student3.study(); 
  console.log(student3.getGrade()); 
  