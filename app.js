(function () {
'use strict';

angular.module('myApp', [])
.controller('myCtrl', function ($scope) {
    $scope.lista = ['Emparedado', 'Carne de Res', 'Bagre', 'Salmon', 'Trucha frita', 'Trucha a la plancha']
    $scope.resultado = ""
    $scope.mensaje=""
    $scope.changeName = function () {
        var cadena = $scope.name;
        if (cadena == null | cadena == '') {
            $scope.mensaje = "Por favor primero ingrese su pedido!"
            $scope.resultado = "";
        } else {
            $scope.mensaje = "";
            cadena = cadena.trim();
            var arreglocadenafin;
            var indiceinicial = 0;

            //    var re = /\s*,\s*/;
            //      var cadena = cadena.split(/\s*,\s*/);
            //      var cadena = cadena.split(/\s*,\s*/);
            var arreglocadena = cadena.split(',');
            for (var i = 0, l = arreglocadena.length, arreglocadenafin = []; i < l; i++) {
                if (arreglocadena[i].trim() != '') {
                    arreglocadenafin[indiceinicial] = arreglocadena[i];
                    indiceinicial += 1;
                }
            };
            var contador = arreglocadenafin.length;
            var cadenafin = arreglocadenafin.toString();
            // Establece si el pedido tiene de uno a tres productos (Suficiente) o más (Demadiado).
            if (contador < 4) {
                $scope.resultado = "Suficiente";
            } else {
                $scope.resultado = "Demasiado"
            };
            $scope.name = cadenafin;
        }
    }
  })})();
