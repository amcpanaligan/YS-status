import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import 'firebase/database';

import { Member, Team } from 'src/_shared/models';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  teams: any;
  teamsRef: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teamsRef = this.db.list('/teams');

    this.teams = this.teamsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ), 
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void { }

  onChange($event, member: Member, team: Team): void {
    member.lastUpdate = new Date();

    //// The Boolean Toggle triggers a little bit firing the update first
    //// Hack using `setTimeout`
    setTimeout(() => {
      this.teamsRef.update(team.key, { members: team.members }).then(() => {
        //// response has no content
        // member.loading = false;
        console.info('Update complete');
      }).catch((err) => {
        // member.loading = false;
        alert('This is a cheap alert however, something wrong happened! Contact the developer');
      });
    })
  }
}
