<?php

use App\Page;
use App\User;
use App\Topic;
use App\Question;
use App\AdManagement;
use App\copyrighttext;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WinnerUsersController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\DynamicTableController;
use App\Http\Controllers\AdManagementController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');




Route::group(['middleware' => 'coming_soon'], function () {

  Route::redirect('/', 'home');
  Auth::routes();

  /*facebook login route*/
  // Route::get('login/o_auth/facebook  ', 'Auth\LoginController@redirectToProvider');
  // Route::get('login/facebook/callback', 'Auth\LoginController@handleProviderCallback');

  /*Social Login*/
  Route::get('login/{service}', 'Auth\LoginController@redirectToProvider')->name('sociallogin');
  Route::get('login/{service}/callback', 'Auth\LoginController@handleProviderCallback');


  /*google login route*/
  // Route::get('login/google', 'Auth\LoginController@redirectToProvider');
  // Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');

  Route::get('/faqs', function () {
    $menus = Page::where('show_in_menu', '=', 1)->get();
    return view('faq', compact('menus'));
  })->name('faq.get');

  Route::get('/home', function () {
    // $topics = Topic::all();
    $topics = Topic::paginate(2);


    $questions = Question::all();
    $adManagements = AdManagement::all();

    $menus = Page::where('show_in_menu', '=', 1)->get();
    return view('home', compact('topics', 'questions', 'menus', 'adManagements'));
  });

  Route::get('/redirect', function () {
    $query = http_build_query([
      'client_id' => '1',
      'redirect_uri' => 'http://example.com/callback',
      'response_type' => 'token',
      'scope' => '',
    ]);

    return redirect('http://your-app.com/oauth/authorize?' . $query);
  });

  Route::resource('/admin/users', 'UsersController');

  Route::get('/admin/profile', function () {
    if (Auth::check()) {
      return view('admin.users.profile');
    } else {
      return redirect('/');
    }
  });
  Route::get('/admin/my_reports', 'MyReportsController@index')->name('my_report');
  Route::get('/admin/my_reports/{my_reports}', 'MyReportsController@show')->name('my_report_show');

  Route::get('admin/moresettings/socialicons/', 'SocialController@index')->name('socialicons.index');
  Route::post('/admin/moresettings/socialicons/insert', 'SocialController@store')->name('social.store');
  Route::put('/admin/moresettings/socialicons/active/{id}', 'SocialController@active')->name('social.active');
  Route::put('/admin/moresettings/socialicons/deactive/{id}', 'SocialController@deactive')->name('social.deactive');
  Route::delete('/admin/moresettings/socialicons/delete/{id}', 'SocialController@destroy')->name('social.delete');
  Route::get('/admin/custom-style-settings', 'CustomStyleController@addStyle')->name('customstyle');
  Route::post('/admin/custom-style-settings/addcss', 'CustomStyleController@storeCSS')->name('css.store');
  Route::post('/admin/custom-style-settings/addjs', 'CustomStyleController@storeJS')->name('js.store');

  //payment gateway
  Route::get('/admin/mail', 'ApiController@setApiView')->name('api.setApiView');
  Route::post('/admin/mail', 'ApiController@changeEnvKeys')->name('api.update');
  Route::get('admin/sociallogin/', 'ApiController@facebook')->name('set.facebook');
  Route::post('admin/facebook', 'ApiController@updateFacebookKey')->name('key.facebook');
  Route::post('admin/google', 'ApiController@updateGoogleKey')->name('key.google');
  Route::post('admin/gitlab', 'ApiController@updategitlabKey')->name('key.gitlab');
  Route::delete('admin/ans/{id}', 'Anscontroller@destroy')->name('ans.del');
  Route::get('/admin/payment', 'PaymentController@index')->name('admin.payment');
  // route for processing payment\
  Route::post('payment/paypal_post', 'PaypalController@paypal_post')->name('paypal_post');
  // Handle status
  Route::get('payment/paypal_success', 'PaypalController@paypal_success')->name('paypal_success');
  Route::get('payment/paypal_cancel', 'PaypalController@paypal_cancel')->name('paypal_cancel');
});

