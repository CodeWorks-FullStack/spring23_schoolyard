import { Schema } from "mongoose";

export const CourseStudentSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, required: true, ref: 'Course' },
  studentId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })

CourseStudentSchema.virtual('student', {
  localField: 'studentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CourseStudentSchema.virtual('course', {
  localField: 'courseId',
  foreignField: '_id',
  justOne: true,
  ref: 'Course'
})