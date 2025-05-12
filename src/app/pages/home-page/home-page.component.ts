import { Component } from '@angular/core';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { NoteListComponent } from '../../components/note-list/note-list.component';
import { NoteCardComponent } from '../../components/note-card/note-card.component';

@Component({
  selector: 'app-home-page',
  imports: [SearchBarComponent, NoteListComponent, NoteCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
