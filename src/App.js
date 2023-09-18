import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App(){
  return (
    <div>
      
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Personal Digital Assistant
            </p>
        </div>
      </section>

     
      <div className="container">
        <section className="section">
          <div className="columns">
              <div className="column is-3">
                  <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} content="Alexa is Amazon's cloud-based voice service available on hundreds of millions of devices from Amazon and third-party device manufacturers."/>
              </div>
              <div className="column is-3">
                <ProfileCard title="Cortana" handle="@cortana31" image={CortanaImage} content="Cortana helps you achieve more with less effort. Your personal productivity assistant helps you stay on top of what matters, follow through"/>

              </div>
              <div className="column is-3">
                <ProfileCard title="Siri" handle="@siri01" image={SiriImage} content="Siri is an easy way to make calls, send texts, use apps, and get things done with just your voice. And Siri is the most private intelligent assistant."/>
              </div>
          </div>
        </section>
      </div>
    </div>
    
  )
}

export default App;
