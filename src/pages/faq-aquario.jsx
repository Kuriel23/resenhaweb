import { Footer } from '../components/common/Footer'
import { SEO } from '../components/forward/SEO'
import { Container, Section } from '../styles/pages/home'
import { Header } from '../components/common/Header'

import {
  useBreakpointValue,
  Text,
} from '@chakra-ui/react'

export default function FaqAquario () {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <SEO />

      <Container>
        <Section>
          <Header />
          <Text size="xl" color="white" align="center">Construindo ainda...</Text>
        </Section>
        <Footer />
      </Container>
    </>
  )
}
