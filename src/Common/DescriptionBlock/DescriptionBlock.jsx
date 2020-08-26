import React from 'react';
import styles from './DescriptionBlock.module.css';

class DescriptionBlock extends React.Component {


    render = () => {

        return (

            <div className={styles.descriptionBlock}>

                <img className={styles.image} src={this.props.arrayBird.image} />



                <div className={styles.spanName}> {this.props.arrayBird.name} </div>
                <div className={styles.spanSpecies}> {this.props.arrayBird.species} </div>

                <div className={styles.myPlayer}>

                    <audio controls="controls" className={styles.player}
                        src={this.props.audioBird}>
                    </audio>



                </div>

                <div className={styles.description}> {this.props.arrayBird.description} </div>

             </div>

        );
    }
}

export default DescriptionBlock;

















