import React from 'react'
import { ProgressB } from '../../components/Progress'

// Components
import PersonalProfile from './components/Profile'
import LoginAndSecurity from './components/SecurityAndLogin'

const Setting = () => {
  const [step, setStep] = React.useState(0)
  return (
    <div className='h-full overflow-hidden'>
       <ProgressB
        options={["Profile", "Change password"]}
        centered
        {...{ step, setStep }}
      />
      {step === 0 && <PersonalProfile />}
      {step === 1 && <LoginAndSecurity />}
    </div>
  )
}

export default Setting