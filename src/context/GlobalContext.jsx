import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //referencia al video y formulario editar
  const videoRef = useRef(null)
  const formRef = useRef(null)

  // abrir y cerrar modal
  const [abrirModal, setAbrirModal] = useState(false);

  //url de api de videos
  const urlApi = "https://6691a68a26c2a69f6e905e11.mockapi.io/api/aluraflix/videos";

  //arreglo de videos api
  const [videos, setVideos] = useState([]);

  //actualizador de los videos al editar alguno
  const [actualizadorVideos, setActualizadorVideos] = useState(false)

  // lista categorias
  const categorias = [
    {
      titulo: "Frontend",
      color: "#6BD1FF",
    },
    {
      titulo: "Backend",
      color: "#00C86F",
    },
    {
      titulo: "Innovación y gestión",
      color: "#ffcd05",
    },
  ];

  //llamada a la api

  useEffect(() => {
    const getVideos = async () => {
      try {
        const respuesta = await fetch(urlApi);
        const videos = await respuesta.json();
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, [actualizadorVideos]); //ejecutar al inicio y al editarse un video

  //Video seleccionado
  const [videoSeleccionado, setVideoSeleccionado] = useState({
    id: "1",
    titulo: "Challenge React",
    descripcion:
      "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    video_url: "https://www.youtube.com/embed/ov7vA5HFe6w?si=-KpeHXGotQ5DxijQ",
    categoria: "Introducción",
    color: "#6BD1FF",
  });

  return (
    <GlobalContext.Provider
      value={{
        abrirModal,
        setAbrirModal,
        videos,
        setVideos,
        videoSeleccionado,
        setVideoSeleccionado,
        urlApi,
        actualizadorVideos,
        setActualizadorVideos,
        videoRef, 
        formRef,
        categorias
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
