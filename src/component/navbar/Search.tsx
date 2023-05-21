import React,{useState,useEffect,useRef} from 'react'
import {useLocation, useNavigate } from "react-router-dom"
import {RiSearchLine} from 'react-icons/ri'

import './Search.scss'
import logo from '../../assets/Logo_ML.png'
import { Helmet } from 'react-helmet'

interface Props {}

const Search : React.FC<Props> = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [searchWord, setsearchWord] = useState<string>('')
  const inputName = useRef<HTMLInputElement>(null);
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setsearchWord(e.target.value)
  }
  const handleSearch=(e:React.MouseEvent<HTMLSpanElement, MouseEvent> |  React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    navigation({ pathname: "/items", search: `?search=${searchWord}` });
  }

useEffect(() => {
  inputName.current?.focus()
  if (searchWord !== '' && location.pathname.includes('/items/')){
    setsearchWord('');
  }

}, [location.pathname])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search | Mercado Libre</title>
        <meta name="description" content="productos"></meta>
        <meta name="keywprds" content="productos,precio,busquedas,envios"></meta>
        <link rel="canonical" href="https://mercadolibre.com.ar/" />
      </Helmet>
    <section className="header">
      <div className='container'>
        <div className='navbar'>
        <img src={logo} alt="MercadoLibre"/>
        <div className="navbar-search">
        <form onSubmit={(e)=>handleSearch(e)}> 
          <input type="text" value={searchWord} placeholder="Nunca dejes de buscar" data-testid="inputsearch" ref={inputName} onChange={(e)=>handleChange(e)} />
          <button type="submit" className='lupa' data-testid="lupa"><RiSearchLine size={20} style={{color:'gray'}}/></button>
       </form>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Search;
