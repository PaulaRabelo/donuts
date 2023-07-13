import { FooterContainer, ImagemMais } from "./styles"
import historico from '../../assets/historico.png'
import promocao from '../../assets/promocao.png'
import mais from '../../assets/mais.png'
import coracao from '../../assets/coracao.png'
import carrinho from '../../assets/carinho.png'

function Footer(){

    return(
       <FooterContainer>
        <img src={historico} />
        <img src={promocao} />
        <ImagemMais  src={mais} />
        <img src={coracao} />
        <img src={carrinho} />
       </FooterContainer>
    )
}

export default Footer