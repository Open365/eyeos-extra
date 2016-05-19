/*
    Copyright (c) 2016 eyeOS

    This file is part of Open365.

    Open365 is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

var sinon = require('sinon');
var assert = require('chai').assert;

var Controller = require('../lib/controller');
var ExtraDao = require('../lib/extraDAO');


suite('Controller', function() {
    var sut, extraDaoRecoverStub, extraDao;

    setup(function () {

        extraDao = new ExtraDao();
        extraDaoRecoverStub = sinon.stub(extraDao, "recover");
        sut = new Controller(extraDao);
    });


    suite('getExtra', function() {
        test('Should call extraDAO.recover with a correct param', function(){
            sut.getExtra("path", "key");
            assert(extraDaoRecoverStub.calledWithExactly("path", "key"));

        })
    });
})