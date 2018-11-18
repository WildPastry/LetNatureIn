/*jslint browser:true */

//LOAD JAVASCRIPT
$(document).ready(function () {

    // ANIMATED ICONS
    $('.fa-heart').hover(
        function () {
            $(this).addClass('.animated heartBeat')
        },
        function () {
            $(this).removeClass('.animated heartBeat')
        }
    )
    $('.fa-heartbeat').hover(
        function () {
            $(this).addClass('.animated heartBeat')
        },
        function () {
            $(this).removeClass('.animated heartBeat')
        }
    )
    $('.fa-arrow-down').hover(
        function () {
            $(this).addClass('.animated bounce')
        },
        function () {
            $(this).removeClass('.animated bounce')
        }
    )
    $('.fa-pagelines').hover(
        function () {
            $(this).addClass('.animated rotateOut')
        },
        function () {
            $(this).removeClass('.animated rotateOut')
        }
    )
    $('.fa-feather-alt').hover(
        function () {
            $(this).addClass('.animated rotateOut')
        },
        function () {
            $(this).removeClass('.animated rotateOut')
        }
    )
    $('.fa-leaf').hover(
        function () {
            $(this).addClass('.animated rotateOut')
        },
        function () {
            $(this).removeClass('.animated rotateOut')
        }
    )
});