import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-prompt',
  templateUrl: './confirmation-prompt.component.html',
  styleUrls: ['./confirmation-prompt.component.css']
})
export class ConfirmationPromptComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<ConfirmationPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit(): void {
  }

  cerrarDialogo(): void {
    this.dialogo.close(false);
  }
  confirmado(): void {
    this.dialogo.close(true);
  }

}
