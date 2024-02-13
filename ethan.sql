CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    department_head VARCHAR(50)
);
INSERT INTO Departments (department_id, department_name, department_head)
VALUES
    (1, 'College of Arts and Sciences', 'Mr. Viray'),
    (2, 'College of Engineering and Architecture', 'Ms. Villanueva'),
    (3, 'College of Accountancy Business and Management', 'Mr. Dela Cruz');
    CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    student_email VARCHAR(100),
    student_phone VARCHAR(20),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

-- Insert sample data into Students table
INSERT INTO Students (student_id, student_name, student_email, student_phone, department_id)
VALUES
    (1, 'Wilson Santos', 'wilsonsantos@students.school.edu.ph', '09123456789', 301),
    (2, 'Karl Loo', 'karlloo@students.school.edu.ph', '09987654321', 302),
    (3, 'Prince Dimacali', 'princedimacali@students.school.edu.ph', '09569871234', 303);
    
    CREATE TABLE Instructors (
    instructor_id INT PRIMARY KEY,
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

-- Insert sample data into Instructors table
INSERT INTO Instructors (instructor_id, instructor_name, instructor_email, department_id)
VALUES
    (1, 'Mr. Manalo', 'josephmanalo@professors.school.edu.ph', 301),
    (2, 'Ms. Elazigui', 'roseelazigui@professors.school.edu.ph', 302),
    (3, 'Mr. Montes', 'joaquinmontes@professors.school.edu.ph', 303);
    
    CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    department_id INT,
    instructor_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(department_id),
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

-- Insert sample data into Courses table
INSERT INTO Courses (course_id, course_name, department_id, instructor_id)
VALUES
    (1, 'BS Psychology', 301, 2115),
    (2, 'BS Civil Engineering', 302, 2129),
    (3, 'BS Accountancy', 303, 2132);
    CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Insert sample data into Enrollments table
INSERT INTO Enrollments (enrollment_id, student_id, course_id, enrollment_date)
VALUES
    (1, 2022001, 115, '2022-05-25'),
    (2, 2022002, 129, '2022-06-05'),
    (3, 2022003, 132, '2022-07-10');
    