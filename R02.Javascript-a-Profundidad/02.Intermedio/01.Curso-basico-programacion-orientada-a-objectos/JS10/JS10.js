/*  */
class Course {
  constructor({ name }) {
    this.name = name;
  }
}
const course1 = new Course({ name: "CURSO 1 " });
const course2 = new Course({ name: "CURSO 2 " });
const course3 = new Course({ name: "CURSO 3 " });
const course4 = new Course({ name: "CURSO 4 " });
/*  */
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}
const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: [course1, course2, course3],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de video juegos",
  courses: [course3, course4],
});

class Student {
  constructor({
    name,
    email,
    username,
    facebook = undefined,
    twitter = undefined,
    instagram = undefined,
    approvedCourses = [],
    leanringPath = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = { facebook, twitter, instagram };
    this.approvedCourses = approvedCourses;
    this.leanringPath = leanringPath;
  }
}
