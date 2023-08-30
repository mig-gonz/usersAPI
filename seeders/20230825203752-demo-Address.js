"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Addresses", [
      {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        lat: "-37.3159",
        lng: "81.1496",
      },
      {
        street: "New Street 1",
        suite: "Apt. 123",
        city: "Cityville",
        zipcode: "12345",
        lat: "12.3456",
        lng: "67.8901",
      },
      {
        street: "Another Road 42",
        suite: "Suite 987",
        city: "Metropolis",
        zipcode: "54321",
        lat: "54.3210",
        lng: "98.7654",
      },
      {
        street: "Different Street 123",
        suite: "Apt. 567",
        city: "Townsville",
        zipcode: "67890",
        lat: "65.4321",
        lng: "87.6543",
      },
      {
        street: "Example Street 5",
        suite: "Suite 555",
        city: "Townville",
        zipcode: "55555",
        lat: "50.0050",
        lng: "55.5500",
      },
      {
        street: "Random Road 888",
        suite: "Apt. 888",
        city: "Megatown",
        zipcode: "88888",
        lat: "88.8888",
        lng: "88.8888",
      },
      {
        street: "Sunset Boulevard",
        suite: "Suite 123",
        city: "Hollywood",
        zipcode: "98765",
        lat: "34.0522",
        lng: "118.2437",
      },
      {
        street: "Mountain View Road",
        suite: "Apt. 789",
        city: "Scenicville",
        zipcode: "45678",
        lat: "40.7128",
        lng: "74.0060",
      },
      {
        street: "Oceanfront Drive",
        suite: "Suite 456",
        city: "Seaside",
        zipcode: "12345",
        lat: "36.7783",
        lng: "119.4179",
      },
      {
        street: "Tech Avenue",
        suite: "Apt. 987",
        city: "Innovation City",
        zipcode: "56789",
        lat: "37.7749",
        lng: "122.4194",
      },
      {
        street: "Stewart Avenue",
        suite: "Apt. 999",
        city: "Las Vegas",
        zipcode: "92998-3874",
        lat: "-67.3159",
        lng: "11.1496",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Address", null, {});
  },
};
