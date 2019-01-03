'use strict';

module.exports.hello = async (event, context) => {
  return {AWS_PROFILE: process.env.AWS_PROFILE || 'NOT SET'};
};
