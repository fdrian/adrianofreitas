
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

