import React from 'react';
import style from "./About.module.css";
import timeline from './timeline.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div className={style.about} id="About">
            <h1>Sobre mim</h1>
            <div className={style.testDiv}>
                <div className={style.testDiv2}>
                    <Container>
                        <Row>
                            <Col><h1 className={style.ano1}>2017</h1></Col>
                            <Col><h1 className={style.ano2}>2021</h1></Col>
                            <Col><h1 className={style.ano3}>2022</h1></Col>
                            <Col><h1 className={style.ano4}>2024</h1></Col>
                        </Row>
                    </Container>
                </div>

                <img src={timeline} className={style.testImage} alt="Timeline" />

                <div className={style.testDiv3} style={{ position: 'relative' }}>
    <div className={`${style.textBlock} ${style.text1}`}>
        <p>
           
        Iniciei minha jornada acadêmica na UFPEL em Engenharia de Controle e Automação.
         Em 2020, devido à pandemia, pausei os estudos e realizei uma campanha independente,
          produzindo aproximadamente 1000 protetores faciais com minha impressora 3D. Retornei em 2023,
          atualmente sou bolsista do CNPQ e continuo me dedicando aos estudos.
           </p>
    </div>
    <div className={`${style.textBlock} ${style.text2}`}>
        <p>
     Iniciei um curso de Análise e Desenvolvimento de Sistemas na Estácio,
         enquanto conquistava uma vaga de estágio na T.I da previdência da prefeitura de Macapá. Lá, não só aprimorei habilidades 
         em manutenção de impressoras, como também liderei o design da nova identidade visual do órgão, 
         incluindo a criação das logos do censo digital e da própria instituição.
        </p>
    </div>
    <div className={`${style.textBlock} ${style.text3}`}>
        <p>
        Ascendi para a gerência de T.I no Instituto de Neurologia e Cardiologia do Amapá,
        após ser contratado como auxiliar no final de 2021. Demonstrei habilidades técnicas e interpessoais
        ao gerenciar o setor de tecnologia, realizando atendimento, suporte técnico e gerenciamento de estoque,
        além de recrutamento e organização da equipe.
        </p>
    </div>
    <div className={`${style.textBlock} ${style.text4}`}>
        <p>
        Estou concluindo meu curso de Desenvolvedor Full Stack pela Escola DNC, que iniciei no final de 2023.
         Foi neste mesmo ano, retornei para Pelotas para finalizar meu curso de Engenharia de Controle e Automação.
         </p>
    </div>
</div>






            </div>
            
        </div>
    );
}

export default About;
