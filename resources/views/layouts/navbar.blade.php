<!-- HEADER: MAIN -->
<header class="headerMain push01">
    <div class="row">
        <!-- TOOLSBAR -->
        <div class="small-12 medium-7 columns">
            <nav class="toolsBar">
                <ul class="listHD">
                    <!-- ACCOUNT -->
                    <li>
                        <a class="_arrow" href="javascript:void(0)" data-toggle="accountArea">
                            <span>حساب کاربری</span>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <div id="accountArea" class="DD1 dropdown-pane bottom" data-dropdown data-auto-focus="false" data-close-on-click="true">
                            <div>
                                <ul class="listV">
                                    @if(Auth::check())
                                        <li>
                                            <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                                خروج
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                @csrf
                                            </form>
                                        </li>
                                    @else
                                        <li><a href="{{ route('login') }}">ورود </a></li>
                                        <li><a href="{{ route('register') }}">ثبت نام  </a></li>
                                    @endif
                                </ul>
                            </div>
                        </div>
                    </li>
                    @if(Auth::check())
                        <li class="hide">
                            <a class="_arrow" href="javascript:void(0)" data-toggle="accountArea01">
                                <span><i class="fa fa-user" aria-hidden="true"></i></span>
                            </a>
                            <div id="accountArea01" class="DD1 dropdown-pane bottom accountArea" data-dropdown data-auto-focus="false" data-close-on-click="true">
                                <div>
                                    <ul class="listV">
                                        <li><a href="">مشاهده پروفایل</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    @endif
                </ul>
            </nav>
        </div>
        <!-- SOCIAL NETWORK BAR -->
        <div class="small-12 medium-5 columns">
            <nav class="socialBar">
                <ul class="listHO">
                    <li><a href="http://instagram.com/jangalcom"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://t.me/jangalcom"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/jangalcom"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://facebook.com/jangalcom"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="{{ url('/fa/rss/weblog') }}"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                    <li><a href="{{ route('login') }}"><i class="fa fa-rss" aria-hidden="true">ورود </i></a></li>
                    <li><a href="{{ route('register') }}"><i class="fa fa-rss" aria-hidden="true">ثبت نام </i></a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<!-- HEADER: SUB -->
