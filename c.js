let dynamic = window.prompt() // arbitrary user input

// ruleid:eval-detected
eval(dynamic + 'possibly malicious code');

// ruleid:eval-detected
eval(`${dynamic} possibly malicious code`);