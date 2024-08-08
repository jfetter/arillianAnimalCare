'use strict';

    console.log("main js loading "+ Date.now())
let app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    console.log("app loaded " + Date.now())

    // $scope.updatePath = function(pathToUse){
    //     console.log('updating Path to ' + pathToUse)
    //     $location.path(pathToUse);
    // }

    $routeProvider
        .when("/", {
            templateUrl : "landingPages/main.html"
        })
        .when("/arillians", {
            templateUrl : "landingPages/arillians.html"
        })
        .when("/pets", {
            templateUrl : "landingPages/animalCare.html"
        })
        .when("/about", {
            templateUrl : "landingPages/about.html"
        })
        .when("/books", {
            templateUrl : "landingPages/books.html"
        })
        .when("/comics", {
            templateUrl : "landingPages/comics.html"
        })
        .when("/recipes", {
            templateUrl : "landingPages/recipes.html"
        })
        .when("/merch", {
            templateUrl : "landingPages/merch.html"
        })
});
$(document).ready(function(){
    console.log("document ready")
    // $( "li" ).hover(
    //     function() {
    //         $(this).find("span").stop().animate({
    //             width:"100%",
    //             opacity:"1",
    //         }, 400, function () {
    //         })
    //     }, function() {
    //         $(this).find("span").stop().animate({
    //             width:"0%",
    //             opacity:"0",
    //         }, 400, function () {
    //         })
    //     }
    // );


});

