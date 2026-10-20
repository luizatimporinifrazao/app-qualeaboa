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
    const [opcoes, set0pcoes] = useState(["pizza", "hamburguer", "sushi"]);

    //oç~]ao sorteada. começa vazia pois ainda não foi sorteado
    const [resultado, setResultado] = useState("");
    const [textoDigitado, setTextoDigitado] = userState("");

    //fumção sortear

}