import React from 'react';
import styles from './AnswerBlock.module.css';
class AnswerBlock extends React.Component {


    makeAnswer=(e)=> {
        this.props.makeAnswer(e.currentTarget.id)
           // function (id)
         };



    render = () => {


              let bird=this.props.ArrayBird.map ((element, index) =>
                    <div>

                     <label>
                        <input
                             type={"radio"}
                             checked={element.checked}
                             id={index}
                             onChange={this.makeAnswer}
                             // onChange={()=>this.makeAnswer(element.id)}
                         />
                         <span className={ element.checked ?
                             (index==this.props.randomQuestionNumber ? styles.positive : styles.negative)
                             : styles.passive }>

                             {element.name} </span>
                     </label>
                    </div>
                                        )

        return (
            <div className={styles.answer}>
                {bird}
             </div>

        );
    }
}

export default AnswerBlock;

















