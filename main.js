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
            .when("/boowalla", {
                templateUrl : "landingPages/boowalla.html"
            })
            .when("/arillians", {
                templateUrl : "landingPages/arillians.html"
            })
            .when("/cuddlePuddle", {
                templateUrl : "landingPages/cuddlePuddle.html"
            })
            .when("/breadCrumbs", {
                templateUrl : "landingPages/breadCrumbs.html"
            })
            .when("/protards", {
                templateUrl : "landingPages/protards.html"
            })
            .when("/drakesD", {
                templateUrl : "landingPages/drakesD.html"
            })
            .when("/jammers", {
                templateUrl : "landingPages/jammers.html"
            })
            .when("/hueyKabluey", {
                templateUrl : "landingPages/hueyKabluey.html"
            })
            .when("/bellyFlops", {
                templateUrl : "landingPages/bellyFlops.html"
            })
            .when("/totesMcGoats", {
                templateUrl : "landingPages/totesMcGoats.html"
            })
            .when("/hawatti", {
                templateUrl : "landingPages/hawatti.html"
            })
            .when("/predatorHead", {
                templateUrl : "landingPages/predatorHead.html"
            });
    });
//});

