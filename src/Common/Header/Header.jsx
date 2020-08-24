import React from 'react';
import logo from '../Header/img/logo.jpg'
import styles from './Header.module.css';

class Header extends React.Component {


    state = {
        filterCss0: "active",
        filterCss1: "passive",
        filterCss2: "passive",
        filterCss3: "passive",
        filterCss4: "passive",
        filterCss5: "passive",
    };


     checkIteration=0;
    render = () => {

        if (this.props.numberOfLevel==1 && this.checkIteration==0) {
            this.setState({filterCss1: "active", filterCss0:"passive"})
            this.checkIteration=this.checkIteration+1
        }
        else if (this.props.numberOfLevel==2 && this.checkIteration==1) {
            this.setState({filterCss2: "active", filterCss1:"passive"})
            this.checkIteration=this.checkIteration+1
        }
        else if (this.props.numberOfLevel==3 && this.checkIteration==2) {
            this.setState({filterCss3: "active", filterCss2:"passive"})
            this.checkIteration=this.checkIteration+1
        }
        else if (this.props.numberOfLevel==4 && this.checkIteration==3) {
            this.setState({filterCss4: "active", filterCss3:"passive"})
            this.checkIteration=this.checkIteration+1
        }
        else if (this.props.numberOfLevel==5 && this.checkIteration==4) {
            this.setState({filterCss5: "active", filterCss4:"passive"})
            this.checkIteration=this.checkIteration+1
        }


        return (

            <div className={styles.header}>

                <img src={logo} className={styles.logo}/>
                <span className={styles.score}>  Score={this.props.score} </span>

                        <ul className={styles.questionList}>
                            <li className={styles[this.state.filterCss0] }>Разминка</li>
                            <li className={styles[this.state.filterCss1] }>Воробьиные</li>
                            <li className={styles[this.state.filterCss2] }>Певчие птицы</li>
                            <li className={styles[this.state.filterCss3] }>Лесные птицы</li>
                            <li className={styles[this.state.filterCss4] }>Хищные птицы</li>
                            <li className={styles[this.state.filterCss5] }>Морские птицы</li>

                        </ul>

                 </div>

        );
    }
}

export default Header;

















