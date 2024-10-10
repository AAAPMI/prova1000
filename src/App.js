import { Provider as PaperProvider, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const nom = (estil, textAMostrar) => {
  return (
    <Text style={estil} variant='displayLarge'>{textAMostrar}</Text>
  );
}

const dades = (inputs) => {
  return inputs.map((value, index) => (
    <TextInput
      key={index}
      label={value}
      placeholder={value}
    />
  ));
}

const App = () => {
  const inputs = ['Email', 'Nom']

  return (
    <PaperProvider>
      {nom(styles.text, "Rubén")}
      {dades(inputs)}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontStyle: 'italic'
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;