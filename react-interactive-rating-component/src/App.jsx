import IconStar from '../dist/components/iconStart'
import SelectScore from '../dist/components/selectScore'
import Description from '../dist/components/description'
import IllustrationThankYou from '../dist/components/illustrationThankYou'
import Submit from '../dist/components/submit'
import DynamicText from '../dist/components/dynamicText'
import Gratitude from '../dist/components/gratitude'
import './App.css'

function App() {
  return (
    <>
     <div className="father">
        <div className="main" id="index" >
            <IconStar/>
            <Description/>
            <SelectScore/>
            <Submit/>
        </div>
        <div className="main" id="success" style={{display: 'none'}}>
            <IllustrationThankYou/>
            <DynamicText/>
            <Gratitude/>
        </div>
    </div>
    </>
  )
}

export default App
