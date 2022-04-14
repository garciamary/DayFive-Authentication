import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url = "https://api-ubertickets.cloudstaff.com/v1/tickets/my?exclude_signature=1&page=1&_keyword=&_labels=&_assignees=&_templates=&hasAdvanceFilter=false";

  constructor(private _httpClient:HttpClient, private _appAuthService:AppAuthService) { }

  getAll(): any{
      const token = this._appAuthService.getSession()
      return this._httpClient.get(this.url, {
      headers: new HttpHeaders ().set("Authorization", "Bearer " + token)
    });
  }
}
