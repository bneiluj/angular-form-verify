angular-form-verify
===================

Global Angular Form Verify

A better way of checking for form in AngularJS

The code is also bundle into a bower library named angular-form-verify

##Advantages:
- It shows invalid field on input only when the submit button is pressed
- The controller is trigger via the directive if form is valid
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

and in your html file:
```
<script type="text/javascript" src="components/angularFormVerify.js"></script>
```


Take a look to the html demo in the index.html file. You should use `novalidate` property to disable angular form checking and use `form-verify`, `submitted="submitted"` and `submit="login(form)"` in the <form> tag.

##Result
Run your local server (like http-server using node)
You should see:
![Login Form](https://raw.githubusercontent.com/bneiluj/angular-form-verify/master/loginForm.png)

Please take a look to the example.
