'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      { 
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()    
      },
      { 
        role: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      { 
        role: 'Subscriber',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
