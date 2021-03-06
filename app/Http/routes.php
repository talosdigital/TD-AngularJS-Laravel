<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api/v1'], function()
{
    Route::get('/auth/current', 'AuthenticateController@current');
    Route::post('/auth/login', 'AuthenticateController@login');

    Route::get('/user', 'UserController@index');
    Route::post('/user', 'UserController@create');
});


