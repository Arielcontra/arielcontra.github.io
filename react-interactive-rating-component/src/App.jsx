import IconStar from '../dist/components/iconStart'
import SelectScore from '../dist/components/selectScore'
import Text from '../dist/components/text'
import IllustrationThankYou from '../dist/components/illustrationThankYou'
import Submit from '../dist/components/submit'
import DynamicText from '../dist/components/dynamicText'
import Text2 from '../dist/components/text2'
import './App.css'

function App() {
  return (
    <>
     <div className="father">
        <div className="main" id="index" >
            <IconStar/>
            <Text/>
            <SelectScore/>
            <Submit/>
        </div>
        <div className="main" id="success" style={{display: 'none'}}>
            <IllustrationThankYou/>
            <DynamicText/>
            <Text2/>
        </div>
    </div>
    </>
  )
}

export default App
