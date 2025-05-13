import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../../note.modal';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { NoteCardComponent } from '../note-card/note-card.component';
@Component({
  selector: 'app-note-list',
  imports: [CommonModule, NoteCardComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
  standalone: true,
})
export class NoteListComponent {
  @Output() editNote = new EventEmitter<{ note: Note; index: number }>();
  @Output() deleteNote = new EventEmitter<number>();
  public notes = [
    {
      title: 'Shopping List',
      description: 'Milk, Bread, Eggs',
      date: new Date('2025-05-01T10:30:00'),
    },
    {
      title: 'Project Ideas',
      description: 'Build a personal CRM app',
      date: new Date('2025-05-05T12:00:00'),
    },
    {
      title: 'Angular Tips',
      description: 'Use trackBy for ngFor performance',
      date: String(new Date('2025-05-10T09:15:00')),
    },
  ];

  loadModal(note: Note, index: number) {
    console.log('Hello', note, index);
    this.editNote.emit({ note, index });
  }
  showNoteCard() {}
}
