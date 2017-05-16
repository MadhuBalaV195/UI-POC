var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

var service = {};

service.authenticate = authenticate;
service.create = create;

module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();

    var fs = require('fs'), isFailed=false;

    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        var dataArray = JSON.parse(data);

        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i].username==username && bcrypt.compareSync(password, dataArray[i].hash)) {
                // authentication successful
                deferred.resolve({
                    empID: dataArray[i].empID,
                    empName: dataArray[i].empName,
                    token: jwt.sign({ sub: dataArray[i].empID }, config.secret)
                });
                isFailed=false;
                break;
            } else {
                // authentication failed
                isFailed=true;
            }
        }
        if(isFailed){
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    var fs = require('fs')

    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) throw err

        var hasID = false,
            hasUsername = false,
            arrayOfObjects = JSON.parse(data);

        for (var i = 0; i < arrayOfObjects.length; i++) {
            if (arrayOfObjects[i].empID == userParam.empID) {
                hasID = true;
                break;
            } else if (arrayOfObjects[i].username == userParam.username) {
                hasUsername = true;
                break;
            }
        }
        if (hasUsername) {
            console.log('username already taken');
            deferred.reject('Username "' + userParam.username + '" is already taken. Please choose another');
        } else if (hasID) {
            console.log('Employee ID already registered');
            deferred.reject('Employee ID "' + userParam.empID + '" is already registered');
        } else {
            var user = _.omit(userParam, 'password');
            user.hash = bcrypt.hashSync(userParam.password, 10);
            arrayOfObjects.push(user)
            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects, null, 2), 'utf-8', function (err) {
                if (err) throw err
                console.log('Employee details registered.')
            })
        }
        deferred.resolve();
    })
    return deferred.promise;
}