disclaimer = document.getElementById("jupyter-disclaimer")
anchor = disclaimer.getElementsByTagName("a")[0]
ext = anchor.href.split('.').reverse()[0]
if ( ext != "ipynb" )
  disclaimer.innerHTML = ""
