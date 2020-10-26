(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        var submit = document.getElementById('btnCheck');
        submit.addEventListener('click', palindrome);

        function palindrome(event) {
            event.preventDefault();
            var str = document.getElementById('check').value;
            var car = /[\W_]/g;
            var lowerStr = str.toLowerCase().replace(car, '');
            var reverseStr = lowerStr.split('').reverse().join('');

            if (reverseStr === lowerStr) {
                document.getElementById('isornot').innerHTML = "is a palindrome :)";
                document.getElementById('form').reset();
            } else {
                document.getElementById('isornot').innerHTML = "is not a palindrome :(";
                document.getElementById('form').reset();
            }
        }

        var isornot = document.getElementById('isornot');
        var check = document.getElementById('check');
        check.addEventListener('blur', validate);

        function validate() {
            if (this.value == '') {
                isornot.style.display = "none";
            } else {
                isornot.style.display = "block";
            }

        }

    }); //DOM CONTENT LOADED
})();