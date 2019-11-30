<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/add-post','PostController@store');
Route::get('/view-posts','PostController@index');
Route::get('/fetch-data/{id}','PostController@edit');
Route::post('/update-post/{id}','PostController@update');
Route::get('/delete-post/{id}','PostController@destroy');
Route::get('/post-detail/{id}','PostController@show');