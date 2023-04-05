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
      id: 'ID: 1',
      name: 'Neymar Jr',
      image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/21995_47022457A67E1FF5.jpg?w=1200&h=1200&crop=1',
      email: 'neymarJr@gmail.com',
    },
    {
      id: 'ID: 2',
      name: 'Cristiano Ronaldo',
      image: 'https://www.ofutebolero.com.br/__export/1655483775252/sites/elfutboleromx/img/2022/06/17/cristiano.jpg_1535001796.jpg',
      email: 'cristianoRonaldo@gmail.com',
    },
    {
      id: 'ID: 3',
      name: 'Lionel Messi',
      image: 'https://pbs.twimg.com/media/FCFt02kVgAAdxrP.jpg:large',
      email: 'lionelMessi@gmail.com',
    },
    {
      id: 'ID: 4',
      name: 'Haaland',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72saTsf0IYg7WVhkB37Vfzc7QCoUDEaw8lC_F0Ef_VYkLhEaRau69UBdloNfsuMCdSCQ&usqp=CAU',
      email: 'haaland@gmail.com',
    },
    {
      id: 'ID: 5',
      name: 'Mbappe',
      image: 'https://www.elfutbolero.us/__export/1636845948570/sites/elfutboleromx/img/2021/11/13/team_of_france_v_kazakhstan_-_2022_fifa_world_cup_qualifier.jpeg_2062789929.jpeg',
      email: 'mbappe@gmail.com',
    },
  ];

  constructor(private dataService: DataService, private route: Router) {}

  showInfoModal(contact: ContactsList) {
    this.dataService.setData('contact', contact);
    this.route.navigateByUrl('/contact-data');
  }
}
