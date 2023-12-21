export const data = {
  labels: [
    '2008',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    '2023',
  ],
  datasets: [
    {
      label: 'Designer',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#7aadf6',
      pointBackgroundColor: '#7aadf6',
      pointBorderColor: '#7aadf6',
      pointHoverBackgroundColor: '#7aadf6',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [1, 2, 3, 4, 4, 0, 3, 4, 1, 2, 2, 2, 3, 2, 2, 5]
    },
    {
      label: 'Web Developer',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: '#0ad00a',
      pointBackgroundColor: '#0ad00a',
      pointBorderColor: '#0ad00a',
      pointHoverBackgroundColor: '#0ad00a',
      pointHoverBorderColor: '#0ad00a',
      data: [0, 0, 1, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 5, 4, 3]
    },
    {
      label: 'Game Developer',
      backgroundColor: '#ffa200',
      borderColor: '#ffa200',
      pointBackgroundColor: '#ffa200',
      pointBorderColor: '#ffa200',
      pointHoverBackgroundColor: '#ffa200',
      pointHoverBorderColor: '#ffa200',
      data: [0, 0, 1, 1, 0, 0, 0, 0, 3, 4, 4, 2, 2, 3, 3, 5]
    },
    {
      label: 'Motion Artist',
      backgroundColor: '#e100ff',
      borderColor: '#e100ff',
      pointBackgroundColor: '#e100ff',
      pointBorderColor: '#e100ff',
      pointHoverBackgroundColor: '#e100ff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [3, 3, 5, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
    }
  ]
}

export const options = {
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
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: true,
      }
    },
    y: {
      ticks: {
        stepSize: 1,
        color: "white",
        font: {
          weight: 500
        }
      },
      grid: {
        drawBorder: false,
        color: function(context) {
          if (context.tick.value !== 0) {
            return 'rgba(255, 255, 255, 0.3)';
          } else {
            return 'rgba(255, 255, 255, 1)';
          }
        }
      }
    }
  }
}

export const styles = {
    height: '300px',
    width: '100%',
    position: 'relative'
}
