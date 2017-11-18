var Usuario = require('./modelUsuarios.js')

module.exports.crearUsuarioDemo = function(callback){
  var arr = [{ email: 'user1@domain.com', user: "user1", password: "user1123"}, { email: 'user2@domain.com', user: "user2", password: "user2123"}];
  Usuario.insertMany(arr, function(error, docs) {
    if (error){
      if (error.code == 11000){
        callback("Utilice los siguientes datos: </br>usuario: user1, password user1123 </br >usuario: user2, password user2123")
      }else{
        callback(error.message)
      }
    }else{
      callback(null, "Los usuarios 'user1' y 'user2' se han creado correctamente. </br>usuario: user1, password user1123 </br >usuario: user2, password user2123")
    }
  });
}
