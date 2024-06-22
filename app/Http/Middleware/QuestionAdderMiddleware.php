<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\User;

class QuestionAdderMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            $user = Auth::user();

            // Check if the user has the "questionAdder" role
            if ($user->role('questionAdder')) {
                return $next($request);
            }

            // If the user doesn't have the required role, return an unauthorized response
            return response()->json(['error' => 'Unauthorized.'], 403);
        }

        // If the user is not authenticated, redirect to the appropriate page or return an unauthorized response
        return response()->json(['error' => 'Unauthorized.'], 401);
    }
}