<header class="headerSub _header_01 dePush01">
    <div class="row position-relative">
        <!-- LOGO -->
        <div class="small-12 medium-6 xmedium-4 columns">
            <nav class="logo">
                <a href="{{ url('/') }}">
                    <img src="{{ asset('uploads/siteinfo/jangal-logo.png') }}" alt="فروشگاه کتاب انتشارات ابدالی">
                </a>
            </nav>
        </div>
        <div class="small-12 medium-6 xmedium-2 larg-2 display_inlin-block">
            <div class="search small-text-center margin-bottom-small-none">
                <li>
                    <a href="" data-toggle="shoppingBag">
                        <mark class="badge" data-xa-price data-shop-basketitemscount></mark>
                        <span>سبد خرید</span>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </li>
            </div>
        </div>
        <!-- SEARCH -->
        <div class="small-12 medium-6 xmedium-6 columns">
            <div class="search">
                <input type="text" id="txtSearchctl02_searchbox1" placeholder="عبارت مورد جستجو">
                <button type="button" id="btnSearchctl02_searchbox1">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                <div data-autocomplete="1" class="xa-ajaxbox-main" style="display: none">
                    <div class="_item ">
                        <h6 data-head="1" class="xa-catBox">گروه کالا</h6>
                        <div class="_content xa-catBox">
                            <img id="loaderCat" style="display: none" src="{{ asset('themes/repro/images/ajax-loader.gif') }}" />
                            <div id="emptyCat" style="display: none">
                                موردی در میان کالاها یافت نشد!
                            </div>
                            <ul id="ulAjaxCat"></ul>
                        </div>
                    </div>
                    <div class="_item _thumb">
                        <h6 data-head="1" class="xa-pBox"> محصولات</h6>
                        <div class="_content xa-pBox">
                            <div id="emptyProduct" style="display: none; text-align: right">
                                موردی در میان کالاها یافت نشد!
                            </div>
                            <img id="loaderProduct" style="display: none" src="{{ asset('themes/repro/images/ajax-loader.gif') }}" />
                            <ul id="ulAjaxProduct"></ul>
                        </div>
                    </div>
                </div>
            </div>
            <script id="CatList" type="text/html">
                @{{#items}}
                <li><a href="/fa/product-@{{Id}}" title=""><span>@{{Title}}</span></a></li>
                @{{/items}}
            </script>
            <script id="ProductList" type="text/html">
                @{{#items}}
                <li><a href="/u/@{{Id}}" >
                    <img src="/api/ui/image/thumbnail?Path=@{{Image}}&Size=85" alt="">
                    <span>@{{Title}}</span> </a></li>
                @{{/items}}
            </script>
            <script>
                $(document).ready(function () {
                    $("#btnSearchctl02_searchbox1,#txtSearchctl02_searchbox1").keypress(function (e) {
                        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                            e.preventDefault();
                            searchFuncctl02_searchbox1();
                        }
                    });
                    $("#btnSearchctl02_searchbox1").click(function () {
                        searchFuncctl02_searchbox1();
                    });
                });
                function searchFuncctl02_searchbox1() {
                    var val = $("#txtSearchctl02_searchbox1").val();
                    if (val.length > 2) {
                        window.location = '/fa/product?key=' + val;
                    }
                }
                var delay = (function () {
                    var timer = 0;
                    return function (callback, ms) {
                        clearTimeout(timer);
                        timer = setTimeout(callback, ms);
                    };
                })();
                $(document).ready(function () {
                    $(window).click(function () {
                        $(".xa-ajaxbox-main").hide();
                    });
                    $('.xa-ajaxbox-main').click(function (event) {
                        event.stopPropagation();
                    });
                    $("#txtSearchctl02_searchbox1").keyup(function (e) {
                        var searchedstring = $(this).val();
                        delay(function () {
                            $("#ulAjaxCat").html("");
                            $("#ulAjaxProduct").html("");
                            if (searchedstring.length > 0) {
                                $(".xa-ajaxbox-main").show();
                            } else {
                                $(".xa-ajaxbox-main").hide();
                            }
                            if (searchedstring.length >= 3) {
                                if (e.keyCode == 40) { }
                                else if (e.keyCode == 38) { }
                                else if (e.keyCode == 13) { }
                                else {
                                    $("#ulAjaxCat").html("");
                                    $("#ulAjaxProduct").html("");
                                    $("#loaderCat").show();
                                    $("#loaderProduct").show();
                                    $("#emptyCat").hide();
                                    $("#emptyProduct").hide();
                                    var lang = $("html").attr("lang");
                                    $.getJSON("/api/ui/UiProduct/AutocompleteSearchWithCategory", { query: searchedstring, lang: lang }, function (e) {
                                        $("#ulAjaxCat").html("");
                                        $("#ulAjaxProduct").html("");
                                        $("#loaderCat").hide();
                                        $("#loaderProduct").hide();
                                        if (e.CategorySuggestionsList.length > 0) {
                                            $(".xa-catBox").show();
                                            $("#emptyCat").hide();
                                            $(".xa-ajaxbox-main2 .scroll").css("height", "230px");
                                            var view = {
                                                items: e.CategorySuggestionsList
                                            };
                                            $.Mustache.add('category-search-template', $('#CatList').html());
                                            $('#ulAjaxCat').mustache('category-search-template', view);
                                        } else {
                                            $(".xa-ajaxbox-main2 .scroll").css("height", "430px");
                                            $(".xa-catBox").hide();
                                            $("#emptyCat").show();
                                        }
                                        if (e.ProductSuggestionsList.length > 0) {
                                            $("#emptyProduct").hide();
                                            var view = {
                                                items: e.ProductSuggestionsList
                                            };
                                            var template = $("#ProductList").html();
                                            $.Mustache.add('product-search-template', $('#ProductList').html());
                                            $('#ulAjaxProduct').mustache('product-search-template', view);
                                        } else {
                                            $("#emptyProduct").show();
                                        }
                                    });
                                }
                            } else {
                                $("#ulAjaxCat").html("");
                                $("#ulAjaxProduct").html("");
                            }
                        }, 1000);
                    });
                });
            </script>
        </div>
    </div>
</header>

<div class="" style="background-color: #f8f8f8;height:80px;">
    <!-- MAIN MENU -->
    <div class="row mainmenu position-relative">
        <nav class="hide-for-xmedium" data-menu-toggle>
            <a href="javascript:void(0)">
                <i class="fa fa-bars" aria-hidden="true"></i>
                <span>منوی اصلی </span>
            </a>
        </nav>
    </div>
</div>
