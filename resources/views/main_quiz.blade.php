@extends('layouts.app')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <!-- Google Font -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
@endsection

@section('top_bar')
    <nav class="navbar navbar-default navbar-static-top" style="background-color: blue">
        <div class="logo-main-block">
            <div class="container" style="background-color: blue">
                @if ($setting)
                    <a href="{{ url('/') }}" title="{{ $setting->welcome_txt }}">
                        <img src="{{ asset('/images/logo/' . $setting->logo) }}" class="img-responsive"
                            alt="{{ $setting->welcome_txt }}">
                    </a>
                @endif
            </div>
        </div>
        <div class="nav-bar" style="background-color: blue">
            <div class="container ">
                <div class="row">
                    <div class="col-md-6">
                        <div class="navbar-header">
                            <!-- Branding Image -->

                            @if ($topic)
                                <h4 class="heading">{{ $topic->title }}</h4>
                            @endif
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="collapse navbar-collapse" id="app-navbar-collapse">
                            <!-- Right Side Of Navbar -->
                            <ul class="nav navbar-nav navbar-right">
                                <!-- Authentication Links -->
                                <li id="clock"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
@endsection

@section('content')
<div class="row" style="margin: 3%">
    
    <div class="container-fluid col-md-8" style="margin: 3%;background-color: rgb(0, 145, 255); color:azure">
       
</div>
    <div class="col-md-3" style="background-color: rgb(233, 239, 246); padding:4%"> Google ad</div>

</div>

@endsection

@section('scripts')
    <!-- jQuery 3 -->
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <!-- Bootstrap 3.3.7 -->
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/jquery.cookie.js') }}"></script>
    <script src="{{ asset('js/jquery.countdown.js') }}"></script>


    @if ($setting->right_setting == 1)
        <script type="text/javascript" language="javascript">
            // Right click disable
            $(function() {
                $(this).bind("contextmenu", function(inspect) {
                    inspect.preventDefault();
                });
            });
            // End Right click disable
        </script>
    @endif

    @if ($setting->element_setting == 1)
        <script type="text/javascript" language="javascript">
            //all controller is disable
            $(function() {
                var isCtrl = false;
                document.onkeyup = function(e) {
                    if (e.which == 17) isCtrl = false;
                }

                document.onkeydown = function(e) {
                    if (e.which == 17) isCtrl = true;
                    if (e.which == 85 && isCtrl == true) {
                        return false;
                    }
                };
                $(document).keydown(function(event) {
                    if (event.keyCode == 123) { // Prevent F12
                        return false;
                    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
                        return false;
                    }
                });
            });
            // end all controller is disable
        </script>
    @endif
@endsection
