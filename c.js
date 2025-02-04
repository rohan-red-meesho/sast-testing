let dynamic = window.prompt() // arbitrary user input


//nosemgrep
eval(dynamic + 'possibly malicious code');

eval(`${dynamic} possibly malicious code`);
//nosemgrep