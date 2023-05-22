import {ReactNode, createContext,useState} from 'react';

const SearchWordContext = createContext({
    searchWord: '',
    setsearchWord:(searchWord:string)=>{}
  } );
interface Props{
    children:JSX.Element | JSX.Element[]
}


export  const SearchWordProvider =({children}:Props)=>{
   const [searchWord, setsearchWord] = useState('')

   return( 
   <SearchWordContext.Provider value={{ searchWord, setsearchWord }}>
        {children}
   </SearchWordContext.Provider>
    )
}
export default SearchWordContext;

