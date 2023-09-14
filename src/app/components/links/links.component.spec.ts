import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  const subject = new Subject<any>();

  const mock = jasmine.createSpyObj('LocalStorageService', [], {
    getItem: () => {
      return '[{"ok":true,"result":{"code":"tlKslR","short_link":"shrtco.de/tlKslR","full_short_link":"https://shrtco.de/tlKslR","short_link2":"9qr.de/tlKslR","full_short_link2":"https://9qr.de/tlKslR","short_link3":"shiny.link/tlKslR","full_short_link3":"https://shiny.link/tlKslR","share_link":"shrtco.de/share/tlKslR","full_share_link":"https://shrtco.de/share/tlKslR","original_link":"http://youtube.com"}},{"ok":true,"result":{"code":"EHQY4t","short_link":"shrtco.de/EHQY4t","full_short_link":"https://shrtco.de/EHQY4t","short_link2":"9qr.de/EHQY4t","full_short_link2":"https://9qr.de/EHQY4t","short_link3":"shiny.link/EHQY4t","full_short_link3":"https://shiny.link/EHQY4t","share_link":"shrtco.de/share/EHQY4t","full_share_link":"https://shrtco.de/share/EHQY4t","original_link":"http://facebook.com"}},{"ok":true,"result":{"code":"VVvVeZ","short_link":"shrtco.de/VVvVeZ","full_short_link":"https://shrtco.de/VVvVeZ","short_link2":"9qr.de/VVvVeZ","full_short_link2":"https://9qr.de/VVvVeZ","short_link3":"shiny.link/VVvVeZ","full_short_link3":"https://shiny.link/VVvVeZ","share_link":"shrtco.de/share/VVvVeZ","full_share_link":"https://shrtco.de/share/VVvVeZ","original_link":"http://google.com"}}]';
    },
    watchStorage: () => {
      return subject.asObservable();
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinksComponent],
      providers: [
        {
          provide: LocalStorageService,
          useValue: mock
        }
      ]
    });
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return same length value from local storage', fakeAsync(() => {
    subject.next(
      '[{"ok":true,"result":{"code":"tlKslR","short_link":"shrtco.de/tlKslR","full_short_link":"https://shrtco.de/tlKslR","short_link2":"9qr.de/tlKslR","full_short_link2":"https://9qr.de/tlKslR","short_link3":"shiny.link/tlKslR","full_short_link3":"https://shiny.link/tlKslR","share_link":"shrtco.de/share/tlKslR","full_share_link":"https://shrtco.de/share/tlKslR","original_link":"http://youtube.com"}},{"ok":true,"result":{"code":"EHQY4t","short_link":"shrtco.de/EHQY4t","full_short_link":"https://shrtco.de/EHQY4t","short_link2":"9qr.de/EHQY4t","full_short_link2":"https://9qr.de/EHQY4t","short_link3":"shiny.link/EHQY4t","full_short_link3":"https://shiny.link/EHQY4t","share_link":"shrtco.de/share/EHQY4t","full_share_link":"https://shrtco.de/share/EHQY4t","original_link":"http://facebook.com"}},{"ok":true,"result":{"code":"VVvVeZ","short_link":"shrtco.de/VVvVeZ","full_short_link":"https://shrtco.de/VVvVeZ","short_link2":"9qr.de/VVvVeZ","full_short_link2":"https://9qr.de/VVvVeZ","short_link3":"shiny.link/VVvVeZ","full_short_link3":"https://shiny.link/VVvVeZ","share_link":"shrtco.de/share/VVvVeZ","full_share_link":"https://shrtco.de/share/VVvVeZ","original_link":"http://google.com"}}]'
    );
    tick();
    expect(component.urls.length).toEqual(3);
  }));
});
