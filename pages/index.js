import Meta from "@/components/meta";
import Container from "@/components/container";
import Main from "@/components/main";


export default function Home() {

  const keyVal = {
    "gu":"グー",
    "choki":"チョキ",
    "pa":"パー",
  }

  const valKey = keyVal.gu

  console.log(valKey)

  // const valKey = {
  //   グー: "gu",
  //   チョキ: "choki",
  //   パー: "pa",
  // };


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