import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddContactComponent implements OnInit {
  addContactForm!: FormGroup;
  public edit: boolean = false;
  contactDetails: Array<any> = [];
  constructor(public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {

    this.addContactForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      cname: new FormControl('', Validators.required),
      phoneno: new FormControl('', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]),
    })
    if (this.editData) {
      this.edit = true;
      this.addContactForm.patchValue({
        fname: this.editData.Details[0].fname,
        email: this.editData.Details[0].email,
        cname: this.editData.Details[0].cname,
        phoneno: this.editData.Details[0].phoneno
      })
    }
  }
  public close() {
    this.dialogRef.close();
  }




  add() {
    if (this.addContactForm.valid) {
      this.contactDetails.push(this.addContactForm.value)
      this.addContactForm.reset();
      this.dialogRef.close({ value: this.contactDetails });
    }
    else {
      return
    }
  }

  editDetails() {
    this.contactDetails.push(this.addContactForm.value)
    this.dialogRef.close(this.contactDetails);
  }
  get f() {
    return this.addContactForm.controls
  }
  public addContactFormError = (controlName: string, errorName: string) => {
    return this.addContactForm.controls[controlName].hasError(errorName);
  }
}
