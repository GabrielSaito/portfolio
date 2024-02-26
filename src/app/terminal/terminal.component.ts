import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit{
  selectedCategory: string = 'home';
  command: string = '';
  isBlinking = false;
  logoff = false;
  terminal = false;
  graphic = false;
  userName = localStorage.getItem('username');

 public technologies: string[] = ['HTML', 'CSS', 'JS', 'Angular', 'Vue', 'Delphi','Ionic', 'C#', 'MAUI', 'EF', 'ASP.NET', 'Razor'  ];
 public   dbs: string[] = ['Firebird', 'MySQl', 'Neo4j', 'PostgreSQL', 'Sqlite' ];  
 constructor(private elementRef: ElementRef) { }


 public contacts = [
  {
    redeSocial: 'Linkedin',
    link: 'http://linkedin.com/',
  },
  {
    redeSocial: 'Instagram',
    link: 'https://www.instagram.com/',
  },  
  {
    redeSocial: 'BlueSky',  
    link: 'https://bsky.app/',
  },
  {
    redeSocial: 'GitHub',  
    link: 'https://github.com/GabrielSaito',
  },
]

 public cursos = [
    {
      nome: 'Fundamentos da Orientação a Objetos',
      link: 'https://balta.io/certificados/9aeabde2-9342-48ae-abc5-1de6d437a79f',
    },
    {
      nome: 'Fundamentos do C#',
      link: 'https://balta.io/certificados/9dc8f648-e644-415c-a4d4-83bee731271e',
    },
    {
      nome: 'Aplicando Orientação a Objetos em Projetos Reais com C# 11 e .NET 7',
      link: 'https://balta.io/certificados/c4ea5c79-3fbe-44a0-b3ff-6379275a7c5d',
    },
    {
      nome: 'Aplicações Mult-Tenant com Entity Framework Core',
      link: 'https://balta.io/certificados/515d34b0-9894-40d2-862e-487e3a6e8d4a',
    },
    {
      nome: 'Começando com Angular',
      link: 'https://balta.io/certificados/ac044874-a55d-4467-8a2e-8fafc532ded6',
    },
    {
      nome: 'Criando Apps Web com Angular 8 e Ionic 4',
      link: 'https://balta.io/certificados/7374cb3c-b94b-44b1-9231-298070990e5a',
    },
    {
      nome: 'Criando Apps Web com Angular e Redux',
      link: 'https://balta.io/certificados/845db7f1-85d9-4d69-aa27-d48d6dd9f898',
    },
    {
      nome: 'Ionic 6 do Zero até Publicação',
      link: 'https://www.udemy.com/certificate/UC-0c39540a-ea7d-4510-abd3-22ab5e3c5b7f',
    },
    {
      nome: '.NET MAUI - Desenvolvendo um App de Controle Financeiro',
      link: 'https://www.udemy.com/certificate/UC-39186a40-7cbb-46dd-b24d-c3489ed99bd4/'
    },
    {
      nome: '.NET MAUI - Crie Apps para Android, iOS, Mac e Windows',
      link: 'https://www.udemy.com/certificate/UC-45f343d2-454b-478d-9218-5e5c1f3bf008/'
    }]

    blogPosts: any[] = [
      { category: 'programming', title: 'I hate Delphi', content: 'Delphi holds a special place in my heart as it was my first job, and I developed a genuine liking for it. The platform provided me with a valuable introduction to programming, and I enjoyed the familiarity of its language and the ease with which I could learn and create within its environment. Despite the challenges posed by Embarcadero licensing policies, the nostalgic and positive memories associated with Delphi continue to influence my perception of the platform. It served as a foundational stepping stone in my career, fostering both skill development and a genuine fondness for programming.' },
     ];

     ngAfterViewInit() {
       window.addEventListener('beforeunload', () => this.stopAudio());
    }
  
    private stopAudio() {
      const audioPlayer: HTMLAudioElement = this.elementRef.nativeElement.querySelector('#audioPlayer');
      audioPlayer.pause();
    }
ngOnInit(): void {
  this.startBlinking(); 
    
 }
 startBlinking(): void {
  setInterval(() => {
    this.isBlinking = !this.isBlinking;
  }, 500); // Ajuste o intervalo conforme necessário
}
stopBlinking(): void {
  this.isBlinking = false;
}
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  executeCommand(): void {
    this.stopBlinking();
    // Lógica para processar comandos
    if (this.selectedCategory === 'home') {
      switch (this.command.toLowerCase()) {
        case 'technologies':
          this.selectedCategory = 'technologies';
          break;
        case 'certificates':
          this.selectedCategory = 'certificates';
          break;
        case 'experience':
          this.selectedCategory = 'experience';
          break;
        case 'help':
          this.selectedCategory = 'help';
          console.log("Available commands: 'exit','technologies', 'certificates', 'experience', 'poweroff' ");
          break;
          case 'poweroff':
            this.selectedCategory = 'poweroff';
            console.log("desligando'");
            break;
            case 'sudo':
              this.selectedCategory = 'sudo';
               break;
               case 'logoff':
                this.logoff = true;
                this.selectedCategory = 'logoff';
                 break;
              case 'sudo su':
                this.selectedCategory = 'sudo su';
                 break;

                 case 'aboutme':
                  case 'about me':

                  this.selectedCategory = 'aboutme' ;
                   break;
                  case 'blog':
  
                    this.selectedCategory = 'blog' ;
                     break;

                     case 'rickroll':
  
                     this.selectedCategory = 'rickroll' ;
                      break;

                      case 'contact':
  
                      this.selectedCategory = 'contact' ;
                       break;

                   case 'clear':
  
                    this.selectedCategory = '' ;
                     break;
              
                  case '3d':            

                  this.selectedCategory = 'apt i graphic-card-display';
                  this.selectedCategory = '3d';
               

                  break;

                  case 'apt install graphic-card-display':
                    case 'apt i graphic-card-display':       
                  localStorage.setItem('graphic', 'true');
                  location.reload();

                  break;

        default:
          console.log('Invalid command. Type "help" for available commands.');
          break;  
      }
    } else {
      if (this.command.toLowerCase() === 'exit' || 'cd .') {
        this.selectedCategory = 'home';
      } else {
        console.log('Type "exit" to go back to the home category.');
      }
    }

    // Limpa o campo de entrada
    this.command = '';
  }
  onCategorySelected(category: string) {
    this.selectedCategory = category;

    if (category === 'poweroff') {
      this.selectedCategory = 'poweroff';
      console.log("Desligando...");
    }
}
}
