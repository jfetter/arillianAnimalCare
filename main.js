'use strict';

//$(document).ready(function(){
    console.log("main js loading "+ Date.now())
    let app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        console.log("app loaded " + Date.now())
        $routeProvider
            .when("/", {
                templateUrl : "landingPages/main.html"
            })
            .when("/arillians", {
                templateUrl : "landingPages/arillians.html"
            })
    });
//});

