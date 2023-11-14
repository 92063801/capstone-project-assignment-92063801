const dbConnection = require("./sqlite");
dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}
	@@ -21,8 +21,9 @@ const knex_db = require("./db-config");
const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
	@@ -34,45 +35,42 @@ const readTeachers = async () => {
            });
    });
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((teacher) => {
                resolve(teacher);
            })
            .catch((error) => {
                reject(error);
	@@ -36,7 +49,7 @@ const addTeacher = async (id, name, age) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted Teacher"});
            })
            .catch((error) => {
                reject(error);
	@@ -50,12 +63,11 @@ const updateTeacher = async (name, age, id) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated Teacher"});
            })
            .catch((error) => {
                reject(error);
	@@ -81,28 +79,26 @@ const updateTeacher = async (name, age, id) => {
}

const deleteTeacher = async (id) => {
	@@ -64,35 +76,48 @@ const deleteTeacher = async (id) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Teacher"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((students) => {
                resolve(students);
            })
            .catch((error) => {
                reject(error);
	@@ -111,40 +107,40 @@ const readStudents = async () => {
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((student) => {
                resolve(student);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, hometown) => {
    const sql = `INSERT INTO student(id,name,age,hometown) values (?, ?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, hometown])
            .then(() => {
                resolve({status: "Successfully inserted Student"});
            })
            .catch((error) => {
                reject(error);
	@@ -106,41 +131,35 @@ const updateStudent = async (name, age, hometown, id) => {
        knex_db
            .raw(sql, [name, age, hometown, id])
            .then(() => {
                resolve({status: "Successfully updated Student"});
            })
            .catch((error) => {
                reject(error);
	@@ -153,12 +149,12 @@ const updateStudent = async (name, age, religion, id) => {
} 

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted Student"});
            })
            .catch((error) => {
                reject(error);
            });
    });
}
module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
