import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const estil = 'florida';
const isAdmin = true;

const nom = (estil, textAMostrar) => {
  return (
    <Text style={estil} variant='displayLarge'>{textAMostrar}</Text>
  );
}

const dades = (inputs) => {
  const estilPare = () => {
    return estil === 'florida' ? styles.florida : styles.upv;
  }
  
  const colorInput = () => {
    return estil === 'florida' ? 'white' : 'orange';
  }

  return (
    <View style={estilPare()}>
      {inputs.map((value, index) => (
        <TextInput
          key={index}
          label={value}
          placeholder={value}
          textColor={colorInput()}
        />
      ))}
    </View>
  )
}

const botoSiAdmin = () => {
  if(!isAdmin)
    return;
  
  return (
    <Button
      style={{borderRadius: 0}}
      icon='format-list-bulleted'
      textColor='white'
      buttonColor='blue'
    >
      INFORMES
    </Button>
  );
}

const App = () => {
  const inputs = ['Email', 'Nom'];

  return (
    <PaperProvider>
      {nom(styles.text, "Rubén")}
      {dades(inputs)}
      {botoSiAdmin()}
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