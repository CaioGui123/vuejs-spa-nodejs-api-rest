export default {
  SET_STUDENT(state, student) {
    state.student = student;
  },
  SET_STUDENTS(state, students) {
    state.students = students;
  },
  REMOVE_STUDENT(state, itemId) {
    const studentIndex = state.students.findIndex((student) => student.id === itemId);
    state.students.splice(studentIndex, 1);
  },
  ADD_STUDENT(state, student) {
    state.students.push(student);
  },
};
