import React from "react";
import "../App.css";
import Star0 from "../img/star0.svg"
import Claquete from '../img/claquete.svg'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starExit: [

      ]
    } 
  }

  avaliar = (star) => {
    console.log(star)
  }

  render(){
    return (
      <div className="container_opacyt">
        <div className="container_opacyt-container_modal">
          <figure className="container_modal-box_img">
            <img className="box_img-item" src={Claquete}></img>
          </figure>
          <div className="container_modal-box_addMovie">
            <div className="box_addMovie-box_titleClose">
              <p className="box_titleClose-title">Adicionar novo filme:</p>
              <p className="box_titleClose-close">X</p>
            </div>
            <form className="box_addMovie-form">
              <label className="form-item_name">
                Nome:
                <input className="item_name-area_text"></input>
              </label>
              <label className="form-item_description">
                Descrição:
                <input className="item_description-area_text"></input>
              </label>
              <label className="form-item_status">
                Status:
                <input className="item_status-area_text"></input>
              </label>
              <div className="form-box_addImg">
                <label className="box_addImg-item">
                  Imagem de exibição:
                  <input className=""></input>
                </label>
                <button className="">adicinar imagem</button>
              </div>
              <label>
                Nota:
                <div>
                  <a href="#" onClick={() => this.avaliar(1)}>
                    <img src={Star0} id="s1"/>
                  </a>
                  <a href="#" onClick={() => this.avaliar(2)}>
                    <img src={Star0} id="s2"/>
                  </a>
                  <a href="#" onClick={() => this.avaliar(3)}>
                    <img src={Star0} id="s3"/>
                  </a>
                  <a href="#" onClick={() => this.avaliar(4)}>
                    <img src={Star0} id="s4"/>
                  </a>
                  <a href="#" onClick={() => this.avaliar(5)}>
                    <img src={Star0} id="s5"/>
                  </a>
                </div>
              </label>
              <div className="form-">
                <button className="">cancelar</button>
                <button className="">feito</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;