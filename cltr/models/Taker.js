const mongoose = require('mongoose');
const { DistributorDetails, InventoryItem } = require('./Giver');

const TakerSchema = mongoose.Schema(
  {
    takerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
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
    pincode: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

const TakerReqSchema = mongoose.Schema(
  {
    reqQuantity: {
      type: Number,
      require: true,
    },
    takerEmail: {
      type: String,
      required: true,
    },
    inventoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InventoryItem',
      required: true,
    },
  },
  { timestamps: true }
);

const TakerDetails = mongoose.model('TakerDetails', TakerSchema);
const TakerReqDetails = mongoose.model('TakerReqDetails', TakerReqSchema);

module.exports = {
  TakerDetails,
  TakerReqDetails,
};
