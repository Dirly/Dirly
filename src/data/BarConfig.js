export const data = {
  labels: [
    ''
  ],
  
  datasets: [
    {
      label: 'Vox',
      backgroundColor: '#005e84',
      data: [3]
    },
    {
      label: 'Freelance',
      backgroundColor: '#a7bdc2',
      data: [4]
    },
    {
      label: 'Red nucleus',
      backgroundColor: '#d40000',
      data: [12]
    }
  ]
}

export const options = {
  maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display:false
    },
    tooltips: {
      enabled: false, // This will disable tooltips for Chart.js version 2.x
    }
  },
  interaction: {
    mode: null, // Disable hover interactions
  },
  scales: {
    x: {
      stacked: false, // Default is false, but it's here for clarity
    },
    y: {
      stacked: true, // Default is false, but it's here for clarity
      display: false, // This will hide the y-axis
    }
  }
}

