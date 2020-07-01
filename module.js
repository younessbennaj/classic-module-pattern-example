/*/

    Source: Essential JS Design Patterns

    *** Module Pattern ***

    code project => cleanly separated  et organized

    Module => Object litteral (key/value pairs) / Logical unit of data/methods

    e.g:

        var myModule = {

            variableKey: variableValue,

            functionKey: function () {
            // ...
            }
        };

    Module:
        => implements public/private methods and variables (imitate JAVA/C++)
        => don't pollute global space
        
    IIFE: 
        => Preserves global space from collision 
        => Creates function scope

/*/

//Module: Litteral object returned by an IIFE and self-contained in a global variable
var Module = (function () {

    /*/

        *** Private variables / Methods ***

        Accessible by public methods due to closure mecanisme. Indeed, 
        functions keep reference to their lexical environnement. So that,
        public methods keep reference to privates variables and methods that
        are needed inside public methods internal scope.

    /*/

    //Private variables here
    var privateVariable = "private";
    //Private methods here

    //Our module
    var publicAPI = {
        //Public variables here
        sets: 0,
        reps: 0,
        //Public methods here
        incrementSets: function () {
            this.sets++;
        },
        incrementReps: function () {
            //privateVariable accessible thanks to closure
            var message = 'This a ' + privateVariable + ' variable';
            console.log(message);
            this.reps++;
        },
        getReps: function () {
            return this.reps;
        },
        getSets: function () {
            return this.sets;
        },
        resetSets: function () {
            this.sets = 0;
        },
        resetReps: function () {
            this.reps = 0;
        },
        resetAll: function () {
            this.sets = 0;
            this.reps = 0;
        }
    };

    //Only a public API is returned
    return publicAPI;
})();

// //We need to prefix any calls with the name of the module => effective namespace
// //Called as an object methods => 'this' in its contect is bind to this object (our module)
// Module.incrementReps();

