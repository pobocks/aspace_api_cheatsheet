$(function (){
  const method_order = {get: 0, put: 1, post: 2, delete: 3, head: 4};
  const render_tmpl = _.template("<tr><td>${uri}</td><td>${method}</td><td>${description}</td></tr>")
  const renderTable = function (endpoints) {
    const grouped = _.sortBy(_.toPairs(_.groupBy(endpoints, ep => ep.uri.replace(/\/:id$/, ''))), "[0]");
    const out = _.map(grouped, (pair) => render_tmpl({
      uri: pair[0],
      method: _.sortBy(_.uniq(_.flatten(_.map(pair[1], "method"))), x => method_order[x]).join(", "),
      description: _.map(pair[1], "description").join(", ")})).join("\n");
    $('#routes>tbody').html(out);
  };

  $.getJSON("js/endpoints.json").done((data) => renderTable(data));
});
