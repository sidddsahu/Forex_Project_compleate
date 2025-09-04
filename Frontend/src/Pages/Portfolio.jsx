import React from 'react'
import PortfolioPage from '../components/Portfolio/PortfolioPage'
import PortfolioManagement from '../components/Portfolio/PortfolioManagement'
import HowToGetStarted from '../components/Portfolio/HowToGetStarted'
import FinancialReportTimeline from '../components/Portfolio/FinancialReportTimeline'
import RiskManagement from '../components/Portfolio/RiskManagement'
import Graphical from '../components/Portfolio/Graphical'
import ICMSection from '../components/Portfolio/ICMSection'
import TickerStrip from '../components/Portfolio/TickerStrip'

const Portfolio = () => {
  return (
    <div>
      <PortfolioManagement />
      <RiskManagement />
      <HowToGetStarted />
      <FinancialReportTimeline />
      <Graphical />
    </div>
  )
}

export default Portfolio