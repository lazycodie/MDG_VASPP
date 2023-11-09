'use strict';

/**
 * m-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::m-customer.m-customer');
