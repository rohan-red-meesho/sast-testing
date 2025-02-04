let dynamic = window.prompt() // arbitrary user input


// nosemgrep: eval-detected
eval(dynamic + 'possibly malicious code');

eval(`${dynamic} possibly malicious code`); // nosemgrep: eval-detected

