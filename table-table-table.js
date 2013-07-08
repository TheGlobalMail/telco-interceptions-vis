var csv = require('csv');
var path = require('path');
var dir = path.join(__dirname, 'data');
var _ = require('lodash');
var async = require('async');
var fs = require('fs');

var styles = fs.readFileSync(path.join(dir, 'table-styles.css'));

var html = styles;
var htmlFile = path.join(__dirname, 'app', 'table-embed.html');

function htmlThatTable(tableFile, cb){
  var heading = '';
  if (tableFile.match(/auth-exist/)){
    heading = 'Table 1: Government agencies accessing metadata for the enforcement of criminal law';
  }else{
    heading = 'Table 2: Government agencies accessing metadata for law imposing a pecuniary penalty or the protection of the public revenue';
  }
  html += '<div  class="large-image-box left">';
  html += '<h4 class="table-table-table-heading">'+heading+'</h4>\n\n';
  html += '<table class="table-table-table">\n';
  html += '<thead><tr>\n';
  ['Department', '2007-08', '2008-09', '2009-10', '2009-11', '2011-12', 'Total'].forEach(function(header){
    html += '<th>' + header + '</th>\n';
  });
  html += '</tr></thead>\n';
  html += '<tbody>\n';
  csv()
    .from.path(path.join(dir, tableFile))
    .on('record', function(row, index){
      if (index === 0) return;
      html += '<tr>';
      html += '<td class="dept">' + row[0] + '</td>';
      html += _.map(row.slice(1, -1), function(cell){
        return '<td class="value">' + cell + '</td>';
      }).join('');
      html += '<td class="value total">' + row[row.length - 1] + '</td>';
      html += '</tr>\n';
    })
    .on('error', cb)
    .on('end', function(){
      html += '</tbody></table></div>';
      cb();
    });
}

async.forEachSeries(['auth-exist-table.csv', 'auth-protect-table.csv'], htmlThatTable, function(err){
  if (err){
    return console.error('error: ' + err);
  }
  fs.writeFileSync(htmlFile, html);
  console.error('ok');
});
