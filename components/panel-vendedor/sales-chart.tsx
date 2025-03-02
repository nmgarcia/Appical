"use client"

import { Chart } from "react-google-charts"

const salesData = [
  ["Mes", "Ventas"],
  ["Enero", 1000],
  ["Febrero", 1170],
  ["Marzo", 660],
  ["Abril", 1030],
]

export default function SalesChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={salesData}
      options={{
        hAxis: {
          title: "Mes",
        },
        vAxis: {
          title: "Ventas ($)",
        },
        series: {
          0: { curveType: "function" },
        },
      }}
    />
  )
}

