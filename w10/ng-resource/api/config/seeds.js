var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/may-the-force', function() {
  // Load Mongoose models 
  seeder.loadModels(['./models/Character.js']);
  // Clear specified collections 
  seeder.clearModels(['Character'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model 
var data = [
  { 
    'model': 'Character',
    'documents': [
      {
        'name': 'Anakin Skywalker',
        'lightsaber': 'Blue'
      },
      {
        'name': 'Luke Skywalker',
        'lightsaber': 'Blue'
      },
      {
        'name': 'Lowbacca',
        'lightsaber': 'Bronze'
      },
      {
        'name': 'Qui-Gon Jinn',
        'lightsaber': 'Green'
      },
      {
        'name': 'Yoda',
        'lightsaber': 'Green'
      },
      {
        'name': 'Yoshi Raph-Elan',
        'lightsaber': 'Orange'
      },
      {
        'name': 'Mace Windu',
        'lightsaber': 'Purple'
      },
      {
        'name': 'Count Dooku',
        'lightsaber': 'Red'
      },
      {
        'name': 'Darth Maul',
        'lightsaber': 'Red'
      },
      {
        'name': 'Darth Vader',
        'lightsaber': 'Red'
      },
      {
        'name': 'Sa Cuis',
        'lightsaber': 'White'
      }
    ]
  }
];  
