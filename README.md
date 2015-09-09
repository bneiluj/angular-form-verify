angular-form-verify
===================

Global Angular Form Verify

Angular has nice way of checking for form verification but it calls all the methods when the submit button is triggered. This simple directive is an extra piece of code to run or call the controller only if the form is valid.  

##Advantages:
- It shows an invalid field only when the submit button is pressed
- The controller is trigger via the directive.
- Tests are outside, the angular-form-verify can be fully tested

##Setup
First step is to install the library via bower:
```
bower install angular-form-verify
```

Then you add the angular-form-verify dependency to your angularJs application
```
var app = angular.module("app",['angular-form-verify']);
```

Take a look to the html demo in the index.html file. You should use `novalidate` property to disable angular form checking and use `form-verify`, `submitted="submitted"` and
`submit="login(form)"` in the <form> tag.

##Result
Run your local server (like http-server using node)
You should see:
![Login Form](https://github.com/bneiluj/angular-form-verify/master/loginForm.png)
