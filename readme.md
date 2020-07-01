#CLASSIC MODULE

##Template

```
var Module = (function() {

	/*/

        *** Private variables / Methods ***

        Accessible by public methods due to closure mecanisme. Indeed, 
        functions keep reference to their lexical environnement. So that,
        public methods keep reference to privates variables and methods that
        are needed inside public methods internal scope.

    /*/
    
    //Private variables here
    
    var privateVariable = "private variable";
    
  	//Private methods here
  	
  	var privateMethod = function(foo) {
  		console.log(foo)
  	}	
 
	var publicAPI = {
		publicVariable: "public variable",
		publicMethod: function(bar) {
			//Call our private method
			privateMethod(bar);
		}
 	}
	
	//Only a public API is returned
	return publicAPI;
})()
```