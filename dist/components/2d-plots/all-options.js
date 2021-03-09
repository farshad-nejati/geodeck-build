const options = {
  colors: [
    '#80D0FF',
    '#B0EC9B',
    '#F69186',
    '#FFD780',
    '#2E93fA',
    '#66DA26',
    '#546E7A',
    '#E91E63',
    '#FF9800',
  ],
  theme: {
    mode: 'dark',
  },
  fill: {
    colors: undefined,
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'diagonal1',
      shadeIntensity: 0.6,
      gradientToColors: [],
      inverseColors: false,
      // opacityFrom: 1,
      // opacityTo: 1,
      stops: [0, 80, 100],
      colorStops: [],
      opacityFrom: 0.7,
      opacityTo: 1,
    },
    image: {
      src: [`img/project/project1.png`],
      width: 100,
      height: 100,
    },
    pattern: {
      style: 'slantedLines',
      width: 2,
      height: 2,
      strokeWidth: 1,
    },
  },

  noData: {
    text: 'No Data',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: '#929292',
      fontSize: '14px',
      fontFamily: undefined,
    },
  },
  markers: {
    size: 4,
    colors: undefined,
    strokeColors: '#92929240',
    strokeWidth: 0,
    strokeOpacity: 0,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3,
    },
  },

  xaxis: {
    type: 'category',
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],

    // tickAmount: 10,
    // labels: {
    //   formatter: function (val) {
    //     return parseFloat(val).toFixed(1);
    //   },
    // },
    labels: {
      trim: true,
      style: {
        fontFamily: 'inherit',
        cssClass: 'apexcharts-xaxis-label',
      },
      format: undefined,
      formatter: undefined,
      datetimeFormatter: {
        year: 'yyyy',
        month: "MMM 'yy",
        day: 'dd MMM',
        hour: 'HH:mm',
      },
    },
    axisBorder: {
      color: '#929292',
    },
    axisTicks: {
      color: '#929292',
    },
    range: undefined,
    position: 'bottom',
    title: {
      text: 'Timestamp',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: '12px',
        fontFamily: 'inherit',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-title',
      },
    },
    tooltip: {
      enabled: true,
      formatter: undefined,
      offsetY: 10,
      style: {
        fontSize: '12px',
        fontFamily: 'inherit',
      },
    },
  },

  yaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: 'inherit',
        cssClass: 'apexcharts-yaxis-label',
      },
      offsetX: -5,
      offsetY: 0,
      formatter: (val) => {
        return val;
      },
    },
    axisBorder: {
      show: true,
      color: '#929292',
      offsetX: 2,
    },
    // axisTicks: {
    //   show: true,
    //   borderType: 'solid',
    //   color: '#929292',
    //   width: 6,
    //   offsetX: 0,
    //   offsetY: 0,
    // },
    title: {
      text: 'Tempreture (-)',
      style: {
        fontSize: '12px',
        fontFamily: 'inherit',
        fontWeight: 500,
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    // tooltip: {
    //   enabled: true,
    //   offsetX: 0,
    // },
  },

  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'top',
    horizontalAlign: 'center',
    floating: false,
    fontSize: '10px',
    fontFamily: 'inherit',
    fontWeight: 400,
    formatter: (val) => {
      return `${val}`;
    },

    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    offsetX: 0,
    offsetY: 0,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 24,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#92929240',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      // onClick: function (chart, seriesIndex, opts) {
      //   console.log('series- ' + seriesIndex + "'s marker was clicked");
      // },
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },

  tooltip: {
    // must above the chart options
    enabled: true,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
    //   return (
    //     '<div class="arrow_box">' +
    //     '<span>' +
    //     series[seriesIndex][dataPointIndex] +
    //     '</span>' +
    //     '</div>'
    //   );
    // },
    fillSeriesColor: false,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: undefined,
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
    x: {
      show: true,
      // format: 'dd MMM',
      // formatter: undefined,
    },
    y: {
      formatter: undefined,
      title: {
        formatter: (seriesName) => seriesName,
      },
    },
    items: {
      display: 'flex',
    },
  },
  chart: {
    id: 'chartId',
    type: 'chart-type',
    fontFamily: 'inherit',
    background: 'transparent',
    foreColor: '#929292',
    offsetX: 0,
    offsetY: 0,
    parentHeightOffset: 14,
    // redrawOnWindowResize: true,
    // redrawOnParentResize: true,
    // height: "100%",
    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: 'yellow',
          opacity: 0.4,
        },
        stroke: {
          color: 'red',
          opacity: 0.4,
          width: 1,
        },
      },
    },

    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ',',
          headerCategory: 'category',
          headerValue: 'value',
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: 'zoom',
    },

    events: {
      click: (e) => {
        console.log(e);
      },
    },
  },

  title: {
    text: 'Plot 1',
    align: 'left',
    margin: 10,
    offsetX: 10,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: undefined,
      color: '#929292',
    },
  },
  grid: {
    borderColor: '#92929240',
    strokeDashArray: 0,

    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

export default options;
