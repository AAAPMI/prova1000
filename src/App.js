import { Provider as PaperProvider, Text, TextInput} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const nom = (estil, textAMostrar) => {
  return (
    <Text style={estil} variant='displayLarge'>{textAMostrar}</Text>
  );
}

const dades = () => {
  return (
    <TextInput/>
  );
}

const App = () => {
  return (
    <PaperProvider>
      {nom(styles.text, "Rubén")}
      {dades()}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontStyle: 'italic'
  }
});

export default App;