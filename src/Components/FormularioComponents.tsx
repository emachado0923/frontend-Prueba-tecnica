import { useForm } from "react-hook-form";
import axis from 'axios';

const FormularioComponents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Campo Requerido",
                  },
                  maxLength: {
                    value: 20,
                    message: "Campo maximo de 20 caracteres",
                  },
                  min: {
                    value: 3,
                    message: "Minimo 3 caracteres",
                  },
                })}
                className="form-control"
                id="nombre"
                name="nombre"
              />
              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="modelo" className="form-label">
                Modelo
              </label>
              <input
                type="text"
                {...register("modelo", {
                  required: true,
                  maxLength: 20,
                  min: 3,
                })}
                className="form-control"
                id="modelo"
                name="modelo"
              />
              {errors.modelo && <span>Este campo es requerido</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="elamacenamiento" className="form-label">
                Almacenamiento
              </label>
              <input
                type="text"
                {...register("almacenamiento", {
                  required: true,
                  maxLength: 20,
                  min: 3,
                })}
                className="form-control"
                id="almacenamiento"
                name="almacenamiento"
              />
              {errors.almacenamiento && <span>Este campo es requerido</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="text"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  min: 3,
                })}
                className="form-control"
                id="password"
                name="password"
              />
              {errors.password && <span>Este campo es requerido</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Crear Movil
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioComponents;
