import React from 'react'
import {Line,Bar} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import Card from '../../UI/components/Card'
import styles from '../css/TypeChart.module.css'
export const TypeChartBar=(props) =>{
	console.log("userChartdata",props.userChartData);
	ChartJS.register(...registerables);
  return (
    <Card className={`${styles.TypeChart} ${styles.BarChart} `}>
		<Bar data= {props.userChartData} 
		options={{
       legend: {
         display: false
       },
       scales: {
         y: {
      title: {
        display: true,
        text: '# of tests'
      }
    },
	 x: {
      title: {
        display: true,
        text: 'wpm range'
      }
    }
        
		}}}
		/>
	</Card>
  )
} 
export default function TypeChart(props) {
    let chartLabel = props.wpmArray.map((element,idx)=>{
      return idx
    })
    
    ChartJS.register(...registerables);
    const data = {
        labels: chartLabel,
        datasets: [
          {
            label: "WPM",
            data: props.wpmArray,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
          },
          {
            label: "RAW",
            data: props.rawArray,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
  return (
    <Card className={styles.TypeChart}><Line data={data} className={styles.Line} /></Card>
  )
}
