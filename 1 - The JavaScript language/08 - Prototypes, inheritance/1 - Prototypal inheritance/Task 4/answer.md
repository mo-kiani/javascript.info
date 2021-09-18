# Task 1.8.1.4


### The Issue
Both `speedy` and `lazy` are sharing `hamster.stomach`; they do not have their
own stomachs.

### Possible Solutions
*Here are two possible solutions:*

#### Explicitly give them stomachs
The simplest method is to explicitly give each of them a stomach. 
It may be safer to remove the `hamster` stomach so that we get an error message
if we forget to give a new hamster a stomach. 
    
```
speedy.stomach = [];
lazy.stomach = [];
```

This solution is still not ideal because we have to remember to give each 
hamster a stomach, making the code a lot harder to manage.

##### Create a Rabbit constructor that assigns stomachs
We can use a constructor to add the stomach for us so we don't need to remember
every time.

This is a better approach because we no longer need to remember to explicitly 
add a stomach to every new hamster, but it does require us to change how we 
create `speedy` and `lazy`.

```
function Hamster() {
    this.stomach = [];
    this.__proto__ = hamster;
}

let speedy = new Hamster();
let lazy = new Hamster();

```

