<?php

namespace App\Policies;

use App\User;
use App\userppoint;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserppointPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\userppoint  $userppoint
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, userppoint $userppoint)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\userppoint  $userppoint
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, userppoint $userppoint)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\userppoint  $userppoint
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, userppoint $userppoint)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\userppoint  $userppoint
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, userppoint $userppoint)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\userppoint  $userppoint
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, userppoint $userppoint)
    {
        //
    }
}
