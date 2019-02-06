'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue= true;
        $scope.mystyle={color:'red'};
        $scope.myclass='blue';
        $scope.buttonDisabled = true;
        $scope.sortorder= 'name';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2019',
            time: '10:30am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Controllers & Modules introductory',
                    creatorName: 'ABC',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn ins and outs of controllers & modules',
                    upVoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    creatorName: 'PQR',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will look at scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'XYZ',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'Controllers are beginning of everything',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };
});