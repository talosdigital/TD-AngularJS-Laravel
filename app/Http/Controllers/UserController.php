<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['create']]);
    }

    /**
     * @SWG\Get(
     * 	path="/api/v1/user",
     *  tags={"User"},
     *  summary="List users",
     *
     *      @SWG\Response(
     *      	response="200",
     *      	description=""
     *   	)
     * )
     */
    public function index()
    {
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
        $users = User::all();
        return $users;
    }

    /**
     * @SWG\Post(
     * 	path="/api/v1/user",
     *  tags={"User"},
     *  summary="Create a new user",
     *
     *     @SWG\Parameter(
     *      name="name",
     *      in="body",
     *      required=true,
     *      type="string",
     *      schema="",
     *      default = "
    {""firstname"":""Ignacio"",
     ""lastname"":""Pascual"",
    ""password"":""test4echo"",
    ""email"":""ignacio@example.com""
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
    public function create(Request $request)
    {
        $user = new User();
        $user->firstname = $request->input('firstname');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json($user->id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
