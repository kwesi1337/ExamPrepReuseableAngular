'use strict';

var app = angular.module('PersonApp', []);

app.controller("PersonController", ['PersonFactory', 'FormatterFactory', function (PersonFactory, FormatterFactory) {
        var self = this;
        self.getPersons = function () {
            return PersonFactory.getPersons();
        };

        self.titleCase = function (inputText) {
            return FormatterFactory.titleCase(inputText);
        };
        self.camelCase = function (inputText) {
            return FormatterFactory.camelCase(inputText);

        };
        self.dashCase = function (inputText) {
            return FormatterFactory.dashCase(inputText);
        };
    }]);

app.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});

app.filter('name', function () {
    return function (person) {
        return person.lastName + ", " + person.firstName;
    };
});

app.factory('PersonFactory', function () {
    var persons = [
        {firstName: "Jan", lastName: "Jansen"},
        {firstName: "Lars", lastName: "Larsen"},
        {firstName: "Hans", lastName: "Hansen"},
        {firstName: "Sara", lastName: "Sarasen"},
        {firstName: "Kirstin", lastName: "Kirstinsen"},
        {firstName: "Peter", lastName: "Petersen"},
        {firstName: "Lasse", lastName: "Lassesen"}];
    
    var getPersons = function (){
        return persons;
    };
    return {
        getPersons : getPersons
    };
});

app.factory('FormatterFactory', function (){
    var titleCase = function (inputText){
        return inputText.replace(/\w\S*/g, function (txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    
    var camelCase = function (inputText){
        var w = inputText.replace(/\w\S*/g, function (txt){
            return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        });
        return w.replace(/\s/g, '');
    };
    var dashCase = function (inputText){
        return (inputText.toLowerCase()).replace(/\s/g, '-');
    };
    
    return {
        titleCase: titleCase,
        camelCase: camelCase,
        dashCase: dashCase
    };
});

app.directive("loginForm", function (){
    return {
        templateUrl: 'templates/login.html'
    };
});