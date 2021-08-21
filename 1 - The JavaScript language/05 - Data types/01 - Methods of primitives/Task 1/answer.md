# Task 1.5.1.1


```
let str = "Hello";
str.test = 5;  
```
We are treating the string as an object, so the property is assigned to a
temporary String wrapper object, which is then immediately destroyed.

---

```
alert(str.test);
```
We are using the string primitive as an object again, so a new String wrapper
is created around it and since this one is fresh it will not have test 
property so we will get a value of undefined 

