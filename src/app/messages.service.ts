import { NgForm } from "@angular/forms";

export class MessagesService {
    messagesArray1: string[];
    form1: NgForm;
    form2: NgForm;
    messagesArray2: string[];
    constructor(){
        this.messagesArray1 = [];
        this.messagesArray2 = [];
    }
    onSubmitFirst(form1: NgForm) {
        const value = form1.value;
        this.messagesArray1.push(value.firstPerson);
        // console.log(this.messagesArray1);
        form1.reset();
    }

    onSubmitSecond(form2: NgForm) {
        const value = form2.value;
        this.messagesArray2.push(value.SecondPerson);
        // console.log(this.messagesArray2);
        form2.reset();
    }
}
