import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactsList } from '../interfaces/ContactsList';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  public contacts: ContactsList[] = [
    {
      id: '(11) 99527-1252',
      name: 'Neymar Jr',
      image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/21995_47022457A67E1FF5.jpg?w=1200&h=1200&crop=1',
      email: 'neymarJr@gmail.com',
    },
    {
      id: '(81) 9876-5432',
      name: 'Maria',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'maria@hotmail.com',
    },
    {
      id: '(11) 1234-5678',
      name: 'Pedro',
      image: 'https://media.istockphoto.com/photos/portrait-of-handsome-man-picture-id1245419427',
      email: 'pedro@yahoo.com',
    },
    {
      id: '(21) 9999-8888',
      name: 'Juliana',
      image: 'https://media.istockphoto.com/photos/happy-woman-laughing-outdoors-picture-id1154090429',
      email: 'juliana@gmail.com',
    },
    {
      id: '(31) 5555-4444',
      name: 'Carlos',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'carlos@outlook.com',
    },
  ];

  constructor(private dataService: DataService, private route: Router) {}

  showInfoModal(contact: ContactsList) {
    this.dataService.setData('contact', contact);
    this.route.navigateByUrl('/contact-data');
  }
}
