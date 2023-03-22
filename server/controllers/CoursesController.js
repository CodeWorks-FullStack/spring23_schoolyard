import { coursesService } from "../services/CoursesService.js";
import { courseStudentsService } from "../services/CourseStudentsService.js";
import BaseController from "../utils/BaseController.js";

export class CoursesController extends BaseController {
  constructor () {
    super('api/courses')
    this.router
      .get('/:courseId/students', this.getStudentsAttendingCourse)
      .post('', this.createCourse)
  }
  async getStudentsAttendingCourse(req, res, next) {
    try {
      const courseId = req.params.courseId
      const students = await courseStudentsService.getStudentsAttendingCourse(courseId)
      return res.send(students)
    } catch (error) {
      next(error)
    }
  }
  async createCourse(req, res, next) {
    try {
      const courseData = req.body
      const course = await coursesService.createCourse(courseData)
      return res.send(course)
    } catch (error) {
      next(error)
    }
  }
}