import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';
import './App.css';


const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]'
const DEFAULT_ART_ID = 12720;

function App() {
  let [artId, setArtId] = useState(DEFAULT_ART_ID);
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to my Art Gallery'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))

    console.log(data);


  }, [artId]);

  return <>
   <div>
   <Gallery 
    primaryImage={data.primaryImage} 
    title={data.title}
    artistDisplayName={data.artistDisplayName}
  />
   </div>

  <ButtonBar
    setArtId={setArtId}
    artId={artId}

  />

  </>;
}

export default App;
