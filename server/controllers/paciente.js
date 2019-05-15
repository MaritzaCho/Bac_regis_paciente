import model from '../models';

const { pacientes: paciente } = model;

  class pacientess {
    static signUp(req, res) {
      const { nombre,apPaterno,apMaterno,ci,fechNacimien,sexo,estadoCivil,ocupacion,depNacio,munipNacio,departVive,municVive,direccion,zona,respfamiliar,nombreP,nombreM,telefonorRef,lugTrabajo,directrabajo,telef} = req.body
        return paciente
          .create({
              nombre,
              apPaterno,
              apMaterno,
              ci,
              fechNacimien,
              exo,
              estadoCivil,
              ocupacion,
              depNacio,
              munipNacio,
              departVive,
              municVive,
              direccion,
              zona,
              respfamiliar,
              nombreP,
              nombreM,
              telefonorRef,
              lugTrabajo,
              directrabajo,
              telef
           })
           .then(userData => res.status(201).send({
              success: true,
              message: 'Paciente creado',
              userData
            }))
       }
  static getPaciente(req, res) {
       return pacientes
    .findAll()
    .then(pacientess => res.status(200).send(pacientess));
  }
}
        
export default pacientess;