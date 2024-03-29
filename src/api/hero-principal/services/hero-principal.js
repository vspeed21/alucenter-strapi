'use strict';

/**
 * hero-principal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-principal.hero-principal');
