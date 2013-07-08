(function($) {

  $(function () {
    if (!$('#criminal-law-chart').length) return;

    $('#criminal-law-chart').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: '',
        style: {
          fontSize: '0px'
        }
      },
      credits: {
        enabled: false
      },
      colors: [
        '#c148af',
        '#32ae6c',
        '#3485b7',
        '#b4ac53',
        '#333'
      ],
      xAxis: {
        categories: [
          'NSW Police',
          'VIC Police',
          'AFP',
          'QLD Police',
          'WA Police',
          'ACC',
          'CMC QLD',
          'SA Police',
          'TAS Police',
          'ACBPS',
          'NSW CC',
          'NT Police',
          'OPI',
          'ASIC',
          'PIC'
        ]
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of authorisations',
          style: {
            color: '#333'
          }
        },
        labels: {
          overflow: 'justify',
          formatter: function() {
            if (this.isFirst) {
              return 0;
            }
            var val = this.value + '';
            while (/(\d+)(\d{3})/.test(val)){
              val = val.replace(/(\d+)(\d{3})/, '$1'+','+'$2');
            }
            return val;
          }
        }
      },
      legend: {
        backgroundColor: '#FFFFFF',
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: '2011-12',
        data: [103824, 67173, 22900, 36531, 12293, 6764, 7040, 8025, 9342, 5197, 3649, 2828, 307, 1587, 1470]
      }, {
        name: '2010-11',
        data: [41340, 65703, 22992, 30896, 22152, 12467, 8395, 7094, 9845, 4017, 2915, 3695, 5246, 1602, 1731]
      }, {
        name: '2009-10',
        data: [115343, 50234, 20869, 10223, 26234, 12467, 9577, 11631, 6689, 4157, 3602, 1834, 2235, 2874, 1242]
      }, {
        name: '2008–09',
        data: [100585, 40617, 16942, 9344, 24606, 9038, 9468, 3442, 9627, 9040, 4620, 807, 873, 2319, 1815]
      }, {
        name: '2007–08',
        data: [88368, 46643, 12996, 4529, 275, 5639, 5716, 7852, 0, 2022, 3011, 979, 1001, 1076, 2048]
      }]
    });
  });


  $(function () {
    if (!$('#public-revenue-chart').length) return;

    $('#public-revenue-chart').highcharts({
      chart: {
        type: 'bar'
      },
      title: {
        text: '',
        style: {
          fontSize: '0px'
        }
      },
      credits: {
        enabled: false
      },
      colors: [
        '#c148af',
        '#32ae6c',
        '#3485b7',
        '#b4ac53',
        '#333'
      ],
      xAxis: {
        categories: [
          'Centrelink',
          'NSW Police',
          'OFT NSW',
          'ACBPS',
          'ATO',
          'AFP',
          'CA VIC',
          'AUSTRALIA POST',
          'CSA',
          'ASIC',
          'TAS Police',
          'OCBA SA',
          'OSR NSW',
          'DEFENCE',
          'SRO VIC',
          'NSW DPI'
        ]
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of authorisations',
          style: {
            color: '#333'
          }
        },
        labels: {
          overflow: 'justify',
          formatter: function() {
            if (this.isFirst) {
              return 0;
            }
            var val = this.value + '';
            while (/(\d+)(\d{3})/.test(val)){
              val = val.replace(/(\d+)(\d{3})/, '$1'+','+'$2');
            }
            return val;
          }
        }
      },
      legend: {
        backgroundColor: '#FFFFFF',
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: '2011-12',
        data: [1181, 5464, 1003, 116, 177, 101, 230, 251, 23, 179, 534, 141, 127, 279, 45]
      }, {
        name: '2010-11',
        data: [2127, 2076, 935, 173, 249, 359, 269, 160, 67, 209, 0, 178, 224, 104, 106]
      }, {
        name: '2009-10',
        data: [2579, 0, 1012, 225, 504, 267, 235, 361, 74, 123, 0, 201, 132, 129, 130]
      }, {
        name: '2008–09',
        data: [1926, 0, 658, 1096, 645, 549, 441, 298, 192, 148, 189, 124, 132, 1, 103]
      }, {
        name: '2007–08',
        data: [2, 0, 439, 1526, 1,407, 481, 328, 229, 532, 111, 0, 51, 0, 44, 68]
      }]
    });
  });

}(jQuery));