import { Provider as PaperProvider, Text} from 'react-native-paper';

const nom = () => {
  return (<Text variant='displayLarge'>Rubén</Text>)
}

const App = () => {
  return (
    <PaperProvider>
      {nom()}
    </PaperProvider>
  );
}

export default App;