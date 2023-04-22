import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: any;
  inputValue: string = '';
  constructor(private messagesService: MessagesService) {}
  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messagesService.getMessages().subscribe((data) => {
      this.messages = data.body;
    });
  }
  postMessage() {
    const message = {
      lesson: '5f9f1b0b0b5b8c0b8c0b8c0b',
      user: '5f9f1b0b0b5b8c0b8c0b8c0b',
      content: this.inputValue,
    };
    console.log(message);
    this.inputValue = '';
    // this.messagesService.postMessage(message).subscribe((data) => {

    //   console.log(data);
    // });
  }
}
