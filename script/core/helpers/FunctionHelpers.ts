module Helpers {
        // Thanks David Walsh! https://davidwalsh.name/javascript-arguments
        export function getArgs(func: Object): Array<string> {
            // First match everything inside the function argument parens.
            var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
            
            // Split the arguments string into an array comma delimited.
            return args.split(',').map(function(arg) {
                // Ensure no inline comments are parsed and trim the whitespace.
                return arg.replace(/\/\*.*\*\//, '').trim();
            }).filter(function(arg) {
                // Ensure no undefined values are added.
                return arg !== undefined;
            });
        }
}