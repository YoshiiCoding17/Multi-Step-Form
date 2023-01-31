import { StepLayout } from "../layout/StepLayout"
import thankImage from "../images/icon-thank-you.svg"

export const ThanksSection = () => {
  return (
    <StepLayout>
        <div className="thanks">
            <img className="thanks-image" src={thankImage} alt="thanks image" />
            <h1 className="thanks-title">Thank You!</h1>
            <p className="thanks-text">Thanks for confirming your subscription!
            We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    </StepLayout>
  )
}
