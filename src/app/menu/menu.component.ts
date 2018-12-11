import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../model/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor(private menuService: MenuService) { }

    menus: Menu[];

    retrieve() {
        this.menuService.retrieve().subscribe(
            res => {
                this.menus = res;
            });
    }

    ngOnInit() {
        this.retrieve();
    }

}
