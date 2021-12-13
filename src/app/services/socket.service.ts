import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from "socket.io-client";
import { my_friend } from '../interfaces/my_friend.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() { this.socket = io('http://localhost:4000'); }

  listen(Eventname : string){
    return new Observable<my_friend>((subscriber)=>{
        this.socket.on(Eventname,(data: my_friend)=>{
            subscriber.next(data);
        })
    })
}





}
