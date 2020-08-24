import React from 'react';
import anonimous from '../Question/img/anonimous.jpg'
import styles from './QuestionBlock.module.css';


class QuestionBlock extends React.Component {


    render = () => {

        let answerStatus =this.props.answerStatus


              return (

            <div className={styles.question}>

                {answerStatus ?
                    <div><img src={this.props.imgBird} className={styles.bird}/></div>
                    :
                    <div><img src={anonimous} className={styles.bird}/></div>}
                <div>
                    {answerStatus ? <div className={styles.enigma}>{this.props.nameBird}</div>:<div className={styles.enigma}>*******</div>}
                        <hr/>

                    <audio controls="controls" className={styles.player}>
                        <source src={this.props.audioBird} />
                    </audio>

                </div>

             </div>

        );
    }
}

export default QuestionBlock;

















