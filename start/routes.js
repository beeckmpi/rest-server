'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
});
Route.post('register', 'LoginController.store')
Route.post('login', 'LoginController.login')
Route.get('fiche/:id', 'FicheController.view').middleware('auth')
Route.post('fiche/store', 'FicheController.store').middleware('auth')
Route.get('fiches/mine', 'FicheController.list').middleware('auth')
Route.get('fiches/component/:type/:ficheId', 'FicheController.component').middleware('auth')
Route.post('fiches/component/:type/:ficheId', 'FicheController.componentStore').middleware('auth')
