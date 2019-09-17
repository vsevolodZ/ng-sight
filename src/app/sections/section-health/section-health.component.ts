import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
{id: 1, name: "cosmos.mont.ru", isOnline: true},
{id: 2, name: "phobos.mont.ru", isOnline: true},
{id: 3, name: "hubble.mont.ru", isOnline: false},
{id: 4, name: "lotus.mont.ru", isOnline: true},
{id: 5, name: "deimos.mont.ru", isOnline: true},
{id: 6, name: "disciple.mont.ru", isOnline: false},
{id: 7, name: "ansible.mont.ru", isOnline: true},
{id: 8, name: "apache.mont.ru", isOnline: true},
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;


  ngOnInit() {
  }

}
