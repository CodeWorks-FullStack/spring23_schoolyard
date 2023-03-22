import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from '@bcwdev/auth0provider'
import { courseStudentsService } from "../services/CourseStudentsService.js";

export class CourseStudentsController extends BaseController {
  constructor () {
    super('api/coursestudents')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.attendCourse)
  }
  async attendCourse(req, res, next) {
    try {
      // NOTE gets the data on who is currently logged in and making this request
      const userInfo = req.userInfo
      const courseStudentData = req.body
      // NOTE never trust the client to tell you who they are
      courseStudentData.studentId = userInfo.id
      const courseStudent = await courseStudentsService.attendCourse(courseStudentData)
      return res.send(courseStudent)
    } catch (error) {
      next(error)
    }
  }
}