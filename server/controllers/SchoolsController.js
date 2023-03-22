import { coursesService } from "../services/CoursesService.js";
import { schoolsService } from "../services/SchoolsService.js";
import BaseController from "../utils/BaseController.js";

export class SchoolsController extends BaseController {
  constructor () {
    super('api/schools')
    this.router
      .get('', this.getSchools)
      .get('/:schoolId', this.getSchoolById)
      .get('/:schoolId/courses', this.getCoursesBySchoolId)
      .post('', this.createSchool)
  }


  async getSchools(req, res, next) {
    try {
      const query = req.query
      const schools = await schoolsService.getSchools(query)
      return res.send(schools)
    } catch (error) {
      next(error)
    }
  }

  async getSchoolById(req, res, next) {
    try {
      const schoolId = req.params.schoolId
      const school = await schoolsService.getSchoolById(schoolId)
      return res.send(school)
    } catch (error) {
      next(error)
    }
  }

  async getCoursesBySchoolId(req, res, next) {
    try {
      const schoolId = req.params.schoolId
      const courses = await coursesService.getCoursesBySchoolId(schoolId)
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }

  async createSchool(req, res, next) {
    try {
      const schoolData = req.body
      const school = await schoolsService.createSchool(schoolData)
      return res.send(school)
    } catch (error) {
      next(error)
    }
  }
}