# Introduction
-----------------------------
### This is a package that calculates the Body Mass Index and the Body Fat percentage.

### This package has a class named BmiBfpCalcFunction with its constructor having 4(four) parameters which are
*weight  (type number)  
*height  (type number)  
*age  (type number)  
*sex (type string)

### The Body Mass Index function
-------
#### This takes the weight and height parameters and uses the formular 
BMI = weight / (height * height).

### The Body Fat Percentage function
-----
### This takes in the age, sex and the result of the BMI function above.
  **There are four options here   
  1. The result if the patient is a male and an adult with formular  
        BFP  = 1.20 * this.bmi() + 0.23 * (this.age - 16.2)   

  2. The result if the patient is a female and an adult with formular           
  BFP  = 1.20 * this.bmi() + 0.23 * (this.age - 5.4)  

  3. The result if the patient is a male and below the age of 18 with formular    
  BFP  = 1.51 * this.bmi() - 0.70 * (this.age - 2.2) 
  4. The result if the patient is a female and below the age of 18 with formular 
  BFP  = 1.51 * this.bmi() - 0.70 * (this.age + 1.4) .     
----------------------      
# Installation
npm i @softwerk/bodyhygienetool