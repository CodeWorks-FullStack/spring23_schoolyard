import { Schema } from "mongoose";

export const SchoolSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
  location: { type: String, required: true, maxLength: 100, default: 'Boise, ID' },
  mascot: { type: String, maxLength: 100000 },
  providesLunch: { type: Boolean, required: true, default: false },
  studentBody: { type: Number, required: true, default: 0, max: 10000 },
  type: { type: String, enum: ['charter', 'public', 'technical', 'private', 'ritzy', 'wizard'], default: 'public' }
},
  { timestamps: true, toJSON: { virtuals: true } })