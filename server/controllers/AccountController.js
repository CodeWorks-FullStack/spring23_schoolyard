import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { courseStudentsService } from '../services/CourseStudentsService.js'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor () {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/courses', this.getMyCourses)
  }
  async getMyCourses(req, res, next) {
    try {
      const userId = req.userInfo.id
      const courses = await courseStudentsService.getMyCourses(userId)
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
