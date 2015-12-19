<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Auth;
use Tymon\JWTAuth\Exceptions\JWTException;


class AuthenticateController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login']]);
    }

    /**
     * @SWG\Post(
     * 	path="/api/v1/auth/login",
     *  tags={"Auth"},
     *  summary="Authenticate an user",
     *
     *     @SWG\Parameter(
     *      name="body",
     *      in="body",
     *      required=true,
     *      type="string",
     *      schema="",
     *      default = "
    {
    ""email"":""ignacio@example.com"",
    ""password"":""test4echo""
    }",
     *      ),
     *
     *      @SWG\Response(
     *      	response="200",
     *      	description=""
     *   	)
     *
     * )
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }

    /**
     * @SWG\Get(
     * 	path="/api/v1/auth/current",
     *  tags={"Auth"},
     *  summary="Retrieve current authenticated user",
     *
     *      @SWG\Response(
     *      	response="200",
     *      	description=""
     *   	)
     *
     * )
     */
    public function current()
    {
        return Auth::user();
    }
}