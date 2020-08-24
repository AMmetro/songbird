import React from 'react';
import styles from './DescriptionBlock.module.css';


class DescriptionBlock extends React.Component {


    render = () => {

        return (


            <div className={styles.emptyDescription}>

                Послушайте плеер.
                <br/>
                Выберите птицу из списка

             </div>

        );
    }
}

export default DescriptionBlock;

















