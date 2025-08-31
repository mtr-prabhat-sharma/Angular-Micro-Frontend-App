import { Component, Injector, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private view: ViewContainerRef, private injector: Injector) {}
  title = 'shell-app';

async loadRemote() {
    // import remote AppComponent
    const remote = await import('products-app/AppComponent');
    const RemoteAppComponent = remote.AppComponent;

    // render it dynamically
    this.view.createComponent(RemoteAppComponent, { injector: this.injector });
  }


}
