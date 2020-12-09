function getkey() {			    
  var ashow = document.getElementById("abtn");
  var shows = document.getElementById("copyt");
  var element = document.getElementById("kbtn");
  $.ajax({
            url: "/feeds/posts/default?alt=json",
            method: "GET",
            dataType: "json",
            success: function (data) {
				var zaxid = data.feed.id.$t
				var zaxid = zaxid.substring(26,zaxid.length)
				document.getElementById("keycode").value = zaxid;
				document.getElementById("copyt").innerHTML = "COPY";
				shows.classList.add("opent");
				element.classList.add("openk");
				ashow.classList.add("addop");
				document.getElementById("keyhidden").style = "display:block;";
				document.getElementById( "kbtn" ).setAttribute( "onClick", "copykey()" );
            },
			error: function (){
				document.getElementById("copyt").innerHTML = "ERROR";
				shows.classList.add("opent");
				element.classList.add("openk");
				ashow.classList.add("addop");
				document.getElementById("errorkey").style = "display:block;";
			}
		});
}
function copykey() {
  var copyText = document.getElementById("keycode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
