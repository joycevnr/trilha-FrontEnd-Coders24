import React from 'react'
//na importação do componente vai está entre chaves, mas não posso colocar outro nome como no default
//import AssimQueAcaba from '../../assets/images/AssimQueAcaba.jpg'
import './styles.css'
///cria no  this um obj com todas as propriedades que passei 
/**
 * this.props = {
 * title: "Exemplo"
 * provider: "NASA"
 * }
 */
export class Article extends React.Component{
    render() {
        return(
            <article id="article">
                <img src={this.props.thumbnall} alt={this.props.title}/>
                <div classname="article-infos">
                    <h2>
                    {this.props.title}
                    </h2>
                    <h3>{this.props.provider}</h3>
                    <p>
                    {this.props.description} 
                    </p>
                </div>
            </article>
        )
    }

}

