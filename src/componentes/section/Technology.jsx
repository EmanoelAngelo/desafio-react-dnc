import styles from './Technology.module.css'
import ButtonA from "./ButtonA";
import ButtonB from "./ButtonB";
import {useEffect, useState} from 'react'

function Technology (){
   const [text, setText] = useState('');
   const toRotate = ['Emanoel Angelo!','Desenvolvedor Front End', 'Product Manager'];
   const [loop, setLoop] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false); 
   const period = 100;
   const [delta, setDelta] = useState(100)

    useEffect( ()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

        }
    
    return (
        <div className={styles.technology} id='Technology'>
            
            <h1>Olá, eu sou {text} </h1>
            
            <h5>
            Como apaixonado por tecnologia e futuro engenheiro de controle e automação,<br/>
             busco soluções inovadoras e eficientes. Domino HTML, CSS, JavaScript, React e C++,<br/>
              e também tenho experiência em impressão 3D. Estou concluindo meu curso de desenvolvedor<br/>
               Full Stack pela DNC e atualmente também cursando Engenharia de Controle e Automação na UFPEL,<br/>
                sempre em busca de novos desafios para aprimorar minhas habilidades.<br/>
            </h5>
            <ButtonA link='https://github.com/EmanoelAngelo' text='Saber mais!' />
           
        </div>
    )
}

export default Technology;