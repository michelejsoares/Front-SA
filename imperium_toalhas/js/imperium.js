document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("donutChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Azul", "Vermelho", "Verde"],
        datasets: [
          {
            label: "My First Dataset",
            data: [12, 19, 3],
            backgroundColor: [
              "#598ca0",
              "#b64726",
              "#6a7a6b",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.label + ": " + tooltipItem.raw;
              },
            },
          },
        },
      },
    });
  });