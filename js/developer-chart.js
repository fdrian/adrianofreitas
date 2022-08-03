//const DATA_COUNT = 6;
//const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
//const labels = Utils.months({count:6});
// Linux, Network Exploitation, Web Exploitation, Privilege Escalation, Windows Exploitation, Fundamentals
const dev_data = {
  labels: [
    'Python',
    'SQL',
    'PHP',
    'C/C++',
    'BASH',
    'JavaScript'
  ],
  datasets: [{    
    label: 'Skills',
    data: [60,30,40,20,50,35],
    fill: true,
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    borderColor: 'rgba(46, 204, 113, 1)',
    pointBackgroundColor: 'rgba(46, 204, 113, 1)',
    pointBorderColor: '#fafafa',
    pointHoverBackgroundColor: '#fafafa',
    pointHoverBorderColor: '#fafafa'
  }]
};

const dev_config = {
  type: 'radar',
  data: dev_data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Programming Languages for Hacking'
      }
    }
  },
};


const dev_chart = new Chart(
    document.getElementById('skillsDev'),
    dev_config
);
