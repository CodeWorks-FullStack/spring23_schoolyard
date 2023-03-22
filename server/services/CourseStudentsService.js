import { dbContext } from "../db/DbContext.js"

class CourseStudentsService {
  async getMyCourses(userId) {
    const courses = await dbContext.CourseStudents.find({ studentId: userId }).populate('course')
    return courses
  }
  async getStudentsAttendingCourse(courseId) {
    const students = await dbContext.CourseStudents.find({ courseId }).populate('student')
    return students
  }
  async attendCourse(courseStudentData) {
    const courseStudent = await dbContext.CourseStudents.create(courseStudentData)
    return courseStudent
  }

}

export const courseStudentsService = new CourseStudentsService()