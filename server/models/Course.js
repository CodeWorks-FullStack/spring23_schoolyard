import { Schema } from "mongoose";

const prerequisite = { type: String, enum: ['math', 'juggling', 'spelling', 'history'] }

export const CourseSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, maxLength: 1000 },
  prerequisites: { type: [prerequisite], validate: [arrayLimit, 'Your array is too long'] },
  credits: { type: Number, default: 0, required: true, max: 100, min: 0 },
  schoolId: { type: Schema.Types.ObjectId, required: true, ref: 'School' }
},
  { timestamps: true, toJSON: { virtuals: true } })

function arrayLimit(value) {
  return value.length <= 3
}