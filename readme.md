## TD AngularJS-Laravel

TD AngularJS-Laravel is a full stack application to speed up projects using Laravel as RESTful back end and AngularJS as front end solution.

This has been created focus to follow the best practices on both platforms.

### Features


- JWTs provider, this is a middleware for API authentication.
- CSRF token verification turned off, we’re using JWTs in a stateless manner.
- Swagger Integrated with (swaggervel).


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

## Demo

1. Open http://local.tdangularjslaravel.com/api-docs
2. User > Create a new user (POST)
3. Auth > Authenticate an user (login POST)
4. Copy Token to the Navigation bar input, click Explore
5. User > List users (GET)




### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
