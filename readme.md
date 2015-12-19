## TD AngularJS-Laravel

TD AngularJS-Laravel is a full stack application to speed up projects using Laravel as RESTful back end and AngularJS as front end solution.

This has been created focus to follow the best practices on both platforms.

## Installation

Composer

```
curl -sS https://getcomposer.org/installer | php
php composer.phar install

```

Config

```
cp .env.sample .env
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

### Feature


- JWTs provider, this is a middleware for API authentication.
- CSRF token verification turned off, we’re using JWTs in a stateless manner.
- Swagger Integrated with (swaggervel).




### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
