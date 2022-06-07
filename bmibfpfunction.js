class BmiBfpCalcFunction{
   
    constructor(weight, height, age, sex){
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.sex = sex
    }

    bodyMassIndex(){
        
         let result = (this.weight / (this.height * this.height));
        console.log("The Body Mass Index >>>",result)
         return result
    }

    bodyFatPercent(){
        let result;

        if(this.age > 18 && this.sex == "male"){
          
        result  = 1.20 * this.bmi() + 0.23 * (this.age - 16.2)
        console.log(`This is Body Fat Percentage for you as an Adult Male >>>`, result);

        }else if(this.age > 18 && this.sex == "female"){
            result  = 1.20 * this.bmi() + 0.23 * (this.age - 5.4)
             console.log(`This is Body Fat Percentage for you as an Adult Female >>>`, result);
             

        }else if(this.age < 18 && this.sex == "male"){
            result  = 1.51 * this.bmi() - 0.70 * (this.age - 2.2)
            console.log(`This is Body Fat Percentage for you as a young Boy >>>`, result);

        }else if(this.age < 18 && this.sex == "female"){
            result  = 1.51 * this.bmi() - 0.70 * (this.age + 1.4)
            console.log(`This is Body Fat Percentage for you as a young girl >>>`, result);

        } else{
            console.log(`check your input values properply for results for Body Fat Percentage`);
        } 
           
    }
}


module.exports = BmiBfpCalcFunction;