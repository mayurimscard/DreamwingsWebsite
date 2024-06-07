import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  focus;
  focus1;
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Dreamwings Solutions Pvt Ltd.',
    from_email: '',
    subject: '',
    message: '',

});
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
 async send(){
  emailjs.init('XpLr9nlyIjMd4yRNW');
    let response = await emailjs.send("service_xdg2b07","template_pmzhze7",{
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
        });
        alert('Message has been sent.');
        this.form.reset();
}

}
