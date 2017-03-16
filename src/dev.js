import './dev.scss';
import ReactNumberKeyboard from './components/cmb-number-keyboard';
import InputText from './components/InputText';
import classNames from 'classnames';

class App extends React.Component {
    constructor(props) {
        super(props);
        this._list = [];
        this.state = { result: [] };
    }
    keyItemClick({ item, data }) {
        this._list = data;
        this.showSum();
    }

    showSum() {
        var sum = '';
        this._list.forEach(function(item) {
            sum += item.content;
        });
        this.setState({ result: sum });
        console.log(sum);
    }



    render() {
        return ( 
          <div>
            <div style = {inputDiv} >
                <InputText styles = {inputText }
                  result = { this.state.result }
                  placeholder = "请输入密码" / >
            </div>

            <ReactNumberKeyboard onItemClick = { this.keyItemClick.bind(this)}/> 
          </div>
        );
    }
}


let inputDiv = {
    display: 'flex',
    flexirection: 'row',
    justifyContent: 'center',
};

var inputText = {
    margin: '100px',
    padding: '3px 5px',
    height: '30px',
    wigth: '170px',
    border: '1px solid gray',
    borderRadius: '8px',
};

ReactDOM.render( <App/ > ,
    document.getElementById('app')
);
