// Создайте класс Person со слеюующими свойствами:
//     *  Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”), lastName(значение
// по умолчанию – “Doe”), age(по умолчанию, если свойство не указано, то 0)  и gender(по умолчанию – “Male”).
// Значения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.
// *  Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
// *  Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.

    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
