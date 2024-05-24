import React from 'react';
import styles from './Card.module.css';
import ButtonB from './ButtonB';

function Card({ img, title, description, repo }) {
    return (
        <div className={styles.card}>
            <section>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p className={styles['wide-text']} dangerouslySetInnerHTML={{ __html: description }} />
                <ButtonB text='Clique aqui' link={repo} />
            </section>
        </div>
    );
}

export default Card;
