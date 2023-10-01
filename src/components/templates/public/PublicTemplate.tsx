import { useEffect, useState } from "react"
import { language } from "../../../translate/language"
import Switch from "./components/Switch"
import Header from "./components/Header"
import BannerHero from "../../organisms/BannerHero"
import Under from "../../organisms/Under"
import Company from "../../organisms/Company"
import Banner from "../../organisms/Banner"
// import Tequilas from "../../organisms/Tequilas"
// import Contact from "../../organisms/Contact"
// import Retailers from "../../organisms/Retailers"
// import Footer from "./components/Footer"



const LangStore:any = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'en'

function PublicTemplate() {
  const [lang, setLang] = useState<string>(LangStore)
  const [data,setData] = useState<any>({})
  useEffect(() => {
    if(lang === 'en'){
      setData(language.en)
      window.localStorage.setItem('lang', 'en')
    }else{
      setData(language.es)
      window.localStorage.setItem('lang', 'es')

    }
    document.documentElement.lang=lang
  }, [lang])
  const langChange = () => {
    if(lang === 'en'){
      setLang('es')
    }else{
      setLang('en')

    }
  }


  return (
    <>
      <Switch lang={lang} langFn={langChange} />
      <Header data={data.menu}/>
      <main>
        <BannerHero/>
        <Under data={data.under}/>
        <Company text={data.company}/>
        <Banner/>
        {/* <Tequilas text={data.tequilas}/>
        <Retailers text={data.retailers}/>
        <Contact text={data.contact}/> */}
      </main>
      {/* <Footer/> */}
    </>
  )
}

export default PublicTemplate
