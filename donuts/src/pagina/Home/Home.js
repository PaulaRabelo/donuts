import Card from "../../componentes/Card/Card"
import Footer from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import Nav from "../../componentes/Nav/Nav"
import { SectionCard } from "./styles"

function Home(props){

    return(
        <>
        <Header
        pagina={props.pagina}
        
        />
            <Nav/>
            <SectionCard>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </SectionCard>
            

            <Footer/>
        </>

    )
}

export default Home