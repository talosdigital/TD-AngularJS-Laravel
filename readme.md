## TD AngularJS-Laravel

TD AngularJS-Laravel is a full stack application to speed up projects using Laravel as RESTful back end and AngularJS as front end solution.

This has been created focus to follow the best practices on both platforms.

### Features


- JWTs provider, this is a middleware for API authentication.
- CSRF token verification turned off, we’re using JWTs in a stateless manner.
- Swagger Integrated with (swaggervel).
- AngularJS
- Testoing framework for AngularJS karma with jasmine

## Installation

Composer

```
curl -sS https://getcomposer.org/installer | php
php composer.phar install

```

Config

```
cp .env.example .env
vi .env
DB_HOST=localhost
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=root
```

Database

```
php artisan migrate
```

JWT key

```
php artisan jwt:generate
```

Front-end

You need to have npm and bower installed globaly
```
npm install
bower install
```

## Front-end tools
To make the development easy we use grunt. To start developing run ```grunt serve``` it will compile stylus, add new dependencies to the index.html and enable live reload (by default the livereload server runs on the port 3000 and points to http://local.tdangularjslaravel.com/, you can change this on the Gruntfile.js file).

## Test
Front-end

To run the tests of the front-end you need karma and karma-cli (install them globaly with npm).  
Run ``` grunt karma```, or ```karma start```for more details.  
You can see the coverage report by oppening coverage/<browser>/index.html.

## Demo

1. Open http://local.tdangularjslaravel.com/api-docs
2. User > Create a new user (POST)
3. Auth > Authenticate an user (login POST)
4. Copy Token to the Navigation bar input, click Explore
5. User > List users (GET)




### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
