document.getElementById('nativeSupport').innerText = Placeholders.nativeSupport.toString() + Placeholders.nativeSupport ? " => TEST NOT RELEVANT!" : "";
document.getElementById('options').innerText = JSON && JSON.stringify ? JSON.stringify(Placeholders.options, null, 2) : (Placeholders.options || {}).toString();
