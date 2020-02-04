import React from 'react';
import '../App.css';

import Star0 from "../img/star0.svg"
import Star1 from "../img/star1.svg"
import Claquete from '../img/claquete.svg'

import ImgBadboys from "../img/badboysList.jpeg"
import ImgDeadpoll from "../img/deadpollList.jpg"

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            s1: null,
            s2: null,
            s3: null,
            s4: null,
            s5: null,
            menuOpen: false,
            menuItens: [ 'Quero ver', 'Já vistos'],
            titleLists: 'Minha lista:',
            movies: [
                {
                    name: "Bad boys for live",
                    note: "5",
                    description: "O novo filme da franquia mostrará a polícia de Miami e sua" +
                    "equipe de elite AMMO tentando derrubar Armando Armas (Jacob Scipio)," +
                    "chefe de um cartel de drogas. Armando é um assassino de sangue frio com uma" + 
                    "natureza cruel e provocadora. Ele está comprometido com o trabalho do cartel," +
                    "sendo enviado por sua mãe para matar Mike (Will Smith). Paola Nuñez assumirá" +
                    "o papel de Rite, a psicóloga criminal dura e engraçada que é recém-nomeada "+
                    "chefe da AMMO e ex-namorada de Mike.",
                    img: ImgBadboys,
                    status: ""
                },
                {
                    name: "Deadpoll 2",
                    note: "5",
                    description: "O supersoldado Cable vem do futuro com a missão de assassinar o" +
                    "jovem mutante Russel e o mercenário Deadpool precisa aprender o" +
                    "que é ser herói de verdade para salvá-lo. Para isso, ele recruta seu" + 
                    "velho amigo Colossus e forma o novo grupo X-Force, sempre com" +
                    "o apoio do fiel escudeiro Dopinder." ,
                    img: ImgDeadpoll,
                    status: ""
                }
            ],
        }
    }

    openMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    openModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    resevName = (e) => {
        // console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    resevDescription = (e) => {
        this.setState({
            description:e.target.value
        })
    }

    resevStatus = (e) => {
        this.setState({
            status:e.target.value
        })
    }

    resevImg = (e) => {
        this.setState({
            img:e.target.value
        })
    }
    saveValue = (movie) => {
        const { movies } = this.state;
        
        movies.push(movie)
        // console.log(movies)
        this.openModal()
    }

    addMovie = (e) => {
        e.preventDefault();
        const { name, description, status, img, note } = this.state
        this.saveValue({name, description, status, img, note})

        // this.avaliar({note})
    }

    saveStar = () => {
        // console.log(this.state.s1)
        this.setState({
            s1: document.getElementById("s1"),
            s2: document.getElementById("s2"),
            s3: document.getElementById("s3"),
            s4: document.getElementById("s4"),
            s5: document.getElementById("s5"),
        })
    }

    avaliar = (star) => {
        // const note = score
        // this.saveValue({note})

        let url = window.location;
        url = url.toString()
        // url = url.split("HomePage.js");
        url = url[0];

        // console.log(score)
        // console.log(star)
        if (star == 5){ 
            // console.log('olaa')
            console.log(this.state.s5.src)
            if (this.state.s5.src == 'http://localhost:3000/static/media/star0.58c764d9.svg') {
                this.setState({
                    s1:Star1,
                    s2:Star1,
                    s3:Star1,
                    s4:Star1,
                    s5:Star1,
                    note: 5
                })
                console.log('igual url')
                // setAttibute(src, Star1)
            }
            console.log(this.state.note)
        } else {
            this.setState({
                s1:Star1,
                s2:Star1,
                s3:Star1,
                s4:Star1,
                s5:Star0,
                note: 4
            })
            console.log(this.state.note)
        }

        // if (star == 4){ 
        //     if (this.state.s4 == url + '/img/star0.svg') {
        //         this.setState({
        //             s1:Star1,
        //             s2:Star1,
        //             s3:Star1,
        //             s4:Star1,
        //             s5:Star0,
        //             note: 4
        //         })
        //     }
        // } else {
        //     this.setState({
        //         s1:Star1,
        //         s2:Star1,
        //         s3:Star1,
        //         s4:Star0,
        //         s5:Star0,
        //         note: 3
        //     })
        // }

        // if (star == 3){ 
        //     if (this.state.s3 == url + '/img/star0.svg') {
        //         this.setState({
        //             s1:Star1,
        //             s2:Star1,
        //             s3:Star1,
        //             s4:Star0,
        //             s5:Star0,
        //             note: 3
        //         })
        //     }
        // } else {
        //     this.setState({
        //         s1:Star1,
        //         s2:Star1,
        //         s3:Star0,
        //         s4:Star0,
        //         s5:Star0,
        //         note: 2
        //     })
        // }

        // if (star == 2){ 
        //     if (this.state.s2 == url + '/img/star0.svg') {
        //         this.setState({
        //             s1:Star1,
        //             s2:Star1,
        //             s3:Star0,
        //             s4:Star0,
        //             s5:Star0,
        //             note: 2
        //         })
        //     }
        // } else {
        //     this.setState({
        //         s1:Star1,
        //         s2:Star0,
        //         s3:Star0,
        //         s4:Star0,
        //         s5:Star0,
        //         note: 1
        //     })
        // }

        // if (star == 1){ 
        //     if (this.state.s1 == url + '/img/star0.svg') {
        //         this.setState({
        //             s1:Star1,
        //             s2:Star0,
        //             s3:Star0,
        //             s4:Star0,
        //             s5:Star0,
        //             note: 1
        //         })
        //     }
        // } else {
        //     this.setState({
        //         s1:Star0,
        //         s2:Star0,
        //         s3:Star0,
        //         s4:Star0,
        //         s5:Star0,
        //         note: 0
        //     })
        // }
    }

    modal = () => (
        <div className="container_opacyt">
        <div className="container_opacyt-container_modal">
          <figure className="container_modal-box_img">
            <img className="box_img-item" src={Claquete}></img>
          </figure>
          <div className="container_modal-box_addMovie">
            <div className="box_addMovie-box_titleClose">
              <p className="box_titleClose-title">Adicionar novo filme:</p>
              <a className="closeModal" href="#"><p className="box_titleClose-close" onClick={this.openModal}>X</p></a>
            </div>
            <form className="box_addMovie-form" onSubmit={this.addMovie} onLoad={this.saveStar}>
              <label className="form-item_name legend_textArea">
                Nome:
                <input className="item_name-area_text text_area" onChange={this.resevName} required></input>
              </label>
              <label className="form-item_description legend_textArea">
                Descrição:
                <input className="item_description-area_text text_area" onChange={this.resevDescription} required></input>
              </label>
              <label className="form-item_status legend_textArea">
                Status:
                <input className="item_status-area_text text_area" onChange={this.resevStatus} required></input>
              </label>
              <div className="form-box_addImg">
                <label className="box_addImg-item_exibição legend_textArea">
                  Imagem de exibição:
                  <input className="item_exibição-text_area text_area" onChange={this.resevImg} required></input>
                </label>
                <button className="box_addImg-btn_addImg btn_modal">adicinar imagem</button>
              </div>
              <label className="form-area_avalieited legend_textArea">
                Nota:
                <div className="area_avalieited-box_stars">
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
              <div className="form-box_btnEnd">
                <button className="box_btnEnd-item_cancel btn_modal" onClick={this.openModal}>cancelar</button>
                <button className="box_btnEnd-item_send btn_modal">feito</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )

    render(){
        return(
            <body>
                <header>
                    <div className="header-box_logo">
                        <p className="box_logo-item" >ToDoFlix</p>
                    </div>
                    <nav className="header-navegation">
                        <ul className="navegation-box_list">
                            <li className="box_list-box_link">
                                <a className="box_list-item" onClick={this.openMenu} href="#">categorias</a>
                                <ul className="box_link-box_subList">
                                    {this.state.menuOpen && this.state.menuItens.map((item, index) => {
                                        return(
                                            <li className="box_subList-item_sublist">
                                                <a className="item_sublist-link" href="#">{item}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className="box_list-box_link">
                                <a className="box_link-linkitem" onClick={this.openModal} href="#">adicionar filme</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="main_content">
                    <section className="main_content-section_home"></section>
                    <section className="main_content-movies">
                        <div className="movies-box_movieList">
                            <p className="box_movieList-title">{this.state.titleLists}</p>
                            <div className="box_movieList-container">
                                {this.state.movies.map((item, index) => {
                                    return(
                                        <div className="container-box_itemList" key={index}>
                                            <div className="box_itemList-box_img">
                                                <p className="box_img-note_movie">{item.note}</p>
                                                <img className="imgMovie" src={item.img} ></img>
                                            </div>
                                            <p className="box_itemList-link_loadMovie">quero ver</p>
                                            <div className="box_itemList-box_infoMovie">
                                                <h3 className="box_infoMovie-name">{item.name}</h3>
                                                <p className="box_infoMovie-description">{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/jKCj3XuPG8M" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe> */}
                    </section>
                </main>
                {this.state.openModal && this.modal()}
            </body>
        )
    }
}

export default HomePage;