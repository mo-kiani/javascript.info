# Task 1.5.2.2

This issue is caused by floating point imprecision. The number literal 6.35 is
actually something slightly smaller than 6.35 when represented in a 64 bit 
double precision floating point according to the IEEE-754 standard. That's why 
it rounds down. One possible approach is to reduce the precision loss by 
multiplying the number by 10, then rounding, and then dividing by 10.  

Like so:

```
alert( Math.round(6.35 * 10) / 10 );
```

There is no guarantee that this will work in all cases because there will still
be some precision loss, but it will work in some cases, including the given 
example of 6.35.

Note that if we wish to round to more decimal places, we would multiply and
divide with greater powers of 10. In this case we used 10 (10^1) because we are
only interested in keeping 1 decimal place.

