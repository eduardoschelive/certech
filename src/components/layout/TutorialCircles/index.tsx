import { CircleText } from '../CircleText'

export const TutorialCircles = () => {
  return (
    <div className="flex flex-row w-full justify-around items-center mt-6">
      <CircleText circleInnerText="1">
        Solte ou selecione o seu arquivo para converter
      </CircleText>
      <CircleText circleInnerText="2">
        Insira a sua senha caso seja necessário
      </CircleText>
      <CircleText circleInnerText="3">
        Basta clicar em converter e pronto!
      </CircleText>
    </div>
  )
}
