// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('seedAndVisit', function(
  { delay = 0, visitRoute = '/' } = { delay: 0, visitRoute: '/' }
) {
  cy.server();

  // Games Page 1
  cy.route({
    delay,
    method: 'GET',
    url: 'https://api.twitch.tv/helix/games/top?first=20',
    response: 'fixture:games-page-1'
  });

  // Games Page 2
  cy.route({
    delay,
    method: 'GET',
    url:
      'https://api.twitch.tv/helix/games/top?after=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ&first=20',
    response: 'fixture:games-page-2'
  });

  // Streams Page 1
  cy.route({
    delay,
    method: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=20',
    response: 'fixture:streams-page-1'
  });

  // Streams Page 2
  cy.route({
    delay,
    method: 'GET',
    url:
      'https://api.twitch.tv/helix/streams?after=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ&first=20',
    response: 'fixture:streams-page-2'
  });

  // Game 3314 (Fortnite Battle Royale) Streams Page 1
  cy.route({
    delay,
    method: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=20&game_id=33214',
    response: 'fixture:game-3314-streams-page-1'
  });

  // Game 3314 (Fortnite Battle Royale) Streams Page 2
  cy.route({
    delay,
    method: 'GET',
    url:
      'https://api.twitch.tv/helix/streams?after=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ&first=20&game_id=33214',
    response: 'fixture:game-3314-streams-page-2'
  });

  // Game 21779 (League Of Legends) Streams Page 1
  cy.route({
    delay,
    method: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=20&game_id=21779',
    response: 'fixture:game-21779-streams-page-1'
  });

  // Game 21779 (League Of Legends) Streams Page 2
  cy.route({
    delay,
    method: 'GET',
    url:
      'https://api.twitch.tv/helix/streams?after=eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ&first=20&game_id=21779',
    response: 'fixture:game-21779-streams-page-2'
  });

  cy.visit(visitRoute);
});
