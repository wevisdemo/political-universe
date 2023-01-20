import dynamic from 'next/dynamic'
import React from 'react'
import Chart from './Chart'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Cover from './Cover'
const DynamicStackedAreaChart = dynamic(
  () => import('../section2/StackedAreaChartNew'),
  { ssr: false }
)
// const DynamicHeader = dynamic(() => import('../section2/StackedAreaChartNew'), {
//   ssr: false,
// })

type Props = {}

const Section1 = (props: Props) => {
  return (
    <div>
      <Cover />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      {/* <Chart /> */}
      <DynamicStackedAreaChart />

    </div >
  )
}

export default Section1