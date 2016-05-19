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

/////////////// IMPORTANT: This is the class do Rot13 ////////////////////////
/////////////// IMPORTANT: This is the class do Rot13 ////////////////////////
/////////////// IMPORTANT: This is the class do Rot13 ////////////////////////

DateAdapter = function() {

};

DateAdapter.prototype.getDate = function(s) {
    var i;
    var rotated = '';

    for (i=0; i<s.length; i++) {
        var ch = s.charCodeAt(i);
        // a-z -> n-m
        if (97 <= ch && ch <= 122) {
            rotated += String.fromCharCode( (ch-97 + 13) % 26 + 97);
            // A-Z -> N-M
        } else if (65 <= ch && ch <= 90) {
            rotated += String.fromCharCode( (ch-65 + 13) % 26 + 65);
        } else {
            rotated += s[i];
        }
    }

    return rotated;
};

module.exports = DateAdapter;