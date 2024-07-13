
const Boton = (props) => {
  return (
    <>
      <button className={props.clase } >{props.children}</button>
    </>
  );
};

export default Boton;
