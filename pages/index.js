import Navbar from '../components/Navbar'
import Container from '../components/Container'

const Index = () => (
  <div>
    <Navbar></Navbar>
    <Container></Container>

    <style jsx global>{`
    html {
      box-sizing: border-box
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit
    }

    body {
      margin: 0px;
      background-color: #f5f7f8;
    }
  `}</style>
  </div>
)

export default Index
