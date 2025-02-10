const Service = require('../models/Service');

exports.searchServices = async (query) => {
  return await Service.find({ $text: { $search: query } });
};