Route::group(['middleware' => 'isadmin'], function () {
  Route::resource('/admin/topics', 'TopicController');
  Route::resource('/admin/questions', 'QuestionsController');
  Route::get('/print/report/aspdf/{id}/{userid}', 'AllReportController@pdfreport')->name('pdf.report');
  Route::delete('delete/sheet/quiz/{id}', 'TopicController@deleteperquizsheet')->name('del.per.quiz.sheet');
  Route::post('/update-money/{id}', 'UsersController@updateMoney')->name('update.money');

  Route::get('/admin', function () {
    $user = User::where('role', '!=', 'A')->count();
    $question = Question::count();
    $quiz = Topic::count();
    $user_latest = User::where('id', '!=', Auth::id())->orderBy('created_at', 'desc')->get();
    return view('admin.dashboard', compact('user', 'question', 'quiz', 'user_latest'));
  });

  Route::delete('reset/response/{topicid}/{userid}', 'AllReportController@delete');
  Route::resource('/admin/all_reports', 'AllReportController');
  Route::resource('/admin/top_report', 'TopReportController');
  // Route::resource('/admin/topics', 'TopicController');
  // Route::resource('/admin/questions', 'QuestionsController');
  Route::post('/admin/questions/import_questions', 'QuestionsController@importExcelToDB')->name('import_questions');
  Route::resource('/admin/settings', 'SettingController');
  Route::post('/admin/users/destroy', 'DestroyAllController@AllUsersDestroy');

  Route::get('/admin/pages', 'PagesController@index')->name('pages.index');
  Route::get('/admin/pages/add', 'PagesController@add')->name('pages.add');
  Route::post('/admin/pages/add', 'PagesController@store')->name('pages.store');
  Route::get('pages/{slug}', 'PagesController@show')->name('page.show');
  Route::get('/admin/pages/edit/{id}', 'PagesController@edit')->name('pages.edit');
  Route::put('/admin/pages/edit/{id}', 'PagesController@update')->name('pages.update');
  Route::delete('/delete/pages/{id}', 'PagesController@destroy')->name('pages.delete');

  Route::get('admin/moresettings/faq/', 'FAQController@index')->name('faq.index');
  Route::get('admin/moresettings/faq/add', 'FAQController@create')->name('faq.add');
  Route::post('/admin/moresettings/faq/insert', 'FAQController@store')->name('faq.store');
  Route::get('/admin/moresettings/faq/edit/{id}', 'FAQController@edit')->name('faq.edit');
  Route::put('/admin/moresettings/faq/edit/{id}', 'FAQController@update')->name('faq.update');
  Route::delete('/faq/delete/{id}', 'FAQController@destroy')->name('faq.delete');

  Route::get('admin/moresettings/copyright', 'CopyrighttextController@index')->name('copyright.index');
  Route::put('admin/moresettings/copyright/{id}', 'CopyrighttextController@update')->name('copyright.update');

  Route::get('/admin/mail-settings', 'Configcontroller@getset')->name('mail.getset');
  Route::post('admin/mail-settings', 'Configcontroller@changeMailEnvKeys')->name('mail.update');
});

Route::get('/new_page', [WinnerUsersController::class, 'index'])->name('WinnerUsers');
Route::get('/phone-number', 'PhonenumberController@index')->name('phone_number_page');
Route::post('/phone-number', 'PhonenumberController@submit')->name('phone-number.submit');
Route::get('/admin/conversion-rate', 'ConversionRateController@showForm')->name('admin.conversion-rate');

// Route for handling the form submission
Route::post('/admin/conversion-rate', 'ConversionRateController@update')->name('admin.conversion-rate.update');
// send card route
Route::post('/user/send-card', 'UsersController@sendCard')->name('user.send-card');

// success massege
Route::get('/user/success', 'UsersController@showSuccess')->name('user.success');

// Money users controller 
Route::get('/money-all-users', 'MoneyUserController@showAllUsersWithMoney')->name('money-all-users.index');
// paid money for user in 24 past hours
Route::get('/money-paid-users', 'MoneyUserController@showAllUsersIn24WithMoney')->name('money-paid-users.show');

Route::group(['middleware' => ['isadder']], function () {
  Route::resource('/admin/questions', 'QuestionsController');
  Route::resource('/admin/topics', 'TopicController');
});

Route::resource('questions', QuestionsController::class);

// Route for importing questions
Route::post('questions/import', [QuestionsController::class, 'importExcelToDB'])->name('questions.import');
Route::group(['middleware' => ['isadmin']], function () {

});

Route::get('/ad-management', [AdManagementController::class, 'index'])->name('ad-management.index');
Route::get('/ad-management/create', [AdManagementController::class, 'create'])->name('ad-management.create');
Route::post('/ad-management', [AdManagementController::class, 'store'])->name('ad-management.store');
Route::get('/ad-management/{id}/edit', [AdManagementController::class, 'edit'])->name('ad-management.edit');
//Route::put('/ad-management/{id}', [AdManagementController::class, 'update'])->name('ad-management.update');
Route::delete('/ad-management/{id}', [AdManagementController::class, 'destroy'])->name('ad-management.destroy');
Route::post('/update-ad', 'AdManagementController@updateAd')->name('update.ad');

// book and its categories routes 
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::get('/books/create', [BookController::class, 'create'])->name('books.create');
Route::post('/books', [BookController::class, 'store'])->name('books.store');
Route::get('/books/{book}', [BookController::class, 'show'])->name('books.show');