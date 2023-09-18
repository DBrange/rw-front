import { styled } from "styled-components";

export const FormRangeContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: start;
  align-items: start;
  flex-direction: column;
`

export const RangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: .5rem;
`

export const Range = styled.input`
  flex: 1 1 0%;
  -webkit-appearance: none; /* Elimina la apariencia por defecto en navegadores webkit */
  appearance: none;
  width: 100%;
  height: 7px; /* Altura del riel del rango */
  background: #ccc;
  border-radius: 1rem;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Elimina la apariencia por defecto en navegadores webkit */
    appearance: none;
    width: 15px; /* Ancho del thumb */
    height: 15px; /* Altura del thumb */
    background: #8b5cf6; /* Cambia el color del thumb aquí */
    cursor: pointer;
    border-radius: 50%;
  }
  
  &::-moz-range-thumb {
    width: 15px; /* Ancho del thumb */
    height: 15px; /* Altura del thumb */
    background: #8b5cf6; /* Cambia el color del thumb aquí para Firefox */
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const PRange = styled.p`
  flex: none;
`