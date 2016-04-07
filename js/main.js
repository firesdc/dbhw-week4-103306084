var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5aacba65-afda-4ad5-88f5-6026934140e6";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
