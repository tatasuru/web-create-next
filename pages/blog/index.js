import Meta from "@/components/meta";
import Container from "@/components/container";
import Main from "@/components/main";


export default function Blog() {
  return (
    <Container>
      <Meta pageTitle = 'Blog' pageDesc = 'recent Posts' />
      <Main
        title="Blog"
        subtitle="recent Posts"
      />
    </Container>
  )
  
}