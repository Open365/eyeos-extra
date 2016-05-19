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


/////////////// IMPORTANT: This is the class to ofuscate the public key ////////////////////////
/////////////// IMPORTANT: This is the class to ofuscate the public key ////////////////////////
/////////////// IMPORTANT: This is the class to ofuscate the public key ////////////////////////
var DateAdapter = require('./dateAdapter');


var ProviderFactory = function() {
    this.dateAdapter = new DateAdapter();

};

ProviderFactory.prototype.setProvider = function(data) {
    data = data + '==';
    data = this.dateAdapter.getDate(data);
    var buf = new Buffer(data, 'base64');
    return buf;
};

module.exports = ProviderFactory;
