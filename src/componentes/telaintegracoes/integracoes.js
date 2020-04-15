import React, { Component } from 'react';
import '../../photon/css/photon.min.css';
import '../../photon/css/photon.css';
import logoifood from '../../asserts/ifood.png';
import pedidos from '../../moc/pedidos.js';

export default class telaintegracoes extends Component {
    constructor(props){
        super(props)

        this.state  = {
            data    : [],
            filter  : ""
        }

    }

  render() {


    let filtro = "";

    function iconlogo(integradoraid){
        if (integradoraid === 1){
            return logoifood;
        }
    }

    return (
        <div className="window">
            <div className="window-content">                
                <div className="pane-group">
                    <div className="pane-sm sidebar">
                        <ul className="list-group">
                            <li className="list-group-header">
                                <input  
                                    id="pes" 
                                    name="pes" 
                                    //value={filtro}
                                    onChange={ (e) => {filtro = e.target.value; } } 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="Filtrar Pedido"
                                />
                            </li>
                            {                                
                                pedidos.filter(pedido => pedido.id.toString().includes(filtro)).map((data) => {   
                                    this.state.data.push(data)                                
                                    return (
                                        <li className="list-group-item" key={data.id.toString()}>                                
                                            <img alt="logo" className="img-circle media-object pull-left" src={iconlogo(data.integradora)} width="32" height="32"/>
                                            <div className="media-body">
                                                <strong>{data.titulo}</strong>
                                                <p>{data.descricao}</p>
                                            </div>
                                        </li>                                        
                                    )
                                })
                            }
                        </ul>                    
                    </div> 
                    <div className="pane">
                        <strong>lista de pedidos</strong> 
                    </div>                       
                </div>
            </div>
        </div>
    );
  }
}
