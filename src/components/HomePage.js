import React from 'react';
import '../App.css';

class HomePage extends React.Component {

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
                                <a className="box_list-item" href="#">categorias</a>
                                <ul className="box_link-box_subList">
                                    <li className="box_subList-item_sublist">
                                        <a className="item_sublist-link" href="#">Quero ver</a>
                                    </li>
                                    <li className="box_subList-item_sublist">
                                        <a className="item_sublist-link" href="#">Já vistos</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="box_list-box_link">
                                <a className="box_link-linkitem" href="#">adicionar filme</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="">
                    <section className=""></section>
                    <section className=""></section>
                </main>
            </body>
        )
    }
}

export default HomePage;