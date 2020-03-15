import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  @ViewChild('tabSet', null) tabSet: any;

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

  onChange($event, member: Member, team: Team, teamName): void {
    member.lastUpdate = new Date();

    //// The Boolean Toggle triggers a little bit firing the update first
    //// Hack using `setTimeout`
    setTimeout(() => {
      this.teamsRef.update(team.key, { members: team.members }).then(() => {
        //// response has no content
        console.info('Update complete');
        this.tabSet.select(teamName);
      }).catch((err) => {
        console.error(err);
        alert('This is a cheap alert however, something wrong happened! Contact the developer');
      });
    })
  }
}
