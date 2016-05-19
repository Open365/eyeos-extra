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

var Extra = require('./extra');
var ProviderFactory = require('./providerFactory');

var Signer = function() {
    this.system = 'ns';
    this.date = 'ce';
};

Signer.prototype.extract = function(data, publicKey) {
    publicKey = new ProviderFactory().setProvider(publicKey);
    var extract = 'li';
    this.publickKey = publicKey;
    var name = extract + this.date + this.system + 'e';
    var textSignedExtra = JSON.parse(data);
    var extraTxt = textSignedExtra[name];
    var signature = textSignedExtra["signature"];
    if (this._verifyRSA(this._getHash(extraTxt), signature)) {
        var jsonExtra = JSON.parse(extraTxt);
        return jsonExtra;
    } else {
        return false;
    }

};

Signer.prototype._getHash = function(extra){
    var md5 = require('crypto').createHash('md5');

    var md5Updated = md5.update(extra);
    return md5Updated.digest('hex');
};

Signer.prototype._verifyRSA = function(hash, signature){
    this.signer = require('crypto').createVerify('RSA-SHA256');
    this.signer.update(hash);
    return this.signer.verify(this.publickKey, signature, 'base64');
};



module.exports = Signer;
