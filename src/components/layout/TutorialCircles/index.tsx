import { CircleText } from '../CircleText'

export const TutorialCircles = () => {
  return (
    <div className="flex flex-row w-full justify-around items-center my-6">
      <CircleText circleInnerText="1">
        Solte ou selecione o seu arquivo dentro da linha pontilhada
      </CircleText>
      <CircleText circleInnerText="2">
        Insira a sua senha caso seja necessário
      </CircleText>
      <CircleText circleInnerText="3">
        Basta clicar em converter e salvar o arquivo em convertido
      </CircleText>
    </div>
  )
}
