import React from 'react';
//import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
/*import Form from './Form/Form';*/

//関数コンポーネント
/*
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button title="ボタン１" />
      <Button>ボタン2</Button>
      <Button>ボタン3</Button>
    </div>
  );
}*/

//カウンター（数を数える）機能
function App() {
  return (
    <div>
      <h1>カウンター</h1>
      <Counter />
    </div>
  );
}

/*リスト表示
function App() {
  const comments = [
    { id: 1, text: "morning" },
    { id: 2, text: "afternoon" },
    { id: 3, text: "night" }
  ];
  const commentItems = comments.map((comments) => {
    return <li key={comments.id}>{comments.text}</li>
  });
  return (
    <div>
      <h1>リスト表示</h1>
      <ul>{commentItems}</ul>
    </div>
  );
}
*/
/*Formのコンポーネント
function App() {
  return (
    <div>
      <h1>フォーム入力</h1>
      <Form />
    </div>
  );
}
*/
/*function App() {
  const onClickButton = (value) => {
    console.log('value :', value);
  };
  return (
    <div>
      <h1>コールバック</h1>
      <span className="k">
        <Button onClickHandler={onClickButton}>
          ボタン
      </Button>
      </span>
    </div>
  );
}*/


export default App;