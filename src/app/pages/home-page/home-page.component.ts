import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { NoteListComponent } from '../../components/note-list/note-list.component';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [SearchBarComponent, NoteListComponent, NoteCardComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @ViewChild('modalReference', { read: ViewContainerRef })
  modal!: ViewContainerRef;
  @ViewChild(NoteListComponent)
  noteListComponent!: NoteListComponent;
  public loadModal(mode: 'add' | 'edit') {
    this.modal.clear();
    const modalRef: ComponentRef<ModalComponent> = this.modal.createComponent(ModalComponent);
    modalRef.instance.mode = mode;

    // Subscribe to closeModal
    modalRef.instance.closeModal.subscribe(() => {
      modalRef.destroy(); // 💥 Closes the modal
    });

    // Optionally handle form submission
    modalRef.instance.submitForm.subscribe((data) => {
      console.log('Form submitted:', data);
      console.log(this.noteListComponent.notes);
      this.noteListComponent.notes.push({
        ...data,
        date: new Date(), // ✅ Add date on submission
      });
    });
  }
}
