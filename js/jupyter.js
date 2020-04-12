disclaimer = document.getElementsByClassName("disclaimer")[0]
anchor = disclaimer.getElementsByTagName("a")[0]
ext = anchor.href.split('.').reverse()[0]
if ( ext != "ipynb" )
  disclaimer.innerHTML = ""
