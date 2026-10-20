// ==========================================
// index.js - Qual é a boa?
// ==========================================

// ETAPA 1 - TRAZER A FERRAMENTAS (import)
import {useState, useEffect } from "react";
// View -> uma caixa, serve para agrupar e organizar as coisas
// Text -> Todo texto precisa estar dentro de um <text>
// TextInput -> um campo para digitar
// pressable -> qualquer coisa que dá pra tocar: nosso botão
// StyleSheet -> ferramenta para escrever os estilos    
import {View, Text, TextInput, Pressable, ScrollView, styleSheet } from
"react-native";
import { cores } from "../data/tema";
import { Accelerometer} from "expo-sensors";
import * as Haptics from "expo-haptics";

const LIMITE_DE_FORCA = 1.8;
const TEMPO_ENTRE_SORTEIOS=1000;


export default function Home (){
    //começa com 3 opções para já ter o que sortear
    const [opcoes, setOpcoes] = useState(["pizza", "hamburguer", "sushi"]);

    //oç~]ao sorteada. começa vazia pois ainda não foi sorteado
    const [resultado, setResultado] = useState("");
    const [textoDigitado, setTextoDigitado] = userState("");

    //fumção sortear
    function sortear(){
        if (opcoes.length < 2){
            setResultado ("adcione pelo menos 2 opções!");
            return
        }
        // Como sortear uma posição da lista:
        // 1) Math.random() - número aleatórios entre 0 e 1
        // 2) x opcoes.length - multiplica pelo tamanho da lista
        // 3) Math.floor() - arredonda para Baixo
    const posicao = Math.floor(Math.random() * opcoes.length);

       //opcoes[2] pega o item que está na posição 2 da lista
        const opcaoSorteada = opcoes[posicao];
        setResultado(opcaoSorteada) //aqui ele guarda no useState a tela atualizada!

        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

    }

    //função de add opção

    function adicionar(){
        const nome = textoDigitado.trim();

        if (nome === ""){
            return;
        }

        const listaNova=[...opcoes, nome];
        setOpcoes(listaNova)
        setTextoDigitado("")
    }
    //função de remover uma opção

    function remover (nomeParaRemover){
        const listaNova = opcoes. filter((opcao) => opcao !== nomeParaRemover);
        setOpcoes(listaNova);
    }


// SORTEAR AO CHACOALHAR
// Nós vamos usar aqui o useEffect, e o sensor
// useEffect = "faça isto DEPOIS que a tela aparecer"
// usamos para LIGAR o sensor, e para DELIGAR quando a tela sair
useEffect(() => {
    //aqui pede ao sensor para medir a cada 100 milisegundos (10x por segundo)
    Accelerometer.setUpdateInterval(100);

    // Guarda a hora do ultimo sorteio, para não sortear 10 vezes
    // Começa com zero (nunca sorteou)
    //let (e não const) porque este valor vai mudar
    let horaDoUltimoSorteio = 0;

    const sensor = Accelerometer.addListener((dados) => {
        const forca = Math.hypot(dados.x, dados.y, dados.z);

        const agora=Date.now();
        const tempoPassado = agora - horaDoUltimoSorteio;

        if (forca > LIMITE_DE_FORCA && tempoPassado > TEMPO_ENTRE_SORTEIOS){
            horaDoUltimoSorteio = agora;
            sortear();
        }

    })
    return() => sensor.remove();
    }, [opcoes]);

    



}