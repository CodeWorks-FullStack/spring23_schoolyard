import { dbContext } from "../db/DbContext.js"

class CoursesService {
  async getCoursesBySchoolId(schoolId) {
    // NOTE line 7 does the exact same thing as line 6
    // const courses = await dbContext.Courses.find({ schoolId: schoolId })
    const courses = await dbContext.Courses.find({ schoolId })
    return courses
  }
  async createCourse(courseData) {
    const course = await dbContext.Courses.create(courseData)
    return course
  }

}

export const coursesService = new CoursesService()