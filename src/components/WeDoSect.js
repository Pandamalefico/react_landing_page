import React, { Component } from "react";
import Card from './Card';

export default class WeDoSect extends Component {
  render(){
    const items = [
      {
        img: 'boat',
        title: 'Web Design & Development',
        text: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. F'shtunggli shtunggli goka naflnog nog hupadgh hafh'drn, ebunmayar shagg zhro Yoggoth 'ai ron ilyaa kadishtu shogg r'luh ah, y'hah ron ph'Dagon Cthulhu hrii r'luhagl shugg zhro lloig uh'eor wgah'n."
      },
      {
        img: 'brand',
        title: 'Brand Development',
        text: "Goka R'lyeh nog f'Yoggoth lw'nafh sll'ha h'zhro zhro nggoka, nnnhlirgh ftaghu grah'noth nghlirgh Chaugnar Faugn 'bthnk f'mg mg goka, hrii hupadgh 'ai hupadgh throd hlirgh bug. Phlegethog shagg hupadgh fhtagn li'hee nglui, f'bug nog csyha'h ep."
      },
      {
        img: 'marketing',
        title: 'Managed Services & Marketing',
        text: "Phlegeth nw k'yarnak kadishtu sll'ha naflwgah'n nilgh'ri llll, cChaugnar Faugn goka nggeb chtenff geb phlegeth shagg nilgh'rinyth, Shub-Niggurath hupadgh ph'uh'e throd naflfm'latgh shoggnyth. Nanglui cep cgof'nn ch' hai ph'r'luh geb r'luh, uaaah ee gotha hafh'drn tharanaknyth."
      }
    ];
    const displayCards = items.map((item, i)=>{
      return <Card img={item.img} title={item.title} text={item.text} key={i}/>
    });
    return (
      <div id={this.props.id}>
        {displayCards}
      </div>
    );
  }
}