import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LinkShortenerService } from './link-shortener.service.';

describe('LinkShortenerService', () => {
  let httpMock: HttpTestingController;
  let service: LinkShortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LinkShortenerService]
    });

    service = TestBed.inject(LinkShortenerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('shorten() should http get to https://shrtco.de/', () => {
    const url = {
      ok: true,
      result: {
        code: 'KCveN',
        short_link: 'shrtco.de/KCveN',
        full_short_link: 'https://shrtco.de/KCveN',
        short_link2: '9qr.de/KCveN',
        full_short_link2: 'https://9qr.de/KCveN',
        share_link: 'shrtco.de/share/KCveN',
        full_share_link: 'https://shrtco.de/share/KCveN',
        original_link: 'http://example.org/very/long/link.html'
      }
    };

    service.shorten('http://example.org/very/long/link.html').subscribe(res => {
      expect(res).toEqual(url);
    });

    const req = httpMock.expectOne('https://api.shrtco.de/v2/shorten?url=http://example.org/very/long/link.html');
    expect(req.request.method).toEqual('GET');
    req.flush(url);

    httpMock.verify();
  });
});
