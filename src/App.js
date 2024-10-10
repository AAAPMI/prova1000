import { Provider as PaperProvider, Text} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const nom = (estil, textAMostrar) => {
  return (<Text style={estil} variant='displayLarge'>{textAMostrar}</Text>);
}

const App = () => {
  return (
    <PaperProvider>
      {nom(styles.text, "Rubén")}
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