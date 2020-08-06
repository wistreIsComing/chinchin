import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Record } from '../interfaces/records';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  recordsCollection: AngularFirestoreCollection<Record>;
  records: Observable<Record[]>;

  constructor(public afs: AngularFirestore) {
    // this.records = this.afs.collection('records').valueChanges();
    this.records = this.afs.collection('records').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Record;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getRecords() {
    return this.records;
  }
}
