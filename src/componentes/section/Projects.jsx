import React, { Component } from 'react';
import ButtonB from './ButtonB';
import styles from './Projects.module.css';
import Card from './Card';
import img1 from './img1.svg';
import img2 from './img2.svg'
import img3 from './img3.svg';
import img4 from './img4.svg';

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <div className={styles['card-container']}>
                
                
            <Card 
                    img={img3 }
                    title="PROJETO 1"
                    description={`Este foi meu primeiro projeto, uma landig page<br/>
                                desenvolvida em HTML, CSS e JavaScript para<br>
                                uma empresa fictícia de arquitetura. A página<br/>
                                apresenta um design limpo e profissional.<br/>
                            `}
                    repo="https://emanoel-desafio-1-dnc.netlify.app"
                />
                
                
                
                
                
                
                <Card 
                    img={img1}
                    title="PROJETO 2"
                    description={`Desenvolvi essa landing page para Escola DNC<br /> 
                                    em HTML, CSS e JavaScript. Capture dados com<br/>
                                   nossa aba para e-mail e número, assista a vídeo<br/>
                                depoimento e experimente nosso carrosel com<br/>
                                efeitos dinâmicos em JavaScript.<br/>
                                    `}
                    repo="https://emanoel-landing-pag-dnc.netlify.app/"
                />
                <Card 
                    img={img2}
                    title="PROJETO 3"
                    description={`Desenvolvi este projeto em HTML , CSS, JavaScript<br/>
                                    e Bootstrap. Ele captura, e-mail, CEP e a previsão<br/>
                                    para a localização especificada. O Bootstrrap foi<br/>
                                    utilizado para garantir um design moderno.
                                    `}
                    repo="https://desafio-2-dnd.netlify.app/"
                />
                
                <Card 
                    img={img4}
                    title="PROJETO 4"
                    description={`Desenvolvi um portfólio utilizando HTML, CSS,<br/>
                    JavaScript e React. Com um design futurista e<br/>
                    efeitos visuais. A página destaca meu trabalho de<br/>
                    forma moderna e profissional, oferecendo uma<br/>
                    exoeriência de usuário diferenciada.`}
                    repo="https://portfolio-emanoel-angelo.vercel.app/"
                />
            </div>
        </div>
    );
}

export default Projects;
