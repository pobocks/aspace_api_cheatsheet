$(function (){
  const render_tmpl = _.template("<tr><td>${uri}</td><td>${method}</td><td>${description}</td></tr>")
  const renderTable = function (endpoints) {
    const grouped = _.sortBy(_.toPairs(_.groupBy(endpoints, "uri")));
    const out = _.map(grouped, (pair) => render_tmpl({
      uri: pair[0],
      method: _.map(pair[1], "method[0]").join(", "),
      description: _.map(pair[1], "description").join(", ")})).join("\n");
    $('#routes>tbody').html(out);
  };

  $.getJSON("js/endpoints.json").done((data) => renderTable(data));
});
