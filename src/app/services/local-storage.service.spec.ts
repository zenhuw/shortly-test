import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocalStorageService]
    });

    service = TestBed.inject(LocalStorageService);
  });

  it('observable should emit value when setItem is called', (done: DoneFn) => {
    service.watchStorage().subscribe(res => {
      expect(res).toEqual('added');
      done();
    });
    service.setItem(
      'urls',
      '[{"ok":true,"result":{"code":"tlKslR","short_link":"shrtco.de/tlKslR","full_short_link":"https://shrtco.de/tlKslR","short_link2":"9qr.de/tlKslR","full_short_link2":"https://9qr.de/tlKslR","short_link3":"shiny.link/tlKslR","full_short_link3":"https://shiny.link/tlKslR","share_link":"shrtco.de/share/tlKslR","full_share_link":"https://shrtco.de/share/tlKslR","original_link":"http://youtube.com"}},{"ok":true,"result":{"code":"EHQY4t","short_link":"shrtco.de/EHQY4t","full_short_link":"https://shrtco.de/EHQY4t","short_link2":"9qr.de/EHQY4t","full_short_link2":"https://9qr.de/EHQY4t","short_link3":"shiny.link/EHQY4t","full_short_link3":"https://shiny.link/EHQY4t","share_link":"shrtco.de/share/EHQY4t","full_share_link":"https://shrtco.de/share/EHQY4t","original_link":"http://facebook.com"}},{"ok":true,"result":{"code":"VVvVeZ","short_link":"shrtco.de/VVvVeZ","full_short_link":"https://shrtco.de/VVvVeZ","short_link2":"9qr.de/VVvVeZ","full_short_link2":"https://9qr.de/VVvVeZ","short_link3":"shiny.link/VVvVeZ","full_short_link3":"https://shiny.link/VVvVeZ","share_link":"shrtco.de/share/VVvVeZ","full_share_link":"https://shrtco.de/share/VVvVeZ","original_link":"http://google.com"}}]'
    );
  });
});
