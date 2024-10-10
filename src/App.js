import { Provider as PaperProvider, Text} from 'react-native-paper';

const nom = (textAMostrar) => {
  return <Text variant='displayLarge'>{textAMostrar}</Text>
}

const App = () => {
  return (
    <PaperProvider>
      {nom("Rubén")}
    </PaperProvider>
  );
}

export default App;