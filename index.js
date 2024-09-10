var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

var HeightAdjust = 70;
var scaledWidth = 25;
var height = 400;
var randomData = HeightAdjust;
var HorizontalBarHeight = HeightAdjust; // + scaledWidth / (2 * (height / 100));
var whiteSpace = 10;

var data = [];
for (i = 0; i < 100; i++) data.push(i);
option = {
  xAxis: {
    type: "value",
    show: false,
    interval: 1,
    xscale: false,
    axisLabel: {
      show: false,
    },
  },
  yAxis: {
    type: "category",
    show: false,
    data: data,
    axisLabel: {
      show: false,
    },
  },
  grid: {
    height: 400,
  },
  series: [
    {
      name: "Left Invisible Line",
      type: "line",
      z: 1,
      data: [
        [-whiteSpace, 0],
        [-whiteSpace, 100],
      ],
      itemStyle: {
        borderRadius: [10, 10, 0, 0], // Adding border radius here
      },
      lineStyle: {
        show: false,
        color: "#BBBBBB",
        width: "10%",
        cap: "butt",
      },
      symbol: "none",
    },
    {
      name: "Right Invisible Line",
      type: "line",
      z: 1,
      data: [
        [whiteSpace, 0],
        [whiteSpace, 100],
      ],
      lineStyle: {
        show: false,
        color: "#BBBBBB",
        width: "10%",
        cap: "butt",
      },
      symbol: "none",
    },
    {
      name: "Main Background Line",
      type: "line",
      z: 1,
      data: [
        [0, 0],
        [0, 100],
      ],
      lineStyle: {
        color: "#BBBBBB",
        width: scaledWidth,
        cap: "square",
      },
      symbol: "none",
    },
    {
      name: "Right Rounded Background Line",
      type: "line",
      z: 1,
      data: [
        [0.5, 0],
        [0.5, 100],
      ],
      lineStyle: {
        color: "#BBBBBB",
        width: scaledWidth,
        cap: "round",
      },
      symbol: "none",
    },
    {
      name: "Left Rounded Background Line",
      type: "line",
      z: 1,
      data: [
        [-0.5, 0],
        [-0.5, 100],
      ],
      lineStyle: {
        color: "#BBBBBB",
        width: scaledWidth,
        cap: "round",
      },
      symbol: "none",
    },
    {
      name: "Main Level Line",
      type: "line",
      z: 2,
      data: [
        [0, 0],
        [0, randomData],
      ],
      lineStyle: {
        color: "#888888",
        width: scaledWidth,
        cap: "square",
      },
      symbol: "none",
    },
    {
      name: "Right Rounded Background Line",
      type: "line",
      z: 2,
      data: [
        [0.5, 0],
        [0.5, randomData],
      ],
      lineStyle: {
        color: "#888888",
        width: scaledWidth,
        cap: "round",
      },
      symbol: "none",
    },
    {
      name: "Left Rounded Background Line",
      type: "line",
      z: 2,
      data: [
        [-0.5, 0],
        [-0.5, randomData],
      ],
      lineStyle: {
        color: "#888888",
        width: scaledWidth,
        cap: "round",
      },
      symbol: "none",
    },
    {
      name: "Top of Gauge Line",
      type: "line",
      z: 2,
      data: [
        [-0.5, HorizontalBarHeight],
        [0.5, HorizontalBarHeight],
      ],
      lineStyle: {
        color: "#888888",
        width: scaledWidth,
        cap: "square",
      },
      symbol: "none",
    },
  ],
};

//setInterval(function () {
//  randomData = +(Math.random() * 100).toFixed(2);
//}, 2000);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
