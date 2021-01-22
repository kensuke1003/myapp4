import React from 'react';　　　//JSXを実装する準備
import './Button.css';

//クラスコンポーネント

/*class Button extends React.Component {
    render() {
        return (
            <span className="Button-container">
                {this.props.title}
                {this.props.children}
            </span>
        );
    }
}*/

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        //何も値が渡らなかった時、エラーが起きるのでifで条件を定義
        if (this.props.onClickHandler) {
            this.props.onClickHandler('Buttonコンポーネントからの値');
        }
    }

    render() {
        return (
            <div className="Button" onClick={this.onClickHandler}>
                {this.props.children}
            </div>
        );
    }
}

/*renderメソッド内でonClickが実行される　ボタンが押されたとき
         ↓
  ButtonコンポーネントのonClickHandlerが実行されて
          ↓
  App.jsのonClickHandler={onClickButton}が実行されて
          ↓
  それはつまり,onClickButtonが実行される

  OnClickButtonの引数の(value)にthis.props.onClickHandlerの('Buttonコンポーネントからの値');が渡ってくる
  console.logで出力される

  */

export default Button;


//関数コンポーネントのreturn＝クラスコンポーネントのrender
