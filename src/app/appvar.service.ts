import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server = '192.168.0.117'
  serversim = 'localhost'
  port = '2319'
  serverport
  constructor() {
    this.serverport = 'http://'+this.server+':'+this.port+'/'
  }
}
