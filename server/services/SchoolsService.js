import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class SchoolsService {
  async getSchoolById(schoolId) {
    const school = await dbContext.Schools.findById(schoolId)

    if (!school) {
      throw new BadRequest("GET GOOD KID")
    }

    return school
  }
  async createSchool(schoolData) {
    const school = await dbContext.Schools.create(schoolData)
    return school
  }
  async getSchools(query) {
    const schools = await dbContext.Schools.find(query)
    return schools
  }

}

export const schoolsService = new SchoolsService()