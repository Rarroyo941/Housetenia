import './Style.css';
import React from 'react';

function Imc() {
    return(
        <section className='imc-container'>
            <div className="imc-calculator">
                <h1>CALCULADORA IMC</h1>
                <h5>(Índice de Masa Corporal)</h5>
                <form>
                    <div>
                        <label>Altura</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Peso</label>
                        <input></input>
                    </div>
                    <button>Calcular</button>
                </form>
                <p>Resultado</p>
            </div>
            <div className="imc-table">
            </div>
        </section>
    )
}
export default Imc