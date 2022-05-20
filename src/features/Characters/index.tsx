import { useEffect, useState } from "react";

type Istatus = "alive" | "dead" | "unknown"

interface IProps {
    status: Istatus
}

export interface ICharacter {
    id: number;
    name: string
}

export function showCount(characters: ICharacter[]){
    return characters.length
}

const Character = ({status}: IProps) => {
    const [characters, setCharacters] = useState<ICharacter[]>([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?name=rick&status=${status}`)
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [status])
    console.log(characters);
  return (
    <div>
        {characters.length && <h1>{showCount(characters)}</h1>}
    </div>
  )
      
    
  
}

export default Character