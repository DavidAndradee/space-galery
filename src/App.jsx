import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import CampoTexto from "./Componentes/CampoTexto"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./Componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./Componentes/ModalZomm"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`;

const  App = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecioanda] = useState(null)

  const aoAlternadoFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecioanda({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return{
        ...fotosDaGaleria,
        favorita:fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho />

        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço" backgroundImage={bannerBackground} />
            <Galeria aoFotoSelecionada={foto => setFotoSelecioanda(foto)} aoAlternadoFavorito={aoAlternadoFavorito} fotos={fotosDaGaleria} />
          </ConteudoGaleria>
          
        </MainContainer>

      </AppContainer>

      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternadoFavorito={aoAlternadoFavorito}/>

    </FundoGradiente>
  )
}

export default App
