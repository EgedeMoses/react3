import {useState, useEffect} from 'react';
import './App.css'

const useFilterName = (names, name) => {
  const [filteredName, setFilteredName] = useState ("");
  
  useEffect (() => {
    const filtered = names.filter(n => n === name);
    if(filtered.length > 0){
      setFilteredName(filtered[0]);
      }else {
        setFilteredName("");
      }
  }, [names, name]);

  return filteredName
};

export default userFilterName;








