import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import Card from './Card'
import styles from './TypeChart.module.css'
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
