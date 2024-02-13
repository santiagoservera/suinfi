import { Component, OnInit,} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements OnInit {
  chatOpen: boolean = false;
  
  
  message: string = ''; 
  options = [
    {
      question: "¿Cómo estás?",
      answer: "Estoy bien, gracias. ¿Y tú?"
    },
    {
      question: "¿Qué puedes hacer?",
      answer: "Puedo ayudarte con diferentes tareas, como responder preguntas, dar información y realizar cálculos."
    },
    {
      question: "¿Cómo puedo hacer una pregunta?",
      answer: "Simplemente escribe tu pregunta en el campo de entrada y haz clic en 'Enviar'."
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  toggleMenu(){
    this.chatOpen=!this.chatOpen
    console.log('Hola')
  }

  selectOption(option: any) {
    // Mostrar la respuesta del chatbot
    this.message = option.question
    console.log(option)
  }
}
