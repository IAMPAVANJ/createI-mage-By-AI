import { useState } from 'react'
import Header from './components/headerBox';
import ImageResult from './components/imageResults';
function App() {
  const [listImages,setListImages] = useState([]);
  const [isLoading, setIsLoading]  = useState(false);

  console.log(listImages.data)
  
  return (
    <div>
      <Header setListImages={setListImages} setIsLoading={setIsLoading}/>
      <ImageResult listImages={listImages} isLoading={isLoading}/>
    </div>
  );
}

export default App;
