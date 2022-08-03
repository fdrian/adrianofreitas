//const DATA_COUNT = 6;
//const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
//const labels = Utils.months({count:6});
// Linux, Network Exploitation, Web Exploitation, Privilege Escalation, Windows Exploitation, Fundamentals
const hacker_data = {
  labels: [
    'Linux',
    'Web Exploitation',
    'Windows Exploitation',
    'Fundamentals',
    'Privilege Escalation',
    'Network Exploitation'
  ],
  datasets: [{
    label: 'HACKER',
    data: [67.5,0,0,0,0,0],
    fill: true,
    backgroundColor: 'rgba(216, 0, 115, 0.1)',
    borderColor: '  rgba(216, 0, 115, 1)',
    pointBackgroundColor: 'rgba(216, 0, 115, 1)',
    pointBorderColor: '#fafafa',
    pointHoverBackgroundColor: '#fafafa',
    pointHoverBorderColor: '#fafafa'
  },{
    label: 'TRYHACKME',
    data: [85,54,19,79,40,44],
    fill: true,
    backgroundColor: 'rgba(102,16,242,0.1)',
    borderColor: '  rgb(102,16,242)',
    pointBackgroundColor: 'rgb(102,16,242)',
    pointBorderColor: '#fafafa',
    pointHoverBackgroundColor: '#fafafa',
    pointHoverBorderColor: '#fafafa'
  },{
    label: 'HACKTHEBOX',
    data: [50,10,10,20,10,10],
    fill: true,
    backgroundColor: 'rgba(46, 204, 113, 0.1)',
    borderColor: 'rgba(46, 204, 113, 1)',
    pointBackgroundColor: 'rgba(46, 204, 113, 1)',
    pointBorderColor: '#fafafa',
    pointHoverBackgroundColor: '#fafafa',
    pointHoverBorderColor: '#fafafa'
  }]
};


const hacker_config = {
  type: 'radar',
  data: hacker_data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Hacking Skills'
      }
    }
  },
};


const hacker_chart = new Chart(
    document.getElementById('skillsHacker'),
    hacker_config
);
