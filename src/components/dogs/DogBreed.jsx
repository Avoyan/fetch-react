import { useCallback } from "react";
import { useEffect, useState } from "react";

function DogBreed () {
  const [dogBreed, setDogBreed] = useState("");
  const [dogBreedImgSrc, setDogBreedImgSrc] = useState("");

  useEffect(() => {
    if (dogBreed){
      fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(res => res.json())
        .then(data => setDogBreedImgSrc(data.message))
    } else {
      setDogBreedImgSrc("")
    }
  }, [dogBreed]);

  const handleDogBreedChange = useCallback((e) => 
    setDogBreed(e.target.value)
  );

  return (
    <div>
      <div>
        <select value={dogBreed} onChange={handleDogBreedChange} name="breed" id="breed">
          <option value="">-- Select a breed --</option>
          <option value="akita">Akita</option>
          <option value="beagle">Beagle</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="germanshepherd">German Shepherd</option>
          <option value="husky">Husky</option>
          <option value="labrador">Labrador</option>
          <option value="pug">Pug</option>
          <option value="retriever/golden">Golden Retriever</option>
          <option value="spaniel/cocker">Cocker Spaniel</option>
        </select>
      </div>
      {dogBreedImgSrc && <img className="dog-breed-img" src={dogBreedImgSrc} alt={dogBreed} />}
    </div>
  );
}

export default DogBreed;