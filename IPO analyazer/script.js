function analyzePattern() {
  const gmp = parseInt(document.getElementById("gmp").value);
  const retail = parseInt(document.getElementById("retail").value);
  const qib = parseInt(document.getElementById("qib").value);

  let result = "";

  if (gmp > 50 && retail > 10 && qib > 5) {
    result = "🔥 Likely to Perform Well!";
  } else if (gmp > 30 && retail > 5) {
    result = "⚠️ Moderate IPO, analyze more.";
  } else {
    result = "❌ Risky IPO, invest carefully.";
  }

  document.getElementById("result").innerText = result;

  drawChart(gmp, retail, qib);
}

function drawChart(gmp, retail, qib) {
  const ctx = document.getElementById('patternChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['GMP', 'Retail Sub', 'QIB Sub'],
      datasets: [{
        label: 'IPO Indicators',
        data: [gmp, retail, qib],
        backgroundColor: ['#4caf50', '#2196f3', '#f44336']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
