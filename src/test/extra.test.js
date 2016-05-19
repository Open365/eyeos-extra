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

var assert = require('chai').assert;

var Extra = require('../lib/extra');

suite('Extra', function() {
    var sut, data, publicKey;

    setup(function () {

        sut = new Extra(5, "eyeos", "www.test.com", 55);
        publicKey = 'YF0gYF1PEHqWGvODIHWZFHZtF0IMYF0gYF0XGHyWDxydDH5PM2gknTgcEmy3ZRWOHHITDHSCD0SEBRSAFHyPD2qYD0SEEHS2ERk4nyWRoJqKnRARHzD4oIWIDjczq3R5Y1NeMGOvGUHiDzkmDaAUJaEinHE0A0quryNjGQZ5AaujpSI3FJ5fEyWgnyb0G3A2p21SGJV2A1Z4ZzMMPzkfBTgmGwMOnIWvoxunMHgFraWDX3W3HzW4rwWIraWPX21mHUWvJGy4qTj5GxuYBHA0nz5cZ2MOI2xiMH43H28XJzyQFzcbnaWfFJgHGHE3rKMAZTcjp2uwI2guFzbeY3xen0SOBJbip0A2JT9SqUWHISclAHMEEwOIFHMwMTD0ptb5BKyvG21nAIySF01RFmE3Yl9ZBTuBMaS4G083BHMKFv9EoIq2oUczMmIYAKudF3uDGauKrxcCAH92JSS1G0D3Pzx4ER1CAaSbZRyFX3qaY0gkGQIhrxqZIyESrHZlpwyBpH1mZ1Eaq3ESBHM6Lmp3EKyfHRteGSAUqxyTHTcJM3HXpKqWERSEDHVXYF0gYF1SGxDtHSIPGRyQVRgSJF0gYF0gPt';
        data = '{"license":"{\\"limit\\":5,\\"company\\":\\"eyeos\\",\\"date\\":55,\\"url\\":\\"www.test.com\\"}","signature":"bTXWQNC00EdmjKGQJUS89PdhcnQZjFKzZcdpj9tuDp0wkzBDUzfnhNITZL5dwPdQaTQ3rFm0LjLrI8eTh4MD2MRmsUJgv2w6E8nuKe89SU6XhbCmtZp7v0Ubyvtc1EepGr2UbiMPr5o7wXmN3ZCdUr8M6WL/OLitme4AmbbwMVbX19ROktppl9Jt2CwDqsf/rsbTOYRCHaJngW3ACbmLHaV94bZ2j3wulCMS6+spoQsA0dRZ6MFQdDOpSBBlYk8Q3WZ1rC1l5rMQwSFKZVf/g1hNgMw9/ZTaKoee+/uWmB7yH5RLfiQez0JcCGr6g6Ay56UR+ecBo26VcxAVzzNjmQ=="}';

    });

    suite('fromData', function() {
        test('Should return a correct license', function(){
            var lol = sut.fromData(data, publicKey);
            assert.equal(lol.getLimit(), sut.getLimit(), "Incorrect numLicenses");
            assert.equal(lol.getDate(), sut.getDate(), "Incorrect date");
            assert.equal(lol.getCompany(), sut.getCompany(), "Incorrerct company");
            assert.equal(lol.getUrl(), sut.getUrl(), "Incorrect url");
        })
    });
});