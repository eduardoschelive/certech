import { CircleText } from "../CircleText"

export const TutorialCircles = () => {
    return (
        <div className='absolute top-96 w-full'>
            <div className='flex flex-row w-full justify-around items-center'>
                <CircleText circleInnerText="1">
                    Selecione o tipo de arquivo que deseja converter
                </CircleText>
                <CircleText circleInnerText="2">
                    Arraste ou selecione o arquivo que deseja dentro da linha pontilhada e colocar a senha
                </CircleText>
                <CircleText circleInnerText="3">
                    Seu arquivo ja estará convertido para você realizar o utilizar
                </CircleText>
            </div>
        </div>
    )
}