import React from 'react';
import logo from '../Header/img/logo.jpg'
import styles from './Header.module.css';

class Header extends React.Component {


    levelQuestion = [
        { id:1, name: "Разминка"},
        { id:2, name: "Воробьиные"},
        { id:3, name: "Певчие птицы"},
        { id:4, name: "Лесные птицы"},
        { id:5, name: "Хищные птицы"},
        { id:6, name: "Морские птицы"},
];

    render = () => {

        let  arrayLevelQuestion = this.levelQuestion.map((mapin, ind) =>
            <li className={ ind == this.props.numberOfLevel ? styles.active : styles.passive}> {mapin.name} </li>
        );


        return (

            <div className={styles.header}>

                <img src={logo} className={styles.logo}/>
                <span className={styles.score}>  Score={this.props.score} </span>

                        <ul className={styles.questionList}>
                            {arrayLevelQuestion}
                        </ul>

                 </div>

        );
    }
}

export default Header;

















