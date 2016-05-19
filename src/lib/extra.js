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

var Signer = require('./signer');

var Extra = function(limit, company, url, date) {
    this.limit = limit || 0;
    this.date1 = 'ce';
    this.company = company || '';
    this.date = date || Date.now();
    this.url = url || '';
    this.system = 'ns';
}

Extra.prototype.getLimit = function(){
    return this.limit;
};

Extra.prototype.getCompany = function() {
    return this.company;
};

Extra.prototype.getDate = function() {
    return this.date;
};

Extra.prototype.getUrl = function() {
    return this.url;
};

Extra.prototype.fromData = function(data, publicKey){
    var signer = new Signer();
    var jsonExtra = signer.extract(data, publicKey);

    if(jsonExtra) {
        this.limit = jsonExtra['limit'];
        this.company = jsonExtra['company'];
        this.date = jsonExtra['date'];
        this.url = jsonExtra['url'];
        return this;
    } else {
        throw new Error("Failed to load extra data");
    }
};



module.exports = Extra;
