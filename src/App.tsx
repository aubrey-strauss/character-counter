import { TextInput } from './components/TextInput/TextInput';

function App() {
  return (
    <div className="p-8">
      <TextInput onTextChange={(text) => console.log(text)} />
    </div>
  );
}

export default App;