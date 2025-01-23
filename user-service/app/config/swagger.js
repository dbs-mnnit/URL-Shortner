// File: app/config/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Service API',
      version: '1.0.0',
      description: 'API documentation for the User Service Microservice',
      contact: {
        name: 'API Support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./api/docs/*.yml'], // Adjusted relative path for YAML files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Debug: Log the generated Swagger Docs
//console.log(JSON.stringify(swaggerDocs, null, 2));

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));
  console.log('Swagger Docs available at http://localhost:3000/api-docs');
};
