import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typing from 'react-typing-animation';
import {Zoom} from "react-reveal";

export default function Card({Title, Content, ButtonText, LinkTo, StyleNumb}) {
    function getCss(int){
        //1 : CardOR
        //2 : BR
        //3 : GB
        if(int == 1){
            return "cardOR"
        }else if(int == 2){
            return "cardBR"
        }else return "cardGB"
    }
    return(
        <div class={getCss(StyleNumb)}>
            <span></span>
            <div className="content">
                <h2>{Title}</h2>
                <p>{Content}</p>
                <a href={LinkTo}>{ButtonText}</a>
                {/* <Button buttonText={ButtonText} Link={LinkTo}></Button> */}
            </div>
        </div>
    )
}
