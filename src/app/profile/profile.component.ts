import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  payer() {
    Swal.fire({
      title: 'Voulez-vous Effectuer ce paiement ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Oui !',
      denyButtonText: `Non !`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Oui!', 'Paiement Effectué avec succes', 'success')
      } else if (result.isDenied) {
        Swal.fire('Non', 'Aucun paiement', 'info')
      }
    })
  }
}
