import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Rules() {
  const observations: string[] = [
    "Você terá apenas 6 tentativas, que são representadas pelas partes do corpo do boneco de palito;",
    "Você saberá que perdeu quando o boneco de palito aparecer por completo;",
    "Você pode desistir clicando no botão `Desistir`, assim, a palavra irá aparecer na sua tela e um novo jogo terá que ser iniciado",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containCollumns}>
        <Text style={styles.title}>Como jogar?</Text>
        <Text style={styles.paragraph}>
          O jogo da forca é bem simples, você irá clicar no botão para começar o
          jogo, uma palavra será gerada e você terá que adivinhar qual é a
          palavra, clicando nas letras do alfabeto. A cada letra errada, uma
          parte do corpo do boneco de palito irá aparecer, você terá 6 tentativas
          para acertar a palavra.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Observações</Text>
        {observations.map((obs, index) => (
          <Text key={index} style={styles.paragraph}>
            • {obs}
          </Text>
        ))}
      </View>
    </View>
  );
}
