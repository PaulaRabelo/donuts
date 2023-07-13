import Header from "../../componentes/Header/Header"
import { BotaoAddCard, BotaoMore, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from "./styles"

function Detalhes(props) {

    return (
        <>
        <Header
        pagina={props.pagina}
        />
            <ContainerDetalhes>
                <ImagemGrande src="" />
                <ContainerDiv>
                    <TituloDonuts>
                        Unicorn Sprinkles
                    </TituloDonuts>
                    <TextoDonuts>
                        A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow srinkles.
                    </TextoDonuts>

                    <MaisProdutos>
                        <img src=""/>
                        <TextNumber>7800</TextNumber>
                    </MaisProdutos>

                    <MaisProdutos>
                        <TextMore>Need more?</TextMore>
                        <BotaoMore>Add more</BotaoMore>
                    </MaisProdutos>

                    <BotaoAddCard>Add to card</BotaoAddCard>
                </ContainerDiv>
            </ContainerDetalhes>

        </>
    )
}

export default Detalhes