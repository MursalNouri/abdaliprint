<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="{{ asset('/images/logo/' . $setting->favicon) }}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom-style.css') }}">
    <link rel="stylesheet" href="{{ asset('csst/custom-style.css') }}">

    <!--[if IE]>
    <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon">
    <![endif]-->

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ "abdali"}}</title>

    <!-- Styles -->
    @yield('head')

</head>

<body>
    <div id="app" style="position: relative; margin:0%;" class="row m-0">
        <div class="col-md-12">@yield('top_bar')</div>

        <div class="col-md-12">@yield('content')</div
    ></div>

    <br>
    <br>
    </div>


    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/custom-js.js') }}"></script>
    @yield('scripts')
</body>

</html>