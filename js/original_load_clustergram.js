
/*
Example files
*/
var file_name = getParameterByName('file');
make_clust(file_name);

function make_clust(inst_network){

    d3.json('json/'+inst_network, function(network_data){

      // define arguments object
      var args = {
        root: '#container-id-1',
        'network_data': network_data,
        // 'about':'Zoom, scroll, and click buttons to interact with the clustergram.',
        // 'row_tip_callback':gene_info
      };

      resize_container(args);

      d3.select(window).on('resize',function(){
        resize_container(args);
        cgm.resize_viz();
      });

      cgm = Clustergrammer(args);

      d3.select(cgm.params.root + ' .wait_message').remove();

      // // Enrichr categories
      // //////////////////////
      // enr_obj = Enrichr_request(cgm);
      // enr_obj.enrichr_icon();

      d3.select(cgm.params.root+' .icons_section').remove();

  });

}

function resize_container(args){

  var screen_width = window.innerWidth;
  var screen_height = window.innerHeight - 25;

  d3.select(args.root)
    .style('width', screen_width+'px')
    .style('height', screen_height+'px');
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}