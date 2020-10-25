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
                document.getElementById('isornot').innerHTML = "yes";
                document.getElementById('form').reset();
            } else {
                document.getElementById('isornot').innerHTML = "no";
                document.getElementById('form').reset();
            }

        }


    }); //DOM CONTENT LOADED
})();