import Meta from "@/components/meta";
import Container from "@/components/container";
import Main from "@/components/main";


export default function Home() {
  return (
    <Container>
      <Meta pageTitle ='Top' pageDesc = 'アウトプットしていくサイト' />
      <Main
        title="cube"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  )

}