"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123-456-7890",
        website: "https://johndoe.com",
        company_name: "Acme Inc.",
        catch_phrase: "Catch me if you can",
        bs: "Business Services",
        address_id: 1,
      },
      {
        name: "Alice Smith",
        username: "alicesmith",
        email: "alice@example.com",
        phone: "987-654-3210",
        website: "https://alicesmith.com",
        company_name: "XYZ Corp",
        catch_phrase: "Exploring New Horizons",
        bs: "Innovative Solutions",
        address_id: 2,
      },
      {
        name: "Bob Johnson",
        username: "bobjohnson",
        email: "bob@example.com",
        phone: "555-123-4567",
        website: "https://bobjohnson.net",
        company_name: "Tech Innovators",
        catch_phrase: "Coding the Future",
        bs: "Technology Services",
        address_id: 3,
      },
      {
        name: "Eve Brown",
        username: "evebrown",
        email: "eve@example.com",
        phone: "111-222-3333",
        website: "https://evebrown.org",
        company_name: "Global Ventures",
        catch_phrase: "Connecting Cultures",
        bs: "International Trade",
        address_id: 4,
      },
      {
        name: "David Williams",
        username: "davidwilliams",
        email: "david@example.com",
        phone: "444-555-6666",
        website: "https://davidwilliams.biz",
        company_name: "Infinite Ideas",
        catch_phrase: "Unleash Your Creativity",
        bs: "Creative Solutions",
        address_id: 5,
      },
      {
        name: "Olivia Martinez",
        username: "oliviamartinez",
        email: "olivia@example.com",
        phone: "777-888-9999",
        website: "https://oliviamartinez.info",
        company_name: "Nature's Harmony",
        catch_phrase: "Embracing Tranquility",
        bs: "Ecological Services",
        address_id: 6,
      },
      {
        name: "Michael Davis",
        username: "michaeldavis",
        email: "michael@example.com",
        phone: "123-987-4560",
        website: "https://michaeldavis.co",
        company_name: "Future Horizons",
        catch_phrase: "Pioneering Tomorrow",
        bs: "Futuristic Solutions",
        address_id: 7,
      },
      {
        name: "Sophia Wilson",
        username: "sophiawilson",
        email: "sophia@example.com",
        phone: "555-777-8888",
        website: "https://sophiawilson.design",
        company_name: "Artistic Visions",
        catch_phrase: "Unveiling Beauty",
        bs: "Creative Arts",
        address_id: 8,
      },
      {
        name: "Liam Lee",
        username: "liamlee",
        email: "liam@example.com",
        phone: "999-444-1111",
        website: "https://liamlee.io",
        company_name: "TechGenius",
        catch_phrase: "Innovate to Elevate",
        bs: "Cutting-edge Technology",
        address_id: 9,
      },
      {
        name: "Ava Robinson",
        username: "avarobinson",
        email: "ava@example.com",
        phone: "222-333-4444",
        website: "https://avarobinson.net",
        company_name: "Green Earth",
        catch_phrase: "Sustaining Our Planet",
        bs: "Environmental Solutions",
        address_id: 10,
      },
      {
        name: "Noah Garcia",
        username: "noahgarcia",
        email: "noah@example.com",
        phone: "777-999-2222",
        website: "https://noahgarcia.tech",
        company_name: "Digital Dynamics",
        catch_phrase: "Navigating the Virtual",
        bs: "Digital Services",
        address_id: 11,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};