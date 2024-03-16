const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email uniqueness
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      enum: ['full-time', 'part-time', 'weekends', 'evenings'],
      required: true,
    },
    skills: String, // Array of skills
    interests: String, // Array of interests
    availabilityNotes: String, // Additional notes on availability
  },
  { timestamps: true }
);

const pointerSchema = new mongoose.Schema({
  VolunteerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Volunteer',
    required: true,
  },
  points: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Create the Volunteer model
const Volunteer = mongoose.model('Volunteer', volunteerSchema);
const pointer = mongoose.model('pointsVolunteer', pointerSchema);
module.exports = { Volunteer, pointer };
