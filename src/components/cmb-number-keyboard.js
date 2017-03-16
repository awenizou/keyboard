import './style.scss';
import React from 'react';  
import classNames from 'classnames';
import Icon_content from './icon-content.js';

let delUrl = require('./img/1x/cmb_key_icon_del.png');
let delTempl = '<img src="'+delUrl+'" />';
let result = [];

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    keyMapList:React.PropTypes.array,
    onItemClick:React.PropTypes.func
  };

  static defaultProps = {
    onItemClick:function(){},
    keyMapList:[
      {
        content:'1',
        action:'value'
      },
      {
        content:'2',
        action:'value'
      },
      {
        content:'3',
        action:'value'
      },
      {
        content:'4',
        action:'value'
      },
      {
        content:'5',
        action:'value'
      },
      {
        content:'6',
        action:'value'
      },
      {
        content:'7',
        action:'value'
      },
      {
        content:'8',
        action:'value'
      },
      {
        content:'9',
        action:'value'
      },
      {
        content:'ABC',
        action:'value',
        theme:'gray'
      },
      {
        content:'0',
        action:'value'
      },
      {
        content: delTempl,
        action:'delete',
        theme:'gray'
      }
    ]
  };

  constructor(props){
  	super(props);
    this.result = [];
  }

  _onItemClick(inItem){
    inItem.action == 'delete' ? this.result.pop() : this.result.push(inItem);
    this.props.onItemClick({item:inItem, data:this.result});
  }

  render(){

    return (
      <div className={classNames('cmb-number-keyboard',this.props.cssClass)}>
        <div className="bd">
          <div className="fir_col">
              <div className="title">
                  <Icon_content content="招商银行安全输入" />
              </div>
              <div className="btn_done">{this.props.doneName || "完 成"}</div>
          </div>

          <div className="wrapper">
            {this.props.keyMapList.map(function(item,index){
              return <button onClick={this._onItemClick.bind(this,item)} data-theme={item.theme ? item.theme : null} className="cell" key={index} dangerouslySetInnerHTML={{__html: item.content}}></button>
            }.bind(this))}
          </div>
          
        </div>
      </div>
    );
  }
}
