(function () {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  type  El tipo de ajuste.
     * @param {Number}  value El número.
     * @param {Integer} exp   El exponente (El logaritmo de ajuste en base 10).
     * @returns {Number} El valor ajustado.
     */
    function decimalAdjust(type, value, exp) {
        // Si exp es undefined o cero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Si el valor no es un número o exp no es un entero...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function (value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function (value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function (value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();

function Input_Int(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

function Input_Float(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 46) {
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

function Mensaje_Alerta(text) {
    return `<p class="mb-0">Debe ingresar ${text}</p>`;
}

function Load_Post(state, controller, params) {
    var content = '';

    if (state) {
        content += '<form action="' + controller + '" method="post">';
    } else {
        content += '<form action="' + controller + '" method="post" target="_blank">';
    }

    for (let i = 0; i < params.length; i++) {
        content += '<input type="hidden" name="' + params[i].Name + '" value="' + params[i].Value + '"></input>';
    }
    content += '</form>';

    var form = $(content);
    $('body').append(form);
    $(form).submit();
}

function spinnerOpen() {
    $("#app").append(`<div class="modal" id="mdl_spnnr" role="dialog" aria-hidden="true"> 
                <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-body"> 
                            <p style="text-align: center; margin: auto;">Cargando informacion</p>
                            <div class="spinner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
    $("#mdl_spnnr").modal({ backdrop: "static", keyboard: false });
    $("#mdl_spnnr").modal("show");
    $("#app-content").append('<div class="mdl_bckdrp" id="mdl_bckdrp"></div>');
}

function spinnerClose() {
    $("#mdl_spnnr").modal("hide");
    $("#mdl_spnnr").remove();
    $(".mdl_bckdrp").remove();
}

let chartColors = [
    'rgba(0, 191, 214, 0.6)', // cyan
    'rgba(255, 205, 86, 0.6)', //yellow:
    'rgba(40, 167, 69, 0.6)', //green:
    'rgba(163, 99, 189, 0.6)', //purple:
    'rgba(255, 158, 31, 0.6)', //orange:
    'rgba(44, 123, 241, 0.6)', //blue:
    'rgba(255, 112, 184, 0.6)', //pink:
    'rgba(255, 34, 59, 0.6)', //red:
];
let chartColors_Border = [
    'rgba(0, 191, 214, 0.9)', // cyan
    'rgba(255, 205, 86, 0.9)', //yellow:
    'rgba(40, 167, 69, 0.9)', //green:
    'rgba(163, 99, 189, 0.9)', //purple:
    'rgba(255, 158, 31, 0.9)', //orange:
    'rgba(44, 123, 241, 0.9)', //blue:
    'rgba(255, 112, 184, 0.9)', //pink:
    'rgba(255, 34, 59, 0.9)', //red:
];