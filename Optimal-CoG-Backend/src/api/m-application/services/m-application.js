'use strict';

/**
 * m-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::m-application.m-application');
