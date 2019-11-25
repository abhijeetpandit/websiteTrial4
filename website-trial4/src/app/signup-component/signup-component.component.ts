import { Component, OnInit } from '@angular/core';
import { SignupRequest } from '../signup-request';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  constructor(private userService: UserHttpService) { }

  private firstName: string;
  private lastName: string;
  private userName: string;
  private email: string;
  private phNo: string;
  private password: string;

  private disableForSave: boolean = false;
  ngOnInit() {
  }

  save(): void {
    this.firstName = "";
    this.lastName = "";
    this.userName = "";
    this.email = "";
    this.phNo = "";
    this.password = "";
    this.disableForSave = true;
    this.userService.saveUser(new SignupRequest(this.firstName, this.lastName, this.userName, this.email, this.phNo, this.password)).subscribe(data => alert("saved"));
    this.disableForSave = false;
  }

}
