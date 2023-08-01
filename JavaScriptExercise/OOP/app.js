
class WebDev {
   
    constructor(company, yoe){
        this.company = company;
        this.yoe = yoe;
    }

    printCompany(){
        console.log(`the company name is ${this.company}`);
    }
    printYoe(){
        console.log(`Year of Experience is ${this.yoe}`);
    }

}

class FrontEnd extends WebDev {

    constructor(company, language, yoe){
        super(company, yoe);
        this.language = language;
    }

    printLanguage(){
        console.log(`the language used is FrontEnd -> ${this.language}`);
    }

}

class BackEnd extends WebDev {

    constructor(company, language, yoe){
        super(company, yoe);
        this.language = language;
    }

    printLanguage(){
        console.log(`the language used is BackEnd -> ${this.language}`);
    }

}

let frontend = new FrontEnd("Prominent Pixel", "JavaScript", 3);
frontend.printCompany();
frontend.printLanguage();
frontend.printYoe();

let backend = new BackEnd("Amazon", "Java", 5);
backend.printCompany();
backend.printLanguage();
backend.printYoe();
