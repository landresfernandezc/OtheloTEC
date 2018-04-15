/*
===============================================================================================
>  BackEnd de Componentes, se encarga de realizar las llamadas necesarias a la base de datos  <
===============================================================================================
*/

var consultsPreparerPartida = require('../ConsultsPreparer/consultsPreparerPartida');

// inserta componentes
exports.login = function(datos, callback) {
    consultsPreparerPartida.login(datos, function(response) {
        msg = (response.error == 1) ? "Error de conexión" : "Credenciales incorrectas";
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "El usuario existe",
                message: "El usuario existe en la base de datos",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};
exports.validaCorreo = function(datos, callback) {
    consultsPreparerPartida.validaCorreo(datos, function(response) {
        msg = (response.error == 1) ? "Error de conexión" : "Credenciales incorrectas";
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "El usuario existe",
                message: "El usuario existe en la base de datos",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};
exports.insertarUsuario = function(datos, callback) {
    consultsPreparerPartida.insertarUsuario(datos, function(response) {
        msg = (response.error == 1) ? "Error de conexión" : "Credenciales incorrectas";
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "Se inserto con exito",
                message: "Se inserto en la base de datos con exito",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};

// seleccionar componentes
exports.seleccionarComponente = function(callback) {
    consultsPreparerPartida.selectComponente( function(response) {
        if (response.success) {
            msg = (response.error == 1) ? "Error de conexión" : "No se pudo seleccionar los componentes";
            callback({
                success: true,
                data: response.data,
                error: response.error
            })
        } else {
            callback({
                success: false,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};

//inserta movimiento
exports.insertMovimiento = function(datos, callback) {
    consultsPreparerPartida.insertMovimiento(datos, function(response) {
        msg = (response.error === 1) ? "Error de conexión" : "No se pudo modificar el componente";
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "Componente editado",
                message: "Componente editado con exito",
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};

// eliminar componentes
exports.eliminarComponente = function(datos, callback) {
    consultsPreparerPartida.deleteComponente(datos, function(response) {
        msg = (response.error === 1) ? "Error de conexión" : "No se puede eliminar el componente";
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "Componente eliminado",
                message: "Componente eliminado con éxito",
                type: "success"
            })
        } else {
            callback({
                success: false,
                error: response.error,
                title: "Error",
                message: msg,
                type: "error"
            })
        }
    });
};