const mongoose = require('mongoose');

const distributorSchema = mongoose.Schema(
  {
    businessName: {
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
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const inventoryItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    distributor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DistributorDetails',
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DistributorDetails = mongoose.model(
  'DistributorDetails',
  distributorSchema
);
const InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);

module.exports = {
  DistributorDetails,
  InventoryItem,
};
