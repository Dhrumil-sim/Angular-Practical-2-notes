import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Note } from '../../note.modal';

@Component({
  selector: 'app-note-list',
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
  standalone: true,
})
export class NoteListComponent {
  notes = [
    { title: 'Shopping List', description: 'Milk, Bread, Eggs' },
    { title: 'Project Ideas', description: 'Build a personal CRM app' },
    { title: 'Angular Tips', description: 'Use trackBy for ngFor performance' },
  ];

  editNote(note: Note) {}
}
