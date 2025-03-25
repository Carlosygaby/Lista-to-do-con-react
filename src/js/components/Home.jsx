import { useState } from "react";

//include images into your bundle

const Home = () => {
  // Estados de la tarea nueva y la lista de tareas existentes
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([
    "Comer",
    "Tomar cafe",
    "Estudiar",
  ]);
  const [displayBoton, setDisplayBoton] = useState(null);

  // Funcion para manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    if (nuevaTarea.trim() === "") {
      alert("Ingresa una tarea valida");
      setNuevaTarea("");
      return;
    }

    setListaTareas([...listaTareas, nuevaTarea]);
    setNuevaTarea("");
  };

  // Funcion para manejar cuando cambia el input de la tarea nueva
  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
    console.log(event);
  };

  // Funcion para borrar una tarea de la lista
  const borrarTarea = (e) => {
    console.log(e);
    setListaTareas(
      listaTareas.filter((tarea, index) => index !== Number(e.target.name))
    );
  };

  const mostrarBoton = (index) => {
    setDisplayBoton(index);
  };

  const ocultarBoton = () => {
    setDisplayBoton(null);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-2">Mi Lista De Tareas</h1>
        <form className="list-group mb-2" onSubmit={handleSubmit}>
          <input
            className="list-group-item fs-3"
            type="text"
            placeholder="Agrega una nueva tarea a la lista"
            value={nuevaTarea}
            onChange={handleChange}
          />
        </form>

        <ul className="list-group">
          {listaTareas.map((tarea, index) => (
            <li
              onMouseEnter={() => mostrarBoton(index)}
              className="list-group-item fs-3 d-flex"
              key={index}
              onMouseLeave={ocultarBoton}
            >
              {tarea}
              <button
                type="button"
                className={`btn btn-light ms-auto ${
                  displayBoton === index ? "" : "d-none"
                }`}
                onClick={borrarTarea}
                name={index}
              >
                ❌
              </button>
            </li>
          ))}
          <div className="list-group-item">
            {listaTareas.length}{" "}
            {listaTareas.length === 1 ? "Tarea por hacer" : "Tareas por hacer"}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Home;
