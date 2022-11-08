import React from 'react';
import './modal.css';

interface ModalProps {
  /**
   * Este es el titulo del modal
   */
  titulo: string,

  /**
   * Este es la descripcion del modal 
   */
  descripcion: string;

  /**
   * Este es el nombre del Estudiante
   */
  estudiante: string;
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  titulo,
  descripcion,
  estudiante,
  ...props
}: ModalProps) => {
  // const mode =  ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
     
    <a id="myBoton" href="#modal1">Mostrar Ventana</a>
    
      <div id="modal1" className='modalmask'>
        <div className="modalbox myModal">
            <a href="#cerrar" title="Close" className="cerrar">X</a>
            <h1>{titulo}</h1>
            <hr />
            <h4>{descripcion}</h4>
            <p>{estudiante}</p>
        </div>
      </div>

    </div>
  );
};
