import React from 'react'
import LearningSection from '../components/Learning/LearningSection'
import CorePillars from '../components/Learning/CorePillars'
import CoursesSection from '../components/Learning/CoursesSection'
import StatsSection from '../components/Learning/StatsSection'
import WhatWeDo from '../components/Learning/WhatWeDo'
import TickerStrip from '../components/Portfolio/TickerStrip'

const LearningPage = () => {
  return (
    <div>
      <LearningSection/>
      <TickerStrip/>
      <CorePillars/>
      <CoursesSection/>
      <StatsSection/>
      <WhatWeDo/>



    </div>
  )
}

export default LearningPage