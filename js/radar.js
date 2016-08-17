var hackerZone1 = new RadarChartData(loser.name, 'rgba(220, 220, 220, 1)', 'rgba(220, 220, 220, 0.4)');
hackerZone1.setData(loser);
console.log(hackerZone1, ' is hackerZone1');
var hackerZone2 = new RadarChartData(winner.name, 'rgba(255, 122, 122, 1)', 'rgba(255, 122, 122, 0.2)');
hackerZone2.setData(winner);
console.log(hackerZone2, 'is hackerZone2');

var options = {
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
};

var data = {
  labels: reviewCriteriaArray,
  datasets: [hackerZone1, hackerZone2]
};
var ctx = document.getElementById('canvas').getContext('2d');

var myRadarChart = new Chart(ctx).Radar(data, options);

console.log(hackerSpaceArray, ' arrayed data');
console.log(localArray, ' local array');

function RadarChartData(labelName, color, colorFill){
this.label = labelName;
this.fillColor = colorFill;
this.strokeColor = color;
this.pointColor = color;
this.pointStrokeColor = '#fff';
this.pointHighlightFill = '#fff';
this.pointHighlightStroke = color;
this.data = [];
};

RadarChartData.prototype.setData = function(inputObject){
  reviewCriteriaArray.forEach(function(inputObject) {
    this.data.push(inputObject[reviewCriteriaArray]);
    console.log(this.data);
    console.log('Test');
})
}
