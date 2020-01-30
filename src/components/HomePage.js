import React from 'react';
import '../App.css';

import ImgBadboys from "../img/badboysList.jpeg"
import ImgDeadpoll from "../img/deadpollList.jpg"

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            menuOpen: false,
            menuItens: [ 'Quero ver', 'Já vistos'],
            titleLists: 'Minha lista:',
            movies: [
                {
                    name: "Bad boys for live",
                    note: "5.0",
                    description: "O novo filme da franquia mostrará a polícia de Miami e sua" +
                    "equipe de elite AMMO tentando derrubar Armando Armas (Jacob Scipio)," +
                    "chefe de um cartel de drogas. Armando é um assassino de sangue frio com uma" + 
                    "natureza cruel e provocadora. Ele está comprometido com o trabalho do cartel," +
                    "sendo enviado por sua mãe para matar Mike (Will Smith). Paola Nuñez assumirá" +
                    "o papel de Rite, a psicóloga criminal dura e engraçada que é recém-nomeada "+
                    "chefe da AMMO e ex-namorada de Mike.",
                    img: ImgBadboys
                },
                {
                    name: "Deadpoll 2",
                    note: "5.0",
                    description: "O supersoldado Cable vem do futuro com a missão de assassinar o" +
                    "jovem mutante Russel e o mercenário Deadpool precisa aprender o" +
                    "que é ser herói de verdade para salvá-lo. Para isso, ele recruta seu" + 
                    "velho amigo Colossus e forma o novo grupo X-Force, sempre com" +
                    "o apoio do fiel escudeiro Dopinder." ,
                    img: ImgDeadpoll
                }
            ]
        }
    }

    openMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

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
                                <a className="box_link-linkitem" href="#">adicionar filme</a>
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
                                    // console.log(item.img)
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
            </body>
        )
    }
}

export default HomePage;