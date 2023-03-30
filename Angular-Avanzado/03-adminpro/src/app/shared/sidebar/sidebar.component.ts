import { Component } from '@angular/core';

import { Usuario } from '../../models/usuario.model';

import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  public usuario: Usuario;
  public menuItems: any[];

  constructor(private sidebarService: SidebarService,
              private usuarioService: UsuarioService) {
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
  }

}
